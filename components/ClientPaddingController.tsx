"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ClientPaddingController({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  // ranking page：/left/75kg
  const isRankingPage =
    parts.length === 2 && (parts[0] === "left" || parts[0] === "right");

  const isHome = pathname === "/";
  const isPlayerPage = pathname.startsWith("/players/");

  // ranking page 才下移，其它保持贴顶
  const paddingTop =
    isRankingPage && !isHome && !isPlayerPage ? "160px" : "0px";

  return <main style={{ paddingTop }}>{children}</main>;
}
