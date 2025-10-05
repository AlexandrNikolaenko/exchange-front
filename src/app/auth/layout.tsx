import { ReactNode } from "react";

export default function AuhtLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <section className="form-cont">{children}</section>
    </div>
  );
}
