// 오늘 뭐먹지 — 전체 화면 스크린샷 (Playwright)
// 광고/서버 없이 브라우저에서 핵심 플로우를 돌며 캡처해요.
// 사전: dev 서버(http://localhost:5173) 실행.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:5173/";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const VIEWPORT = { width: 390, height: 844 };
let n = 0;

async function shot(page, name) {
  n += 1;
  const file = `${OUT}/${String(n).padStart(2, "0")}-${name}.png`;
  await page.waitForTimeout(450);
  await page.screenshot({ path: file, fullPage: true });
  console.log("📸", file);
}

async function tap(page, text) {
  const btn = page
    .getByRole("button", { name: text })
    .filter({ has: undefined })
    .first();
  const enabled = page.locator(`button:not([disabled])`, { hasText: text }).first();
  if (await enabled.count()) {
    await enabled.click();
    return;
  }
  await btn.click();
}

async function waitText(page, text, timeout = 15000) {
  await page.getByText(text, { exact: false }).first().waitFor({ timeout });
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const page = await ctx.newPage();

// 홈
await page.goto(BASE, { waitUntil: "networkidle" });
await waitText(page, "오늘 뭐먹지");
await shot(page, "home");

// 끼니/카테고리 좁혀보기 (한식만)
await tap(page, "저녁");
// 카테고리 전체 선택 해제 후 한식만? 간단히 한식 칩 토글 데모만 캡처
await shot(page, "home-filter");

// 추천받기 → 결과
await tap(page, "오늘의 메뉴 추천받기");
await waitText(page, "오늘의 추천 메뉴");
await shot(page, "result");

// 상세 보기(광고 미설정 → 즉시 해금)
await tap(page, "광고 보고 자세히 보기");
await waitText(page, "추천 상황");
await shot(page, "result-detail");

// 다른 메뉴 추천(광고 미설정 → 즉시 교체)
await tap(page, "광고 보고 다른 메뉴 추천");
await page.waitForTimeout(400);
await shot(page, "result-more");

// 이거 먹을래! → 홈 복귀(기록됨)
await tap(page, "이거 먹을래");
await waitText(page, "오늘 뭐먹지");
await shot(page, "home-recorded");

// 도감
await tap(page, "내가 먹은 메뉴 도감");
await waitText(page, "내 메뉴 도감");
await shot(page, "collection");

await browser.close();
console.log(`\n✅ 완료: ${n}장 → ${OUT}/`);
