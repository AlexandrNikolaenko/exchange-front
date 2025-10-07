import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Azazex | Auth',
}

export default function AuhtLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <section className="form-cont">{children}</section>
    </div>
  );
}
