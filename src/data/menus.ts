export type CategoryId =
  | "korean"
  | "chinese"
  | "japanese"
  | "western"
  | "snack"
  | "cafe"
  | "dessert";

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
}

export interface Menu {
  name: string;
  emoji: string;
  category: CategoryId;
  /** 한 줄 설명(무료 노출) */
  desc: string;
  /** 상세(광고 보고 해금): 맛 특징 · 추천 상황 · 곁들임 */
  taste: string;
  goodFor: string;
  pairing: string;
}

export const CATEGORIES: Category[] = [
  { id: "korean", label: "한식", emoji: "🍚" },
  { id: "chinese", label: "중식", emoji: "🥢" },
  { id: "japanese", label: "일식", emoji: "🍣" },
  { id: "western", label: "양식", emoji: "🍝" },
  { id: "snack", label: "분식", emoji: "🌭" },
  { id: "cafe", label: "카페", emoji: "☕" },
  { id: "dessert", label: "디저트", emoji: "🍰" },
];

export const CATEGORY_LABEL: Record<CategoryId, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
) as Record<CategoryId, string>;

export const MENUS: Menu[] = [
  // 한식
  { name: "김치찌개", emoji: "🍲", category: "korean", desc: "얼큰한 국물에 밥 한 그릇 뚝딱", taste: "묵은지의 깊고 칼칼한 맛", goodFor: "속을 든든히 채우고 싶은 날", pairing: "계란말이 · 공깃밥" },
  { name: "비빔밥", emoji: "🥗", category: "korean", desc: "나물과 고추장의 균형 잡힌 한 그릇", taste: "고소함과 매콤함이 어우러진 맛", goodFor: "가볍지만 든든하게 먹고 싶을 때", pairing: "된장국 · 계란후라이" },
  { name: "제육볶음", emoji: "🥘", category: "korean", desc: "매콤달콤 밥도둑 돼지고기 볶음", taste: "매콤달콤하고 불맛 가득", goodFor: "밥을 많이 먹고 싶은 날", pairing: "상추쌈 · 된장국" },
  { name: "삼겹살", emoji: "🥓", category: "korean", desc: "지글지글 구워 먹는 국민 고기", taste: "고소한 기름과 쫄깃한 식감", goodFor: "여럿이 모여 든든하게", pairing: "쌈채소 · 된장찌개" },
  { name: "순두부찌개", emoji: "🍲", category: "korean", desc: "보들보들 순두부의 얼큰한 국물", taste: "부드럽고 칼칼한 국물 맛", goodFor: "쌀쌀하고 속풀이가 필요한 날", pairing: "공깃밥 · 김" },
  { name: "냉면", emoji: "🍜", category: "korean", desc: "시원한 육수에 쫄깃한 면", taste: "새콤하고 시원한 육수", goodFor: "더운 날 입맛 없을 때", pairing: "수육 · 만두" },
  { name: "불고기", emoji: "🥩", category: "korean", desc: "달큰한 양념의 부드러운 소고기", taste: "달짝지근하고 부드러운 맛", goodFor: "온 가족 무난하게", pairing: "버섯 · 당면" },

  // 중식
  { name: "짜장면", emoji: "🍜", category: "chinese", desc: "춘장 향 가득한 국민 면 요리", taste: "달큰 짭짤한 춘장의 감칠맛", goodFor: "고민될 땐 역시 무난한 선택", pairing: "탕수육 · 단무지" },
  { name: "짬뽕", emoji: "🍲", category: "chinese", desc: "해물 가득 얼큰한 빨간 국물면", taste: "불맛 도는 매콤한 해물 국물", goodFor: "얼큰하게 풀고 싶은 날", pairing: "군만두 · 짜장면 반반" },
  { name: "탕수육", emoji: "🍤", category: "chinese", desc: "바삭한 튀김에 새콤달콤 소스", taste: "겉바속촉, 새콤달콤", goodFor: "여럿이 나눠 먹기 좋을 때", pairing: "짜장면 · 짬뽕" },
  { name: "마라탕", emoji: "🌶️", category: "chinese", desc: "내 입맛대로 골라 담는 얼얼한 국물", taste: "얼얼하고 중독적인 마라 향", goodFor: "강한 자극이 당기는 날", pairing: "꿔바로우 · 음료" },
  { name: "볶음밥", emoji: "🍚", category: "chinese", desc: "불맛 가득 고슬고슬 볶음밥", taste: "불향 도는 고소한 맛", goodFor: "간단하지만 든든하게", pairing: "짬뽕국물 · 단무지" },
  { name: "울면", emoji: "🍜", category: "chinese", desc: "걸쭉한 국물의 부드러운 면", taste: "순하고 걸쭉한 국물", goodFor: "자극 없이 따뜻하게", pairing: "군만두" },

  // 일식
  { name: "초밥", emoji: "🍣", category: "japanese", desc: "신선한 회와 밥의 정갈한 조화", taste: "신선하고 담백한 감칠맛", goodFor: "특별한 날, 가볍게 즐길 때", pairing: "미소국 · 계란초밥" },
  { name: "라멘", emoji: "🍜", category: "japanese", desc: "진한 육수에 꼬들한 일본식 면", taste: "진하고 깊은 돈코츠 국물", goodFor: "진한 국물이 당기는 날", pairing: "차슈 · 교자" },
  { name: "돈카츠", emoji: "🍱", category: "japanese", desc: "두툼하고 바삭한 등심 튀김", taste: "바삭한 튀김옷과 육즙", goodFor: "든든하게 한 끼 채울 때", pairing: "양배추 · 미소국" },
  { name: "규동", emoji: "🍚", category: "japanese", desc: "달큰한 소고기 덮밥 한 그릇", taste: "달짝지근 부드러운 소고기", goodFor: "빠르고 든든하게", pairing: "온천계란 · 미소국" },
  { name: "우동", emoji: "🍲", category: "japanese", desc: "쫄깃한 면에 따뜻한 가쓰오 국물", taste: "감칠맛 도는 따뜻한 국물", goodFor: "속을 따뜻하게 데우고 싶을 때", pairing: "튀김 · 유부초밥" },
  { name: "오므라이스", emoji: "🍳", category: "japanese", desc: "폭신한 계란에 감싼 볶음밥", taste: "부드러운 계란과 새콤한 소스", goodFor: "무난하게 한 그릇", pairing: "샐러드 · 수프" },

  // 양식
  { name: "파스타", emoji: "🍝", category: "western", desc: "취향대로 고르는 면 요리", taste: "크림 또는 토마토의 풍미", goodFor: "분위기 내고 싶은 날", pairing: "갈릭브레드 · 샐러드" },
  { name: "피자", emoji: "🍕", category: "western", desc: "치즈 가득 나눠 먹는 즐거움", taste: "쭉 늘어나는 치즈의 고소함", goodFor: "여럿이 모였을 때", pairing: "콜라 · 샐러드" },
  { name: "스테이크", emoji: "🥩", category: "western", desc: "육즙 가득 구운 고기 한 점", taste: "겉은 바삭, 속은 촉촉한 육즙", goodFor: "특별한 날 제대로 한 끼", pairing: "감자 · 레드와인" },
  { name: "햄버거", emoji: "🍔", category: "western", desc: "두툼한 패티의 한입 가득 행복", taste: "육즙 패티와 신선한 채소", goodFor: "빠르고 만족스럽게", pairing: "감자튀김 · 음료" },
  { name: "리조또", emoji: "🍚", category: "western", desc: "크리미한 이탈리아식 쌀 요리", taste: "꾸덕하고 진한 치즈 풍미", goodFor: "부드러운 한 끼가 당길 때", pairing: "샐러드 · 화이트와인" },
  { name: "샐러드", emoji: "🥗", category: "western", desc: "신선하고 가벼운 채소 한 접시", taste: "아삭하고 상큼한 드레싱", goodFor: "가볍게 먹고 싶은 날", pairing: "수프 · 빵" },

  // 분식
  { name: "떡볶이", emoji: "🌶️", category: "snack", desc: "쫄깃한 떡에 매콤달콤 소스", taste: "매콤달콤 중독적인 맛", goodFor: "출출할 때 든든한 간식", pairing: "튀김 · 순대" },
  { name: "김밥", emoji: "🍙", category: "snack", desc: "한입에 쏙, 든든한 한 줄", taste: "고소하고 균형 잡힌 맛", goodFor: "간편하게 한 끼", pairing: "라면 · 어묵국" },
  { name: "라면", emoji: "🍜", category: "snack", desc: "언제 먹어도 옳은 국민 면", taste: "얼큰하고 짭조름한 국물", goodFor: "간단하고 빠르게", pairing: "김밥 · 계란" },
  { name: "순대", emoji: "🥟", category: "snack", desc: "쫄깃한 순대와 내장의 조화", taste: "고소하고 쫄깃한 식감", goodFor: "떡볶이와 함께 든든히", pairing: "떡볶이 국물 · 소금" },
  { name: "쫄면", emoji: "🍜", category: "snack", desc: "쫄깃한 면에 새콤달콤 양념", taste: "새콤달콤 매콤한 비빔", goodFor: "입맛 없을 때 새콤하게", pairing: "튀김 · 만두" },
  { name: "토스트", emoji: "🥪", category: "snack", desc: "달콤짭짤 길거리 토스트", taste: "달콤짭짤 부드러운 계란", goodFor: "가벼운 아침이나 간식", pairing: "우유 · 커피" },

  // 카페
  { name: "아메리카노", emoji: "☕", category: "cafe", desc: "깔끔하게 하루를 깨우는 커피", taste: "깔끔하고 쌉싸름한 풍미", goodFor: "식후 또는 집중이 필요할 때", pairing: "쿠키 · 베이글" },
  { name: "라떼", emoji: "☕", category: "cafe", desc: "부드러운 우유와 커피의 조화", taste: "고소하고 부드러운 우유 거품", goodFor: "여유로운 오후", pairing: "스콘 · 마들렌" },
  { name: "스무디", emoji: "🥤", category: "cafe", desc: "과일 가득 시원한 한 잔", taste: "상큼하고 시원한 과일 맛", goodFor: "더운 날 기분 전환", pairing: "샌드위치" },
  { name: "에이드", emoji: "🍹", category: "cafe", desc: "톡 쏘는 상큼함이 매력", taste: "새콤달콤 청량한 탄산", goodFor: "느끼한 식사 후", pairing: "와플 · 샐러드" },
  { name: "밀크티", emoji: "🧋", category: "cafe", desc: "쫀득 펄과 달콤한 차 한 잔", taste: "달콤하고 부드러운 차 풍미", goodFor: "달달한 게 당길 때", pairing: "쿠키" },

  // 디저트
  { name: "케이크", emoji: "🍰", category: "dessert", desc: "달콤하고 부드러운 한 조각", taste: "촉촉하고 달콤한 크림", goodFor: "기분 내고 싶은 날", pairing: "아메리카노 · 홍차" },
  { name: "마카롱", emoji: "🍬", category: "dessert", desc: "쫀득한 꼬끄와 진한 필링", taste: "쫀득하고 진한 단맛", goodFor: "작은 선물 같은 한입", pairing: "라떼" },
  { name: "와플", emoji: "🧇", category: "dessert", desc: "겉바속촉 따뜻한 와플", taste: "바삭하고 폭신한 식감", goodFor: "달콤한 디저트 타임", pairing: "아이스크림 · 커피" },
  { name: "아이스크림", emoji: "🍦", category: "dessert", desc: "시원하고 달콤한 마무리", taste: "차갑고 부드러운 단맛", goodFor: "더운 날 입가심", pairing: "콘 · 토핑" },
  { name: "도넛", emoji: "🍩", category: "dessert", desc: "달콤한 글레이즈의 부드러움", taste: "폭신하고 달콤한 맛", goodFor: "커피와 함께 한입", pairing: "아메리카노" },
  { name: "빙수", emoji: "🍧", category: "dessert", desc: "곱게 간 얼음에 가득한 토핑", taste: "시원하고 달콤한 팥·과일", goodFor: "더운 날 나눠 먹기", pairing: "따뜻한 차" },
];

export function menusByCategory(ids: CategoryId[]): Menu[] {
  if (ids.length === 0) return MENUS;
  const set = new Set(ids);
  return MENUS.filter((m) => set.has(m.category));
}

/** 끼니별로 어울리는 카테고리 기본 추천(사용자가 직접 고를 수도 있어요). */
export const MEALS = [
  { id: "breakfast", label: "아침", emoji: "🌅" },
  { id: "lunch", label: "점심", emoji: "🍽️" },
  { id: "dinner", label: "저녁", emoji: "🌙" },
  { id: "late", label: "야식", emoji: "🌃" },
  { id: "snackTime", label: "간식", emoji: "🍪" },
] as const;

export type MealId = (typeof MEALS)[number]["id"];
