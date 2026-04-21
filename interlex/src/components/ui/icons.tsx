import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, className, viewBox = "0 0 24 24", ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox={viewBox}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 13 4 4L19 7" />
    </IconBase>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </IconBase>
  );
}

export function XCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </IconBase>
  );
}

export function BankIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m3 9 9-5 9 5" />
      <path d="M5 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M19 10v8" />
      <path d="M3 20h18" />
    </IconBase>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </IconBase>
  );
}

export function SpeedIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 17a8 8 0 1 1 14 0" />
      <path d="m12 12 4-4" />
      <path d="M12 12v5" />
    </IconBase>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 8h.01" />
      <path d="M12 8h.01" />
      <path d="M16 8h.01" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="M10 20v-4h4v4" />
    </IconBase>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 16 10 10l4 4 6-7" />
      <path d="M15 7h5v5" />
    </IconBase>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="5" width="12" height="15" rx="2" />
      <path d="M9 5.5h6V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </IconBase>
  );
}

export function TrendingFlatIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12h16" />
      <path d="m14 7 6 5-6 5" />
    </IconBase>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m4 12 4-4 4 4" />
      <path d="m20 12-4-4-4 4" />
      <path d="m8 12 2 2a2 2 0 0 0 2.8 0l3.2-3.2" />
      <path d="m6 14 2 2" />
      <path d="m18 14-2 2" />
    </IconBase>
  );
}

export function GavelIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m14 4 6 6" />
      <path d="m11 7 6 6" />
      <path d="m7 11 6 6" />
      <path d="M4 20h8" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.4 2.8 7.8 7 10 4.2-2.2 7-5.6 7-10V6z" />
      <path d="m9.5 12 2 2 3-4" />
    </IconBase>
  );
}

export function BalanceScaleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 4v14" />
      <path d="M7 7h10" />
      <path d="m7 7-3 5h6z" />
      <path d="m17 7-3 5h6z" />
      <path d="M8 20h8" />
    </IconBase>
  );
}

export function AdminPanelIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 4.4 2.8 7.8 7 10 4.2-2.2 7-5.6 7-10V6z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </IconBase>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 21v-9" />
      <path d="m4 7.5 8 4.5 8-4.5" />
    </IconBase>
  );
}
