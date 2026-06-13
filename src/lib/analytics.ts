import { eventLog } from "@apps-in-toss/web-framework";

type Primitive = string | number | boolean;
type Params = Record<string, Primitive | null | undefined>;
type LogType = "event" | "screen" | "click" | "impression";

function clean(p: Params): Record<string, Primitive> {
  const o: Record<string, Primitive> = {};
  for (const [k, v] of Object.entries(p)) if (v != null) o[k] = v;
  return o;
}

export function track(
  name: string,
  params: Params = {},
  type: LogType = "event",
): void {
  try {
    void eventLog({ log_name: name, log_type: type, params: clean(params) }).catch(
      () => {},
    );
  } catch {
    /* noop */
  }
}

export function trackScreen(name: string, params: Params = {}): void {
  track(`screen_${name}`, params, "screen");
}

// 공통(앱 간 비교) + 앱 고유 이벤트
export const EVENT = {
  adRewarded: "ad_rewarded",
  adInterstitial: "ad_interstitial_shown",
  adBannerImpression: "ad_banner_impression",
  shareCompleted: "share_completed",
  // 앱 고유
  recommendShown: "recommend_shown",
  recommendMore: "recommend_more",
  menuDetailUnlocked: "menu_detail_unlocked",
  menuEaten: "menu_eaten",
  levelUp: "level_up",
} as const;
