type props = {
  className?: string;
};

export function FVLogo({ className }: props) {
  return (
    <svg
      className={className}
      width="280"
      height="284"
      viewBox="0 0 280 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M0 0V284L50.1111 219V156H98.2178L137.304 106H50.1111V50H180.4L219.487 0H0Z"
      />
      <path className="fill-current" d="M60.1333 284L279.62 0V84.1115L125.278 284H60.1333Z" />
      <ellipse className="fill-current" cx="247.549" cy="252" rx="32.0711" ry="32" />
    </svg>
  );
}
