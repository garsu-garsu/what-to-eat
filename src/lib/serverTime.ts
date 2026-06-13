import { getServerTime } from "@apps-in-toss/web-framework";

/** KST(UTC+9) 기준 날짜 키 "YYYY-MM-DD". 가능하면 서버 시간을, 아니면 기기 시간을 사용해요. */
export async function getKstDateKey(): Promise<string> {
  let ms = Date.now();
  try {
    if (getServerTime.isSupported()) {
      const t = await getServerTime();
      if (typeof t === "number" && Number.isFinite(t)) ms = t;
    }
  } catch {
    /* 기기 시간 사용 */
  }
  return toKstDateKey(ms);
}

/** UTC ms → KST 날짜 키. */
export function toKstDateKey(ms: number): string {
  const kst = new Date(ms + 9 * 60 * 60 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** dateKey 기준 어제 키. */
export function previousDateKey(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const ms = Date.UTC(y, m - 1, d) - 24 * 60 * 60 * 1000;
  const prev = new Date(ms);
  const yy = prev.getUTCFullYear();
  const mm = String(prev.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(prev.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}
