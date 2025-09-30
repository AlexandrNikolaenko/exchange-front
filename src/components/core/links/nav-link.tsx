import Link from "next/link";
import { ReactNode } from "react";

export default function NavLink({href, children}: {href: string, children: ReactNode}) {
  return <Link className="nav-link" href={href}>{children}</Link>;
}
