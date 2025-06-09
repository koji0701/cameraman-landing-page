interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-8" }: LogoProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner geometric shape - representing AI/camera lens */}
      <circle
        cx="20"
        cy="20"
        r="12"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        fill="rgba(59, 130, 246, 0.1)"
      />
      
      {/* Center focal point */}
      <circle
        cx="20"
        cy="20"
        r="4"
        fill="url(#gradient1)"
      />
      
      {/* Tech connection lines */}
      <path
        d="M8 20L14 20M26 20L32 20M20 8L20 14M20 26L20 32"
        stroke="url(#gradient2)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Corner tech elements */}
      <path
        d="M12 12L16 16M24 16L28 12M28 28L24 24M16 24L12 28"
        stroke="url(#gradient2)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo; 