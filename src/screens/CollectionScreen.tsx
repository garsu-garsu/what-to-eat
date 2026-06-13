import { Button, Top } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
import { CATEGORIES, MENUS } from "../data/menus";

export function CollectionScreen({
  collection,
  onHome,
}: {
  collection: Record<string, string[]>;
  onHome: () => void;
}) {
  const totalCollected = Object.values(collection).reduce(
    (a, l) => a + l.length,
    0,
  );

  return (
    <>
      <Top
        title={<Top.TitleParagraph size={22}>내 메뉴 도감</Top.TitleParagraph>}
        subtitleBottom={
          <Top.SubtitleParagraph size={15}>
            지금까지 {totalCollected}개 메뉴를 모았어요.
          </Top.SubtitleParagraph>
        }
        right={
          <Top.RightButton color="dark" variant="weak" onClick={onHome}>
            홈
          </Top.RightButton>
        }
      />

      <div style={{ padding: "8px 24px 40px" }}>
        {CATEGORIES.map((cat) => {
          const all = MENUS.filter((m) => m.category === cat.id);
          const got = new Set(collection[cat.id] ?? []);
          return (
            <div key={cat.id} style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 10,
                  fontSize: 16,
                  fontWeight: 700,
                  color: colors.grey800,
                }}
              >
                <span aria-hidden>{cat.emoji}</span>
                {cat.label}
                <span style={{ fontSize: 13, color: colors.grey500 }}>
                  {got.size}/{all.length}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {all.map((m) => {
                  const owned = got.has(m.name);
                  return (
                    <div
                      key={m.name}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "7px 12px",
                        borderRadius: 12,
                        fontSize: 14,
                        backgroundColor: owned ? colors.orange50 : colors.grey50,
                        color: owned ? colors.orange700 : colors.grey400,
                        fontWeight: owned ? 700 : 500,
                      }}
                    >
                      <span aria-hidden>{owned ? m.emoji : "🔒"}</span>
                      {owned ? m.name : "???"}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Button display="full" variant="weak" color="dark" onClick={onHome}>
          홈으로
        </Button>
      </div>
    </>
  );
}
