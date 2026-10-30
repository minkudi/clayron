export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo">
      <svg
        className="logo-mark"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 3.5a12.5 12.5 0 1 0 8.84 21.34"
          pathLength={100}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="3.1" fill="currentColor" />
      </svg>
      {!compact && <span className="logo-word">Clayron</span>}
    </span>
  );
}
