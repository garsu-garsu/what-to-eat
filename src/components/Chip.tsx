import { colors } from "@toss/tds-colors";

/** 선택형 칩(끼니·카테고리 선택). */
export function Chip({
  label,
  emoji,
  selected,
  onClick,
}: {
  label: string;
  emoji?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "9px 14px",
        borderRadius: 999,
        border: `1.5px solid ${selected ? colors.orange500 : colors.grey200}`,
        backgroundColor: selected ? colors.orange50 : colors.white,
        color: selected ? colors.orange600 : colors.grey700,
        fontSize: 15,
        fontWeight: selected ? 700 : 500,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {emoji && <span aria-hidden>{emoji}</span>}
      {label}
    </button>
  );
}
