import { type CategoryId, type Menu, menusByCategory } from "../data/menus";

/**
 * 선택한 카테고리에서 메뉴 하나를 추천해요(콘텐츠 회전).
 * 직전에 보여준 메뉴는 제외해서 같은 메뉴가 연달아 나오지 않게 해요. (룰렛/뽑기 아님)
 */
export function pickMenu(
  categories: CategoryId[],
  excludeName?: string,
): Menu | null {
  const pool = menusByCategory(categories);
  if (pool.length === 0) return null;
  const candidates =
    pool.length > 1 && excludeName
      ? pool.filter((m) => m.name !== excludeName)
      : pool;
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx];
}
