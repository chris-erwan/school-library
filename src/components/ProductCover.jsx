// Visuel généré en SVG à partir des initiales du produit : pas d'image
// externe à charger, et un rendu cohérent pour tout le catalogue.
export default function ProductCover({ product, size = "md" }) {
  const { name, brand } = product;
  const { bg, fg } = product.cover;
  const initials = name
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
      aria-label={`${name}, ${brand}`}
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
        fontSize="50"
        fill={fg}
        fontWeight="600"
      >
        {initials || name[0]}
      </text>
      <text
        x="120"
        y="270"
        textAnchor="middle"
        fontFamily="Work Sans, sans-serif"
        fontSize="12"
        letterSpacing="0.5"
        fill={fg}
        fillOpacity="0.85"
      >
        {brand}
      </text>
    </svg>
  );
}
