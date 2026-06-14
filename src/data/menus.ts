import { koreanExtra } from "./generated/korean";
import { chineseExtra, japaneseExtra } from "./generated/chinaJapan";
import { westernExtra, chickenExtra, bakeryExtra } from "./generated/westChickBake";
import { asianExtra } from "./generated/asian";
import { worldExtra } from "./generated/world";
import { mexicanExtra, indianExtra } from "./generated/mexIndian";
import { cafeExtra, dessertExtra, drinkExtra } from "./generated/cafeDessertDrink";
import { snackExtra, dietExtra, veganExtra } from "./generated/snackBunDiet";
import { bbqExtra, seafoodExtra } from "./generated/bbqSeafood";

export type CategoryId =
  | "korean"
  | "chinese"
  | "japanese"
  | "western"
  | "snack"
  | "cafe"
  | "dessert"
  | "diet"
  | "asian"
  | "mexican"
  | "indian"
  | "chicken"
  | "bbq"
  | "seafood"
  | "vegan"
  | "bakery"
  | "drink"
  | "world";

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
  { id: "diet", label: "다이어트", emoji: "🥦" },
  { id: "asian", label: "아시안", emoji: "🍲" },
  { id: "mexican", label: "멕시칸", emoji: "🌮" },
  { id: "indian", label: "인도", emoji: "🍛" },
  { id: "chicken", label: "치킨", emoji: "🍗" },
  { id: "bbq", label: "구이·고기", emoji: "🍖" },
  { id: "seafood", label: "해산물", emoji: "🦞" },
  { id: "vegan", label: "채식", emoji: "🥬" },
  { id: "bakery", label: "베이커리", emoji: "🥐" },
  { id: "drink", label: "주류·음료", emoji: "🍺" },
  { id: "world", label: "세계음식", emoji: "🌍" },
];

export const CATEGORY_LABEL: Record<CategoryId, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
) as Record<CategoryId, string>;

