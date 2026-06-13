import type { CategoryId } from "../data/menus";
import { previousDateKey } from "./serverTime";

const KEY_COLLECTION = "wte_collection";
const KEY_STREAK = "wte_streak";
const KEY_TOTAL = "wte_total";

export interface Streak {
  count: number;
  lastDate: string; // KST date key
}

export interface Level {
  index: number;
  title: string;
  /** 현재 레벨 시작 누적치 */
  from: number;
  /** 다음 레벨까지 누적치(마지막 레벨이면 null) */
  next: number | null;
}

const LEVELS: { title: string; from: number }[] = [
  { title: "입맛 새내기", from: 0 },
  { title: "입맛 탐험가", from: 5 },
  { title: "미식가", from: 15 },
  { title: "대식가", from: 30 },
  { title: "미식 마스터", from: 50 },
];

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* noop */
  }
}

/** 카테고리별 수집한 메뉴명 목록. */
export function getCollection(): Record<string, string[]> {
  return read<Record<string, string[]>>(KEY_COLLECTION, {});
}

export function getTotalEaten(): number {
  return read<number>(KEY_TOTAL, 0);
}

export function getStreak(): Streak {
  return read<Streak>(KEY_STREAK, { count: 0, lastDate: "" });
}

export function levelOf(total: number): Level {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i += 1) {
    if (total >= LEVELS[i].from) idx = i;
  }
  const cur = LEVELS[idx];
  const nextLevel = LEVELS[idx + 1];
  return {
    index: idx,
    title: cur.title,
    from: cur.from,
    next: nextLevel ? nextLevel.from : null,
  };
}

export interface RecordResult {
  collection: Record<string, string[]>;
  streak: Streak;
  total: number;
  level: Level;
  leveledUp: boolean;
  newlyCollected: boolean;
}

/** "이거 먹을래!" 기록 — 도감/연속기록/누적/등급 갱신. */
export function recordEaten(
  category: CategoryId,
  menuName: string,
  todayKey: string,
): RecordResult {
  const prevTotal = getTotalEaten();
  const prevLevel = levelOf(prevTotal);

  // 도감
  const collection = getCollection();
  const list = collection[category] ?? [];
  const newlyCollected = !list.includes(menuName);
  if (newlyCollected) {
    collection[category] = [...list, menuName];
    write(KEY_COLLECTION, collection);
  }

  // 연속 기록(같은 날 여러 번이면 유지, 어제면 +1, 그 외엔 1로 리셋)
  const streak = getStreak();
  let nextStreak: Streak;
  if (streak.lastDate === todayKey) {
    nextStreak = streak;
  } else if (streak.lastDate === previousDateKey(todayKey)) {
    nextStreak = { count: streak.count + 1, lastDate: todayKey };
  } else {
    nextStreak = { count: 1, lastDate: todayKey };
  }
  write(KEY_STREAK, nextStreak);

  // 누적/등급
  const total = prevTotal + 1;
  write(KEY_TOTAL, total);
  const level = levelOf(total);

  return {
    collection,
    streak: nextStreak,
    total,
    level,
    leveledUp: level.index > prevLevel.index,
    newlyCollected,
  };
}
