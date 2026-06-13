import { Button, Top } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
import { Chip } from "../components/Chip";
import { BannerAd } from "../components/BannerAd";
import {
  CATEGORIES,
  type CategoryId,
  MEALS,
  type MealId,
} from "../data/menus";
import type { Level, Streak } from "../lib/storage";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 800, color: colors.grey800 }}>
        {value}
      </div>
      <div style={{ fontSize: 12, color: colors.grey600, marginTop: 2 }}>
        {label}
      </div>
    </div>
  );
}

export function HomeScreen({
  meal,
  setMeal,
  selectedCats,
  toggleCat,
  streak,
  level,
  collected,
  totalMenus,
  onRecommend,
  onOpenCollection,
}: {
  meal: MealId;
  setMeal: (m: MealId) => void;
  selectedCats: Set<CategoryId>;
  toggleCat: (c: CategoryId) => void;
  streak: Streak;
  level: Level;
  collected: number;
  totalMenus: number;
  onRecommend: () => void;
  onOpenCollection: () => void;
}) {
  const canRecommend = selectedCats.size > 0;
  return (
    <>
      <Top
        title={<Top.TitleParagraph size={28}>오늘 뭐먹지? 🍽️</Top.TitleParagraph>}
        subtitleBottom={
          <Top.SubtitleParagraph size={15}>
            고민은 그만! 골라줄게요.
          </Top.SubtitleParagraph>
        }
      />

      <div style={{ padding: "0 24px" }}>
        {/* 게이미피케이션 상태 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 0",
            borderRadius: 16,
            backgroundColor: colors.grey50,
            margin: "8px 0 24px",
          }}
        >
          <Stat value={`${streak.count}일`} label="연속 기록" />
          <div style={{ width: 1, height: 28, background: colors.grey200 }} />
          <Stat value={level.title} label="내 등급" />
          <div style={{ width: 1, height: 28, background: colors.grey200 }} />
          <Stat value={`${collected}/${totalMenus}`} label="도감" />
        </div>

        {/* 끼니 */}
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>
          언제 먹을까요?
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {MEALS.map((m) => (
            <Chip
              key={m.id}
              label={m.label}
              emoji={m.emoji}
              selected={meal === m.id}
              onClick={() => setMeal(m.id)}
            />
          ))}
        </div>

        {/* 카테고리 */}
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>
          어떤 음식이 끌려요?
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {CATEGORIES.map((c) => (
            <Chip
              key={c.id}
              label={c.label}
              emoji={c.emoji}
              selected={selectedCats.has(c.id)}
              onClick={() => toggleCat(c.id)}
            />
          ))}
        </div>

        <Button
          display="full"
          size="xlarge"
          onClick={onRecommend}
          disabled={!canRecommend}
        >
          오늘의 메뉴 추천받기
        </Button>
        <div style={{ height: 12 }} />
        <Button display="full" variant="weak" color="dark" onClick={onOpenCollection}>
          🗂️ 내가 먹은 메뉴 도감
        </Button>

        <div style={{ marginTop: 24 }}>
          <BannerAd slot="home" />
        </div>
      </div>
    </>
  );
}
