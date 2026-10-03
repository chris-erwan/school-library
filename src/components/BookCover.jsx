// Couverture générée en SVG à partir des couleurs du livre : pas d'image
// externe à charger, et chaque couverture reste cohérente visuellement.
export default function BookCover({ book, size = "md" }) {
  const { title, author } = book;
  const { bg, fg } = book.cover;
  const initials = title
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <svg
      viewBox="0 0 240 340"
      className={`book-cover book-cover--${size}`}
      role="img"
      aria-label={`Couverture de ${title}, par ${author}`}
    >
      <rect x="0" y="0" width="240" height="340" rx="4" fill={bg} />
      <rect x="0" y="0" width="10" height="340" fill="black" fillOpacity="0.18" />
      <rect
        x="20"
        y="26"
        width="200"
        height="288"
        fill="none"
        stroke={fg}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <text
        x="120"
        y="150"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontSize="54"
        fill={fg}
        fontWeight="600"
      >
        {initials || title[0]}
      </text>
      <text
        x="120"
        y="270"
        textAnchor="middle"
        fontFamily="Work Sans, sans-serif"
        fontSize="13"
        letterSpacing="0.5"
        fill={fg}
        fillOpacity="0.85"
      >
        {author}
      </text>
    </svg>
  );
}
