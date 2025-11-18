"use client";

import { usePathname } from "next/navigation";

export default function HideNavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 如果是选手页面 → 隐藏 Navbar + Banner
  const hideNavbar = pathname.startsWith("/players");

  return (
    <>
      {/* 用 children 传入的顶栏，只在非玩家页时显示 */}
      {!hideNavbar && children}
    </>
  );
}
