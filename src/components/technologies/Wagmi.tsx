export default function Wagmi({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="128" height="128" rx="16" fill="#0D0D0D" />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="42"
        fontWeight="800"
        fontFamily="monospace"
        fill="white"
        letterSpacing="-2"
      >
        wagmi
      </text>
    </svg>
  );
}
