export default function Zustand({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="128" height="128" rx="16" fill="#FF6B2B" />
      <text
        x="50%"
        y="56%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="38"
        fontWeight="700"
        fontFamily="monospace"
        fill="white"
      >
        Zustand
      </text>
    </svg>
  );
}
