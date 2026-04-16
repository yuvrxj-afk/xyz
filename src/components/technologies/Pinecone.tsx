export default function Pinecone({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="128" height="128" rx="16" fill="#1B1B1F" />
      <path
        fill="#00C2A8"
        d="M64 14c-3 0-5.5 2.5-5.5 5.5v6c-8 2-14.5 8-17 16H36a5.5 5.5 0 000 11h4.5a27 27 0 000 7H36a5.5 5.5 0 000 11h5.5c2.5 8 9 14 17 16v6a5.5 5.5 0 0011 0v-6c8-2 14.5-8 17-16H92a5.5 5.5 0 000-11h-4.5a27 27 0 000-7H92a5.5 5.5 0 000-11h-5.5c-2.5-8-9-14-17-16v-6c0-3-2.5-5.5-5.5-5.5zm0 27a23 23 0 110 46 23 23 0 010-46zm0 10a13 13 0 100 26 13 13 0 000-26z"
      />
    </svg>
  );
}
