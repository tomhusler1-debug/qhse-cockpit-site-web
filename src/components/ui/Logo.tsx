export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#4338ca" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#logoGradient)" />
      <path
        d="M20 9.5l7.5 3v6.2c0 5.4-3.2 9.9-7.5 11.8-4.3-1.9-7.5-6.4-7.5-11.8v-6.2l7.5-3z"
        fill="white"
        fillOpacity="0.92"
      />
      <path
        d="M16.7 20l2.2 2.2 4.4-4.4"
        stroke="#4338ca"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <span className="text-[15px] font-bold tracking-tight text-text">
        QHSE Cockpit
      </span>
    </span>
  );
}
