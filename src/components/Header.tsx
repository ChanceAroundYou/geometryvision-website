"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

const navItemsMap: Record<string, Array<{ href: string; labelKey: string }>> = {
  "zh-cn": [
    { href: "/", labelKey: "Navigation.home" },
    { href: "/about", labelKey: "Navigation.about" },
    { href: "/team", labelKey: "Navigation.team" },
    { href: "/products", labelKey: "Navigation.products" },
    { href: "/solutions", labelKey: "Navigation.solutions" },
    { href: "/contact", labelKey: "Navigation.contact" },
  ],
  "zh-tw": [
    { href: "/", labelKey: "Navigation.home" },
    { href: "/about", labelKey: "Navigation.about" },
    { href: "/team", labelKey: "Navigation.team" },
    { href: "/products", labelKey: "Navigation.products" },
    { href: "/solutions", labelKey: "Navigation.solutions" },
    { href: "/contact", labelKey: "Navigation.contact" },
  ],
  "en": [
    { href: "/", labelKey: "Navigation.home" },
    { href: "/about", labelKey: "Navigation.about" },
    { href: "/team", labelKey: "Navigation.team" },
    { href: "/products", labelKey: "Navigation.products" },
    { href: "/solutions", labelKey: "Navigation.solutions" },
    { href: "/contact", labelKey: "Navigation.contact" },
  ],
};

const languageNames: Record<string, string> = {
  "zh-cn": "简",
  "zh-tw": "繁",
  "en": "EN",
};

const languageNamesFull: Record<string, string> = {
  "zh-cn": "简",
  "zh-tw": "繁",
  "en": "EN",
};

// "语言"这个词在各语言中的说法
const languageLabels: Record<string, string> = {
  "zh-cn": "语言",
  "zh-tw": "語言",
  "en": "Language",
};

const localeLabels: Record<string, Record<string, string>> = {
  "zh-cn": {
    "Navigation.home": "首页",
    "Navigation.about": "关于",
    "Navigation.team": "团队",
    "Navigation.products": "产品",
    "Navigation.solutions": "解决方案",
    "Navigation.contact": "联系",
  },
  "zh-tw": {
    "Navigation.home": "首页",
    "Navigation.about": "关于",
    "Navigation.team": "团队",
    "Navigation.products": "产品",
    "Navigation.solutions": "解决方案",
    "Navigation.contact": "联系",
  },
  "en": {
    "Navigation.home": "Home",
    "Navigation.about": "About",
    "Navigation.team": "Team",
    "Navigation.products": "Products",
    "Navigation.solutions": "Solutions",
    "Navigation.contact": "Contact",
  },
};

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navItems = navItemsMap[locale] || navItemsMap["zh-cn"];
  const labels = localeLabels[locale] || localeLabels["zh-cn"];

  // 清理旧的 localStorage
  useEffect(() => {
    localStorage.removeItem("preferred-language");
  }, []);

  // 点击外部关闭菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        const menuButton = document.querySelector('[aria-label="Close menu"], [aria-label="Open menu"]');
        if (menuButton && !menuButton.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
      if (showLangMenu && langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, showLangMenu]);

  // Get pathname without locale prefix
  const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (["en", "zh-cn", "zh-tw"].includes(segments[1])) {
      return "/" + segments.slice(2).join("/");
    }
    return path;
  };

  const getLocalizedPath = (targetLocale: string, path: string = "/") => {
    const pathWithoutLocale = getPathWithoutLocale(path);
    return `/${targetLocale}${pathWithoutLocale}`;
  };

  const companyName = locale === "en" ? "GeometryVision" : locale === "zh-tw" ? "幾何視界" : "几何视界";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={getLocalizedPath("zh-cn", "/")} className="flex items-center gap-2">
          <Image src="/logos/logo-notext-nobg/128.png" alt="几何视界" width={32} height={32} className="h-8 w-auto" />
          <span className="text-lg font-semibold text-[#003366]">
            {companyName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const currentPath = getPathWithoutLocale(pathname);
            const isActive = item.href === "/"
              ? currentPath === "/"
              : currentPath === item.href || currentPath.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={getLocalizedPath(locale, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#0066FF]",
                  isActive ? "text-[#0066FF]" : "text-gray-600"
                )}
              >
                {labels[item.labelKey]}
              </Link>
            );
          })}

          {/* Language Switcher - Desktop */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={cn(
                "flex items-center gap-1 p-1.5 text-sm font-medium",
                "text-gray-500 hover:text-[#0066FF] transition-colors",
                "bg-transparent border-none"
              )}
              aria-label="切换语言"
            >
              <Globe className="w-4 h-4" />
              {/* <span className="text-xs">{languageNames[locale]}</span> */}
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-1 w-20 bg-white rounded-md shadow-sm border py-0.5 z-50">
                {Object.entries(languageNames).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      const newPath = getLocalizedPath(code, pathname);
                      setShowLangMenu(false);
                      // 强制使用 router.push 确保页面刷新，即使路径相同
                      router.push(newPath);
                    }}
                    className={cn(
                      "w-full block px-3 py-1.5 text-xs text-left transition-colors",
                      locale === code ? "text-[#0066FF] font-medium" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav ref={menuRef} className="md:hidden absolute top-full left-0 right-0 border-t bg-white shadow-lg z-50">
          <div className="container px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const currentPath = getPathWithoutLocale(pathname);
              const isActive = item.href === "/"
                ? currentPath === "/"
                : currentPath === item.href || currentPath.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={getLocalizedPath(locale, item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-base font-medium px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "text-[#0066FF] bg-blue-50 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#003366]"
                  )}
                >
                  {labels[item.labelKey]}
                </Link>
              );
            })}

            {/* Mobile Language Switcher - 横向按钮排布 */}
            <div className="border-t mt-2 pt-3">
              <p className="px-4 text-xs text-gray-500 mb-2">{languageLabels[locale]}</p>
              <div className="flex gap-1.5 w-1/2">
                {Object.entries(languageNamesFull).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      const newPath = getLocalizedPath(code, pathname);
                      setIsMenuOpen(false);
                      // 强制使用 router.push 确保页面刷新，即使路径相同
                      router.push(newPath);
                    }}
                    className={cn(
                      "flex-1 text-center py-2 px-1 text-xs font-medium rounded transition-colors",
                      locale === code
                        ? " text-[#0066FF]"
                        : "text-gray-500 hover:bg-[#0066FF]"
                    )}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
