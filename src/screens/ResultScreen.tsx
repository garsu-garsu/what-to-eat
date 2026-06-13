import { Button, Top } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
import { CATEGORY_LABEL, type Menu } from "../data/menus";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 10, padding: "8px 0" }}>
      <div
        style={{
          width: 64,
          flexShrink: 0,
          fontSize: 14,
          fontWeight: 700,
          color: colors.orange600,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 14, color: colors.grey800, lineHeight: 1.5 }}>
        {value}
      </div>
    </div>
  );
}

export function ResultScreen({
  menu,
  detailUnlocked,
  onMore,
  onUnlock,
  onEat,
  onShare,
  onHome,
}: {
  menu: Menu;
  detailUnlocked: boolean;
  onMore: () => void;
  onUnlock: () => void;
  onEat: () => void;
  onShare: () => void;
  onHome: () => void;
}) {
  return (
    <>
      <Top
        title={<Top.TitleParagraph size={22}>오늘의 추천 메뉴</Top.TitleParagraph>}
        right={
          <Top.RightButton color="dark" variant="weak" onClick={onHome}>
            홈
          </Top.RightButton>
        }
      />

      <div style={{ padding: "0 24px 120px" }}>
        {/* 메뉴 카드 */}
        <div
          style={{
            borderRadius: 24,
            padding: "36px 24px",
            textAlign: "center",
            background: `linear-gradient(160deg, ${colors.orange50}, ${colors.white})`,
            border: `1.5px solid ${colors.orange100}`,
          }}
        >
          <div style={{ fontSize: 72, lineHeight: 1 }} aria-hidden>
            {menu.emoji}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 13,
              fontWeight: 700,
              color: colors.orange600,
            }}
          >
            {CATEGORY_LABEL[menu.category]}
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 28,
              fontWeight: 800,
              color: colors.grey900,
            }}
          >
            {menu.name}
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 15,
              color: colors.grey700,
              lineHeight: 1.5,
            }}
          >
            {menu.desc}
          </div>
        </div>

        {/* 상세(해금 시) */}
        {detailUnlocked ? (
          <div
            style={{
              marginTop: 16,
              padding: "8px 16px",
              borderRadius: 16,
              backgroundColor: colors.grey50,
            }}
          >
            <DetailRow label="맛" value={menu.taste} />
            <DetailRow label="추천 상황" value={menu.goodFor} />
            <DetailRow label="곁들임" value={menu.pairing} />
          </div>
        ) : (
          <div style={{ marginTop: 16 }}>
            <Button
              display="full"
              variant="weak"
              color="dark"
              onClick={onUnlock}
            >
              📺 광고 보고 자세히 보기
            </Button>
          </div>
        )}

        <div style={{ marginTop: 12 }}>
          <Button display="full" variant="weak" onClick={onMore}>
            📺 광고 보고 다른 메뉴 추천
          </Button>
        </div>

        <div style={{ marginTop: 12 }}>
          <Button display="full" variant="weak" color="dark" onClick={onShare}>
            친구에게 공유하기
          </Button>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "12px 24px calc(env(safe-area-inset-bottom) + 16px)",
          background: colors.white,
          borderTop: `1px solid ${colors.grey100}`,
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        <Button display="full" size="xlarge" onClick={onEat}>
          ✅ 이거 먹을래!
        </Button>
      </div>
    </>
  );
}
