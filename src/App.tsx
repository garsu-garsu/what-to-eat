import { closeView, graniteEvent } from "@apps-in-toss/web-framework";
import { useToast } from "@toss/tds-mobile";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

import { HomeScreen } from "./screens/HomeScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { CollectionScreen } from "./screens/CollectionScreen";
import { CATEGORIES, type CategoryId, MENUS, type MealId, type Menu } from "./data/menus";
import { pickMenu } from "./lib/recommend";
import { getKstDateKey } from "./lib/serverTime";
import {
  getCollection,
  getStreak,
  getTotalEaten,
  levelOf,
  recordEaten,
  type Level,
  type Streak,
} from "./lib/storage";
import { shareMenu } from "./data/share";
import { EVENT, track, trackScreen } from "./lib/analytics";
import { useAdGate } from "./hooks/useAdGate";
import { useInterstitialAd } from "./hooks/useInterstitialAd";

type View = "home" | "result" | "collection";

const TOTAL_MENUS = MENUS.length;

function App() {
  const toast = useToast();
  const { watchThen } = useAdGate();
  const { maybeShow } = useInterstitialAd(3);

  const [view, setView] = useState<View>("home");
  const [meal, setMeal] = useState<MealId>("lunch");
  const [selectedCats, setSelectedCats] = useState<Set<CategoryId>>(
    () => new Set(CATEGORIES.map((c) => c.id)),
  );

  const [menu, setMenu] = useState<Menu | null>(null);
  const [detailUnlocked, setDetailUnlocked] = useState(false);

  const [collection, setCollection] = useState<Record<string, string[]>>({});
  const [streak, setStreak] = useState<Streak>({ count: 0, lastDate: "" });
  const [total, setTotal] = useState(0);
  const todayKeyRef = useRef<string>("");

  // 초기 로드
  useEffect(() => {
    setCollection(getCollection());
    setStreak(getStreak());
    setTotal(getTotalEaten());
    void getKstDateKey().then((k) => {
      todayKeyRef.current = k;
    });
    trackScreen("home");
  }, []);

  // 네이티브 뒤로가기 → 홈 아니면 홈으로, 홈이면 종료
  const viewRef = useRef<View>("home");
  viewRef.current = view;
  useEffect(() => {
    try {
      return graniteEvent.addEventListener("backEvent", {
        onEvent: () => {
          if (viewRef.current !== "home") {
            setView("home");
          } else {
            try {
              closeView();
            } catch {
              /* noop */
            }
          }
        },
      });
    } catch {
      return undefined;
    }
  }, []);

  const collected = Object.values(collection).reduce((a, l) => a + l.length, 0);
  const level: Level = levelOf(total);

  const toggleCat = useCallback((c: CategoryId) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }, []);

  const recommend = useCallback(() => {
    const picked = pickMenu([...selectedCats]);
    if (!picked) return;
    setMenu(picked);
    setDetailUnlocked(false);
    setView("result");
    track(EVENT.recommendShown, { menu: picked.name, meal });
    trackScreen("result");
  }, [selectedCats, meal]);

  // 광고 보고 다른 메뉴 추천(결정적: 추천 +1)
  const more = useCallback(() => {
    watchThen(() => {
      const picked = pickMenu([...selectedCats], menu?.name);
      if (!picked) return;
      setMenu(picked);
      setDetailUnlocked(false);
      track(EVENT.recommendMore, { menu: picked.name });
    }, "recommend_more");
  }, [watchThen, selectedCats, menu]);

  // 광고 보고 상세 해금(결정적: 이 메뉴 상세)
  const unlockDetail = useCallback(() => {
    watchThen(() => {
      setDetailUnlocked(true);
      track(EVENT.menuDetailUnlocked, { menu: menu?.name ?? "" });
    }, "menu_detail");
  }, [watchThen, menu]);

  // 이거 먹을래! → 기록 + 도감/연속/등급 갱신 → (가끔 전면) → 홈
  const eat = useCallback(() => {
    if (!menu) return;
    const res = recordEaten(menu.category, menu.name, todayKeyRef.current);
    setCollection({ ...res.collection });
    setStreak(res.streak);
    setTotal(res.total);
    track(EVENT.menuEaten, { menu: menu.name, category: menu.category });
    if (res.leveledUp) track(EVENT.levelUp, { level: res.level.title });

    const msg = res.leveledUp
      ? `🎉 등급 상승! ${res.level.title}`
      : res.newlyCollected
        ? `도감에 ${menu.name} 추가! 🗂️`
        : `${menu.name} 기록 완료!`;

    maybeShow(() => {
      setView("home");
      toast.openToast(msg);
    }, "after_eat");
  }, [menu, maybeShow, toast]);

  const share = useCallback(() => {
    if (!menu) return;
    void shareMenu(menu.name).then((ok) => {
      if (ok) track(EVENT.shareCompleted, { menu: menu.name });
    });
  }, [menu]);

  const goHome = useCallback(() => setView("home"), []);
  const openCollection = useCallback(() => {
    setCollection(getCollection());
    setView("collection");
    trackScreen("collection");
  }, []);

  if (view === "result" && menu) {
    return (
      <ResultScreen
        menu={menu}
        detailUnlocked={detailUnlocked}
        onMore={more}
        onUnlock={unlockDetail}
        onEat={eat}
        onShare={share}
        onHome={goHome}
      />
    );
  }

  if (view === "collection") {
    return <CollectionScreen collection={collection} onHome={goHome} />;
  }

  return (
    <HomeScreen
      meal={meal}
      setMeal={setMeal}
      selectedCats={selectedCats}
      toggleCat={toggleCat}
      streak={streak}
      level={level}
      collected={collected}
      totalMenus={TOTAL_MENUS}
      onRecommend={recommend}
      onOpenCollection={openCollection}
    />
  );
}

export default App;
