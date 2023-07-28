import { ReactNode } from "react";

import "./Main.css";

export function Main({ children }: { children: ReactNode }) {
  return <main className="main">{children}</main>;
}