const BASE_MENUS: Menu[] = [
  // 한식
  { name: "김치찌개", emoji: "🍲", category: "korean", desc: "얼큰한 국물에 밥 한 그릇 뚝딱", taste: "묵은지의 깊고 칼칼한 맛", goodFor: "속을 든든히 채우고 싶은 날", pairing: "계란말이 · 공깃밥" },
  { name: "비빔밥", emoji: "🥗", category: "korean", desc: "나물과 고추장의 균형 잡힌 한 그릇", taste: "고소함과 매콤함이 어우러진 맛", goodFor: "가볍지만 든든하게 먹고 싶을 때", pairing: "된장국 · 계란후라이" },
  { name: "제육볶음", emoji: "🥘", category: "korean", desc: "매콤달콤 밥도둑 돼지고기 볶음", taste: "매콤달콤하고 불맛 가득", goodFor: "밥을 많이 먹고 싶은 날", pairing: "상추쌈 · 된장국" },
  { name: "삼겹살", emoji: "🥓", category: "korean", desc: "지글지글 구워 먹는 국민 고기", taste: "고소한 기름과 쫄깃한 식감", goodFor: "여럿이 모여 든든하게", pairing: "쌈채소 · 된장찌개" },
  { name: "순두부찌개", emoji: "🍲", category: "korean", desc: "보들보들 순두부의 얼큰한 국물", taste: "부드럽고 칼칼한 국물 맛", goodFor: "쌀쌀하고 속풀이가 필요한 날", pairing: "공깃밥 · 김" },
  { name: "냉면", emoji: "🍜", category: "korean", desc: "시원한 육수에 쫄깃한 면", taste: "새콤하고 시원한 육수", goodFor: "더운 날 입맛 없을 때", pairing: "수육 · 만두" },
  { name: "불고기", emoji: "🥩", category: "korean", desc: "달큰한 양념의 부드러운 소고기", taste: "달짝지근하고 부드러운 맛", goodFor: "온 가족 무난하게", pairing: "버섯 · 당면" },
  { name: "된장찌개", emoji: "🍲", category: "korean", desc: "구수한 된장의 집밥 한 그릇", taste: "구수하고 깊은 된장 맛", goodFor: "속 편한 집밥이 그리울 때", pairing: "공깃밥 · 김" },
  { name: "갈비탕", emoji: "🥩", category: "korean", desc: "푹 고운 갈비의 진한 국물", taste: "맑고 진한 사골 육수", goodFor: "보양이 필요한 날", pairing: "깍두기 · 공깃밥" },
  { name: "설렁탕", emoji: "🍚", category: "korean", desc: "뽀얀 국물에 말아 먹는 밥", taste: "담백하고 진한 사골 맛", goodFor: "속을 따뜻하게 채우고 싶을 때", pairing: "깍두기 · 소면" },
  { name: "부대찌개", emoji: "🍲", category: "korean", desc: "햄과 소시지 가득 얼큰한 찌개", taste: "얼큰하고 진한 감칠맛", goodFor: "여럿이 든든하게 나눠 먹을 때", pairing: "라면사리 · 공깃밥" },
  { name: "닭갈비", emoji: "🍗", category: "korean", desc: "매콤 양념에 볶는 춘천식 닭갈비", taste: "매콤달콤 불맛 가득", goodFor: "친구들과 왁자지껄", pairing: "볶음밥 · 치즈" },
  { name: "보쌈", emoji: "🥬", category: "korean", desc: "촉촉한 수육에 쌈 한 입", taste: "담백하고 쫄깃한 수육", goodFor: "푸짐하게 둘러앉아", pairing: "김치 · 새우젓" },
  { name: "족발", emoji: "🍖", category: "korean", desc: "쫄깃 야들한 한국식 족발", taste: "쫄깃하고 짭조름한 감칠맛", goodFor: "야식으로 든든하게", pairing: "쌈채소 · 막국수" },
  { name: "칼국수", emoji: "🍜", category: "korean", desc: "손맛 가득 따뜻한 면 국물", taste: "구수하고 깊은 멸치 육수", goodFor: "비 오는 날 따뜻하게", pairing: "겉절이 · 만두" },
  { name: "육개장", emoji: "🌶️", category: "korean", desc: "얼큰한 국물에 결대로 찢은 고기", taste: "칼칼하고 얼큰한 국물", goodFor: "땀 빼며 속풀이하고 싶을 때", pairing: "공깃밥 · 김치" },
  { name: "갈비찜", emoji: "🥘", category: "korean", desc: "부드럽게 졸인 달큰한 갈비", taste: "달짝지근하고 부드러운 맛", goodFor: "특별한 날 푸짐하게", pairing: "공깃밥 · 나물" },
  { name: "잡채", emoji: "🍝", category: "korean", desc: "쫄깃한 당면과 채소의 조화", taste: "고소하고 달큰한 감칠맛", goodFor: "잔칫날 단골 메뉴", pairing: "공깃밥 · 전" },
  { name: "감자탕", emoji: "🥘", category: "korean", desc: "푹 끓인 등뼈와 우거지의 만남", taste: "얼큰하고 구수한 국물", goodFor: "여럿이 끓여 먹는 야식", pairing: "볶음밥 · 라면사리" },
  { name: "콩나물국밥", emoji: "🍲", category: "korean", desc: "시원한 국물에 아삭한 콩나물", taste: "시원하고 깔끔한 해장 맛", goodFor: "전날 과음한 다음 날", pairing: "수란 · 김" },
  { name: "김치볶음밥", emoji: "🍳", category: "korean", desc: "묵은지로 볶아낸 든든한 밥", taste: "고소하고 칼칼한 볶음 맛", goodFor: "냉장고 털어 간단하게", pairing: "계란후라이 · 김" },
  { name: "비빔국수", emoji: "🍜", category: "korean", desc: "새콤달콤 매콤한 비빔 양념면", taste: "새콤달콤 매콤한 맛", goodFor: "입맛 없는 더운 날", pairing: "삶은 계란 · 만두" },

  // 중식
  { name: "짜장면", emoji: "🍜", category: "chinese", desc: "춘장 향 가득한 국민 면 요리", taste: "달큰 짭짤한 춘장의 감칠맛", goodFor: "고민될 땐 역시 무난한 선택", pairing: "탕수육 · 단무지" },
  { name: "짬뽕", emoji: "🍲", category: "chinese", desc: "해물 가득 얼큰한 빨간 국물면", taste: "불맛 도는 매콤한 해물 국물", goodFor: "얼큰하게 풀고 싶은 날", pairing: "군만두 · 짜장면 반반" },
  { name: "탕수육", emoji: "🍤", category: "chinese", desc: "바삭한 튀김에 새콤달콤 소스", taste: "겉바속촉, 새콤달콤", goodFor: "여럿이 나눠 먹기 좋을 때", pairing: "짜장면 · 짬뽕" },
  { name: "마라탕", emoji: "🌶️", category: "chinese", desc: "내 입맛대로 골라 담는 얼얼한 국물", taste: "얼얼하고 중독적인 마라 향", goodFor: "강한 자극이 당기는 날", pairing: "꿔바로우 · 음료" },
  { name: "볶음밥", emoji: "🍚", category: "chinese", desc: "불맛 가득 고슬고슬 볶음밥", taste: "불향 도는 고소한 맛", goodFor: "간단하지만 든든하게", pairing: "짬뽕국물 · 단무지" },
  { name: "울면", emoji: "🍜", category: "chinese", desc: "걸쭉한 국물의 부드러운 면", taste: "순하고 걸쭉한 국물", goodFor: "자극 없이 따뜻하게", pairing: "군만두" },
  { name: "깐풍기", emoji: "🍗", category: "chinese", desc: "바삭한 닭튀김에 매콤달콤 소스", taste: "겉바속촉 매콤달콤한 맛", goodFor: "술안주로도 든든하게", pairing: "맥주 · 볶음밥" },
  { name: "꿔바로우", emoji: "🍤", category: "chinese", desc: "쫀득 바삭 새콤달콤 찹쌀 탕수육", taste: "쫀득하고 새콤달콤한 맛", goodFor: "마라탕과 짝꿍으로", pairing: "마라탕 · 음료" },
  { name: "양장피", emoji: "🥗", category: "chinese", desc: "해산물과 채소를 겨자장에 무친 요리", taste: "아삭하고 새콤한 겨자 향", goodFor: "코스 요리 시작으로", pairing: "고량주 · 짜장면" },
  { name: "유산슬", emoji: "🍲", category: "chinese", desc: "해물과 채소의 부드러운 볶음", taste: "담백하고 감칠맛 도는 맛", goodFor: "속 편하게 즐기고 싶을 때", pairing: "볶음밥 · 공깃밥" },
  { name: "팔보채", emoji: "🦐", category: "chinese", desc: "여덟 가지 해산물의 화려한 볶음", taste: "쫄깃하고 감칠맛 가득", goodFor: "특별한 자리 요리로", pairing: "꽃빵 · 고량주" },
  { name: "동파육", emoji: "🥩", category: "chinese", desc: "간장에 졸인 부드러운 삼겹살", taste: "달큰하고 입에서 녹는 식감", goodFor: "제대로 된 중식 한 상", pairing: "꽃빵 · 청경채" },
  { name: "고추잡채", emoji: "🌶️", category: "chinese", desc: "고추와 고기를 볶아 꽃빵과 함께", taste: "짭짤하고 아삭한 볶음 맛", goodFor: "꽃빵에 싸 먹는 재미", pairing: "꽃빵 · 짬뽕" },
  { name: "마파두부", emoji: "🍲", category: "chinese", desc: "얼얼한 두부 덮밥 한 그릇", taste: "얼얼하고 짭짤한 마라 풍미", goodFor: "밥에 슥슥 비벼 먹을 때", pairing: "공깃밥 · 짜사이" },
  { name: "물만두", emoji: "🥟", category: "chinese", desc: "보들보들 삶아낸 담백한 만두", taste: "담백하고 부드러운 만두소", goodFor: "가볍게 곁들이고 싶을 때", pairing: "짜장면 · 간장" },

  // 일식
  { name: "초밥", emoji: "🍣", category: "japanese", desc: "신선한 회와 밥의 정갈한 조화", taste: "신선하고 담백한 감칠맛", goodFor: "특별한 날, 가볍게 즐길 때", pairing: "미소국 · 계란초밥" },
  { name: "라멘", emoji: "🍜", category: "japanese", desc: "진한 육수에 꼬들한 일본식 면", taste: "진하고 깊은 돈코츠 국물", goodFor: "진한 국물이 당기는 날", pairing: "차슈 · 교자" },
  { name: "돈카츠", emoji: "🍱", category: "japanese", desc: "두툼하고 바삭한 등심 튀김", taste: "바삭한 튀김옷과 육즙", goodFor: "든든하게 한 끼 채울 때", pairing: "양배추 · 미소국" },
  { name: "규동", emoji: "🍚", category: "japanese", desc: "달큰한 소고기 덮밥 한 그릇", taste: "달짝지근 부드러운 소고기", goodFor: "빠르고 든든하게", pairing: "온천계란 · 미소국" },
  { name: "우동", emoji: "🍲", category: "japanese", desc: "쫄깃한 면에 따뜻한 가쓰오 국물", taste: "감칠맛 도는 따뜻한 국물", goodFor: "속을 따뜻하게 데우고 싶을 때", pairing: "튀김 · 유부초밥" },
  { name: "오므라이스", emoji: "🍳", category: "japanese", desc: "폭신한 계란에 감싼 볶음밥", taste: "부드러운 계란과 새콤한 소스", goodFor: "무난하게 한 그릇", pairing: "샐러드 · 수프" },
  { name: "텐동", emoji: "🍤", category: "japanese", desc: "바삭한 튀김을 올린 덮밥", taste: "달큰한 소스에 바삭한 튀김", goodFor: "든든하게 한 끼 채울 때", pairing: "미소국 · 단무지" },
  { name: "회덮밥", emoji: "🐟", category: "japanese", desc: "신선한 회를 올린 새콤한 덮밥", taste: "신선하고 새콤달콤한 맛", goodFor: "가볍지만 든든하게", pairing: "미소국 · 계란찜" },
  { name: "사케동", emoji: "🍣", category: "japanese", desc: "연어를 듬뿍 올린 덮밥", taste: "고소하고 부드러운 연어 풍미", goodFor: "연어가 당기는 날", pairing: "미소국 · 와사비" },
  { name: "가츠동", emoji: "🍱", category: "japanese", desc: "달큰한 계란을 입힌 돈카츠 덮밥", taste: "달짝지근하고 부드러운 맛", goodFor: "빠르고 든든하게", pairing: "미소국 · 단무지" },
  { name: "야키소바", emoji: "🍜", category: "japanese", desc: "불맛 가득 볶아낸 일본식 면", taste: "달짝지근하고 진한 소스 맛", goodFor: "출출할 때 간단하게", pairing: "가츠오부시 · 절임생강" },
  { name: "타코야키", emoji: "🐙", category: "japanese", desc: "겉바속촉 문어 풀빵", taste: "촉촉하고 짭짤한 소스 맛", goodFor: "간식이나 안주로", pairing: "마요네즈 · 맥주" },
  { name: "교자", emoji: "🥟", category: "japanese", desc: "바삭하게 구운 일본식 만두", taste: "바삭하고 육즙 가득한 맛", goodFor: "라멘과 함께 곁들여", pairing: "라멘 · 간장식초" },
  { name: "소바", emoji: "🍜", category: "japanese", desc: "메밀 향 가득한 시원한 면", taste: "담백하고 구수한 메밀 맛", goodFor: "더운 날 깔끔하게", pairing: "튀김 · 쯔유" },
  { name: "스키야키", emoji: "🍲", category: "japanese", desc: "달큰한 국물에 익히는 소고기 전골", taste: "달짝지근하고 진한 국물", goodFor: "여럿이 둘러앉아 따뜻하게", pairing: "날계란 · 우동사리" },

  // 양식
  { name: "파스타", emoji: "🍝", category: "western", desc: "취향대로 고르는 면 요리", taste: "크림 또는 토마토의 풍미", goodFor: "분위기 내고 싶은 날", pairing: "갈릭브레드 · 샐러드" },
  { name: "피자", emoji: "🍕", category: "western", desc: "치즈 가득 나눠 먹는 즐거움", taste: "쭉 늘어나는 치즈의 고소함", goodFor: "여럿이 모였을 때", pairing: "콜라 · 샐러드" },
  { name: "스테이크", emoji: "🥩", category: "western", desc: "육즙 가득 구운 고기 한 점", taste: "겉은 바삭, 속은 촉촉한 육즙", goodFor: "특별한 날 제대로 한 끼", pairing: "감자 · 레드와인" },
  { name: "햄버거", emoji: "🍔", category: "western", desc: "두툼한 패티의 한입 가득 행복", taste: "육즙 패티와 신선한 채소", goodFor: "빠르고 만족스럽게", pairing: "감자튀김 · 음료" },
  { name: "리조또", emoji: "🍚", category: "western", desc: "크리미한 이탈리아식 쌀 요리", taste: "꾸덕하고 진한 치즈 풍미", goodFor: "부드러운 한 끼가 당길 때", pairing: "샐러드 · 화이트와인" },
  { name: "샐러드", emoji: "🥗", category: "western", desc: "신선하고 가벼운 채소 한 접시", taste: "아삭하고 상큼한 드레싱", goodFor: "가볍게 먹고 싶은 날", pairing: "수프 · 빵" },
  { name: "오므렛", emoji: "🍳", category: "western", desc: "부드럽게 부쳐낸 계란 요리", taste: "폭신하고 부드러운 계란 맛", goodFor: "든든한 브런치로", pairing: "토스트 · 커피" },
  { name: "라자냐", emoji: "🧀", category: "western", desc: "층층이 쌓은 치즈와 미트소스", taste: "진하고 꾸덕한 치즈 풍미", goodFor: "제대로 된 한 끼가 당길 때", pairing: "샐러드 · 와인" },
  { name: "그라탕", emoji: "🧀", category: "western", desc: "오븐에 구운 크리미한 치즈 요리", taste: "고소하고 진한 치즈 맛", goodFor: "추운 날 따뜻하게", pairing: "바게트 · 화이트와인" },
  { name: "오일파스타", emoji: "🍝", category: "western", desc: "마늘 향 가득한 담백한 파스타", taste: "깔끔하고 고소한 오일 풍미", goodFor: "느끼하지 않게 즐길 때", pairing: "샐러드 · 화이트와인" },
  { name: "감바스", emoji: "🦐", category: "western", desc: "올리브유에 자글자글 새우 요리", taste: "마늘 향과 짭짤한 감칠맛", goodFor: "와인 한잔 곁들일 때", pairing: "바게트 · 와인" },
  { name: "필라프", emoji: "🍚", category: "western", desc: "버터 향 가득 볶은 쌀 요리", taste: "고소하고 담백한 버터 풍미", goodFor: "가볍게 한 그릇", pairing: "수프 · 샐러드" },
  { name: "치킨", emoji: "🍗", category: "western", desc: "바삭하게 튀긴 국민 야식", taste: "겉바속촉 짭짤한 맛", goodFor: "맥주와 함께 야식으로", pairing: "맥주 · 무" },
  { name: "타코", emoji: "🌮", category: "western", desc: "또띠야에 가득 채운 멕시칸 한입", taste: "매콤하고 상큼한 맛", goodFor: "색다른 한 끼가 당길 때", pairing: "나초 · 에이드" },
  { name: "샌드위치", emoji: "🥪", category: "western", desc: "신선한 속재료 가득한 한 끼", taste: "신선하고 균형 잡힌 맛", goodFor: "간편하게 먹고 싶을 때", pairing: "수프 · 커피" },
  { name: "해산물리조또", emoji: "🍤", category: "western", desc: "해산물 넣은 진한 쌀 요리", taste: "감칠맛 도는 크리미한 맛", goodFor: "분위기 내고 싶은 날", pairing: "샐러드 · 화이트와인" },

  // 분식
  { name: "떡볶이", emoji: "🌶️", category: "snack", desc: "쫄깃한 떡에 매콤달콤 소스", taste: "매콤달콤 중독적인 맛", goodFor: "출출할 때 든든한 간식", pairing: "튀김 · 순대" },
  { name: "김밥", emoji: "🍙", category: "snack", desc: "한입에 쏙, 든든한 한 줄", taste: "고소하고 균형 잡힌 맛", goodFor: "간편하게 한 끼", pairing: "라면 · 어묵국" },
  { name: "라면", emoji: "🍜", category: "snack", desc: "언제 먹어도 옳은 국민 면", taste: "얼큰하고 짭조름한 국물", goodFor: "간단하고 빠르게", pairing: "김밥 · 계란" },
  { name: "순대", emoji: "🥟", category: "snack", desc: "쫄깃한 순대와 내장의 조화", taste: "고소하고 쫄깃한 식감", goodFor: "떡볶이와 함께 든든히", pairing: "떡볶이 국물 · 소금" },
  { name: "쫄면", emoji: "🍜", category: "snack", desc: "쫄깃한 면에 새콤달콤 양념", taste: "새콤달콤 매콤한 비빔", goodFor: "입맛 없을 때 새콤하게", pairing: "튀김 · 만두" },
  { name: "토스트", emoji: "🥪", category: "snack", desc: "달콤짭짤 길거리 토스트", taste: "달콤짭짤 부드러운 계란", goodFor: "가벼운 아침이나 간식", pairing: "우유 · 커피" },
  { name: "어묵", emoji: "🍢", category: "snack", desc: "뜨끈한 국물에 꼬치 어묵", taste: "감칠맛 도는 따뜻한 국물", goodFor: "쌀쌀할 때 길거리 간식", pairing: "떡볶이 · 국물" },
  { name: "튀김", emoji: "🍤", category: "snack", desc: "바삭하게 튀긴 분식 단골", taste: "바삭하고 고소한 튀김옷", goodFor: "떡볶이와 함께 든든히", pairing: "떡볶이 국물 · 간장" },
  { name: "라볶이", emoji: "🍜", category: "snack", desc: "떡볶이에 라면 더한 푸짐함", taste: "매콤달콤 쫄깃한 맛", goodFor: "출출할 때 든든하게", pairing: "튀김 · 김밥" },
  { name: "만두", emoji: "🥟", category: "snack", desc: "속이 꽉 찬 분식 만두", taste: "고소하고 육즙 가득한 맛", goodFor: "가볍게 곁들이는 한입", pairing: "떡볶이 · 간장" },
  { name: "핫도그", emoji: "🌭", category: "snack", desc: "겉바속촉 길거리 핫도그", taste: "바삭하고 달콤짭짤한 맛", goodFor: "출출할 때 간단하게", pairing: "케첩 · 머스터드" },
  { name: "유부초밥", emoji: "🍙", category: "snack", desc: "달큰한 유부에 새콤한 밥", taste: "달콤새콤 부드러운 맛", goodFor: "가볍게 한 끼", pairing: "어묵국 · 라면" },
  { name: "치즈볼", emoji: "🧀", category: "snack", desc: "쭉 늘어나는 치즈 간식", taste: "쫀득하고 고소한 치즈 맛", goodFor: "달달한 간식이 당길 때", pairing: "떡볶이 · 음료" },

  // 카페
  { name: "아메리카노", emoji: "☕", category: "cafe", desc: "깔끔하게 하루를 깨우는 커피", taste: "깔끔하고 쌉싸름한 풍미", goodFor: "식후 또는 집중이 필요할 때", pairing: "쿠키 · 베이글" },
  { name: "라떼", emoji: "☕", category: "cafe", desc: "부드러운 우유와 커피의 조화", taste: "고소하고 부드러운 우유 거품", goodFor: "여유로운 오후", pairing: "스콘 · 마들렌" },
  { name: "스무디", emoji: "🥤", category: "cafe", desc: "과일 가득 시원한 한 잔", taste: "상큼하고 시원한 과일 맛", goodFor: "더운 날 기분 전환", pairing: "샌드위치" },
  { name: "에이드", emoji: "🍹", category: "cafe", desc: "톡 쏘는 상큼함이 매력", taste: "새콤달콤 청량한 탄산", goodFor: "느끼한 식사 후", pairing: "와플 · 샐러드" },
  { name: "밀크티", emoji: "🧋", category: "cafe", desc: "쫀득 펄과 달콤한 차 한 잔", taste: "달콤하고 부드러운 차 풍미", goodFor: "달달한 게 당길 때", pairing: "쿠키" },
  { name: "카푸치노", emoji: "☕", category: "cafe", desc: "풍성한 거품의 진한 커피", taste: "부드러운 거품과 진한 풍미", goodFor: "여유로운 아침", pairing: "크루아상 · 비스코티" },
  { name: "바닐라라떼", emoji: "☕", category: "cafe", desc: "달콤한 바닐라 향 라떼", taste: "부드럽고 달콤한 바닐라 풍미", goodFor: "달달함이 필요한 오후", pairing: "스콘 · 쿠키" },
  { name: "콜드브루", emoji: "🧊", category: "cafe", desc: "차게 우려낸 부드러운 커피", taste: "부드럽고 깔끔한 쓴맛", goodFor: "더운 날 깔끔하게", pairing: "베이글 · 머핀" },
  { name: "녹차라떼", emoji: "🍵", category: "cafe", desc: "고소한 녹차와 우유의 조화", taste: "쌉싸름하고 고소한 맛", goodFor: "차분하게 쉬고 싶을 때", pairing: "카스텔라 · 마들렌" },
  { name: "핫초코", emoji: "🍫", category: "cafe", desc: "따뜻하고 진한 초콜릿 음료", taste: "달콤하고 진한 초콜릿 맛", goodFor: "추운 날 몸을 녹일 때", pairing: "마시멜로 · 쿠키" },
  { name: "자몽주스", emoji: "🍊", category: "cafe", desc: "상큼쌉쌀한 자몽 한 잔", taste: "새콤쌉싸름한 청량감", goodFor: "기분 전환이 필요할 때", pairing: "샌드위치 · 샐러드" },
  { name: "레모네이드", emoji: "🍋", category: "cafe", desc: "새콤달콤 청량한 레몬 음료", taste: "상큼하고 톡 쏘는 맛", goodFor: "더운 날 갈증 날 때", pairing: "와플 · 쿠키" },

  // 디저트
  { name: "케이크", emoji: "🍰", category: "dessert", desc: "달콤하고 부드러운 한 조각", taste: "촉촉하고 달콤한 크림", goodFor: "기분 내고 싶은 날", pairing: "아메리카노 · 홍차" },
  { name: "마카롱", emoji: "🍬", category: "dessert", desc: "쫀득한 꼬끄와 진한 필링", taste: "쫀득하고 진한 단맛", goodFor: "작은 선물 같은 한입", pairing: "라떼" },
  { name: "와플", emoji: "🧇", category: "dessert", desc: "겉바속촉 따뜻한 와플", taste: "바삭하고 폭신한 식감", goodFor: "달콤한 디저트 타임", pairing: "아이스크림 · 커피" },
  { name: "아이스크림", emoji: "🍦", category: "dessert", desc: "시원하고 달콤한 마무리", taste: "차갑고 부드러운 단맛", goodFor: "더운 날 입가심", pairing: "콘 · 토핑" },
  { name: "도넛", emoji: "🍩", category: "dessert", desc: "달콤한 글레이즈의 부드러움", taste: "폭신하고 달콤한 맛", goodFor: "커피와 함께 한입", pairing: "아메리카노" },
  { name: "빙수", emoji: "🍧", category: "dessert", desc: "곱게 간 얼음에 가득한 토핑", taste: "시원하고 달콤한 팥·과일", goodFor: "더운 날 나눠 먹기", pairing: "따뜻한 차" },
  { name: "크로플", emoji: "🧇", category: "dessert", desc: "크루아상으로 구운 바삭 와플", taste: "겉바속촉 버터 풍미", goodFor: "달콤한 디저트 타임", pairing: "아이스크림 · 라떼" },
  { name: "푸딩", emoji: "🍮", category: "dessert", desc: "부드럽게 흔들리는 달콤함", taste: "촉촉하고 부드러운 캐러멜 맛", goodFor: "가볍게 달달한 한입", pairing: "커피 · 홍차" },
  { name: "타르트", emoji: "🥧", category: "dessert", desc: "바삭한 시트에 과일 가득", taste: "바삭하고 새콤달콤한 맛", goodFor: "기분 내고 싶은 날", pairing: "아메리카노 · 홍차" },
  { name: "티라미수", emoji: "🍰", category: "dessert", desc: "커피 향 가득 부드러운 케이크", taste: "쌉싸름하고 부드러운 크림", goodFor: "커피와 어울리는 디저트", pairing: "에스프레소 · 라떼" },
  { name: "크레페", emoji: "🥞", category: "dessert", desc: "얇게 부친 시트에 가득한 속", taste: "부드럽고 달콤한 맛", goodFor: "달콤한 간식이 당길 때", pairing: "커피 · 차" },
  { name: "초콜릿", emoji: "🍫", category: "dessert", desc: "진하고 달콤한 한 조각", taste: "진하고 달콤쌉싸름한 맛", goodFor: "당 충전이 필요할 때", pairing: "커피 · 우유" },
  { name: "약과", emoji: "🍪", category: "dessert", desc: "쫀득 달콤한 전통 과자", taste: "달콤하고 쫀득한 꿀맛", goodFor: "전통 디저트가 당길 때", pairing: "녹차 · 아메리카노" },
  { name: "붕어빵", emoji: "🐟", category: "dessert", desc: "따끈한 팥 가득 겨울 간식", taste: "달콤하고 따뜻한 팥소", goodFor: "추운 날 길거리 간식", pairing: "어묵국물 · 커피" },

  // 다이어트 (다이어터 · 저탄고지 · 키토)
  { name: "닭가슴살 샐러드", emoji: "🥗", category: "diet", desc: "고단백 닭가슴살에 채소 듬뿍", taste: "담백하고 아삭한 채소 맛", goodFor: "단백질 챙기는 다이어트 식단", pairing: "삶은 달걀 · 발사믹" },
  { name: "포케볼", emoji: "🥗", category: "diet", desc: "채소와 단백질 가득 한 그릇", taste: "신선하고 상큼한 한 그릇", goodFor: "가볍지만 든든한 한 끼", pairing: "현미밥 · 아보카도" },
  { name: "아보카도 토스트", emoji: "🥑", category: "diet", desc: "통밀빵에 으깬 아보카도", taste: "고소하고 부드러운 풍미", goodFor: "건강한 브런치로", pairing: "달걀 · 방울토마토" },
  { name: "그릭요거트볼", emoji: "🥣", category: "diet", desc: "꾸덕한 요거트에 견과와 베리", taste: "새콤하고 고소한 맛", goodFor: "가벼운 아침이나 간식", pairing: "그래놀라 · 블루베리" },
  { name: "두부 스테이크", emoji: "🧈", category: "diet", desc: "노릇하게 구운 담백한 두부", taste: "고소하고 담백한 식감", goodFor: "저칼로리로 든든하게", pairing: "채소구이 · 간장소스" },
  { name: "연어 샐러드", emoji: "🐟", category: "diet", desc: "구운 연어에 신선한 채소", taste: "고소하고 담백한 연어 풍미", goodFor: "저탄고지 식단으로", pairing: "올리브유 · 레몬" },
  { name: "삶은 달걀", emoji: "🥚", category: "diet", desc: "간단한 고단백 다이어트 식", taste: "담백하고 부드러운 맛", goodFor: "빠르게 단백질 보충", pairing: "소금 · 아메리카노" },
  { name: "곤약비빔면", emoji: "🍜", category: "diet", desc: "저칼로리 곤약면 새콤 비빔", taste: "새콤달콤 쫄깃한 맛", goodFor: "면이 당기는 다이어트 날", pairing: "삶은 달걀 · 오이" },
  { name: "키토 김밥", emoji: "🍙", category: "diet", desc: "밥 대신 채소로 만 저탄수 김밥", taste: "고소하고 아삭한 맛", goodFor: "탄수화물 줄이고 싶을 때", pairing: "달걀 · 아보카도" },
  { name: "버터 구운 소고기", emoji: "🥩", category: "diet", desc: "버터에 구운 키토식 스테이크", taste: "고소하고 진한 육즙", goodFor: "저탄고지·키토 식단", pairing: "버터 채소 · 치즈" },
  { name: "치즈 오믈렛", emoji: "🍳", category: "diet", desc: "치즈 가득 키토식 계란 요리", taste: "고소하고 부드러운 치즈 풍미", goodFor: "키토식 든든한 아침", pairing: "베이컨 · 아보카도" },
  { name: "단백질 쉐이크", emoji: "🥤", category: "diet", desc: "간편하게 마시는 단백질 한 잔", taste: "부드럽고 고소한 맛", goodFor: "운동 후 빠른 보충", pairing: "바나나 · 견과" },
  { name: "샤브샤브", emoji: "🍲", category: "diet", desc: "채소와 고기를 데쳐 먹는 담백한 한 끼", taste: "깔끔하고 담백한 국물", goodFor: "기름기 없이 든든하게", pairing: "채소 · 폰즈소스" },
  { name: "두부면 파스타", emoji: "🍝", category: "diet", desc: "두부면으로 만든 저탄수 파스타", taste: "담백하고 고소한 맛", goodFor: "파스타가 당기는 다이어트 날", pairing: "닭가슴살 · 올리브유" },
  { name: "고구마", emoji: "🍠", category: "diet", desc: "든든하고 달콤한 건강 탄수화물", taste: "달큰하고 포슬포슬한 맛", goodFor: "운동 전 든든한 에너지", pairing: "삶은 달걀 · 우유" },
];

/** 대량 추가 메뉴(카테고리별 생성 파일). 중복 이름은 같은 카테고리 안에서 자동 제거. */
const EXTRA_MENUS: Menu[] = [
  ...koreanExtra,
  ...chineseExtra,
  ...japaneseExtra,
  ...westernExtra,
  ...chickenExtra,
  ...bakeryExtra,
  ...asianExtra,
  ...worldExtra,
  ...mexicanExtra,
  ...indianExtra,
  ...cafeExtra,
  ...dessertExtra,
  ...drinkExtra,
  ...snackExtra,
  ...dietExtra,
  ...veganExtra,
  ...bbqExtra,
  ...seafoodExtra,
];

function dedupeMenus(list: Menu[]): Menu[] {
  const seen = new Set<string>();
  const out: Menu[] = [];
  for (const m of list) {
    const key = `${m.category}:${m.name}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(m);
  }
  return out;
}

export const MENUS: Menu[] = dedupeMenus([...BASE_MENUS, ...EXTRA_MENUS]);

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
