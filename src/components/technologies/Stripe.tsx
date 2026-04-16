export default function Stripe({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="128" height="128" rx="16" fill="#635BFF" />
      <path
        fill="white"
        d="M58.5 46.5c0-5 4-7.2 10.6-7.2 9.4 0 21.3 2.8 30.7 7.9V21.3C90.4 17.4 81 16 69.1 16 44.4 16 28 28.7 28 49c0 31.3 43.1 26.3 43.1 39.8 0 5.9-5.1 7.8-12.2 7.8-10.6 0-24.1-4.3-34.8-10.2v26.3c11.8 5.1 23.8 7.3 34.8 7.3 25.2 0 42.5-12.5 42.5-33 .1-33.8-43.9-27.8-42.9-40.5z"
      />
    </svg>
  );
}
