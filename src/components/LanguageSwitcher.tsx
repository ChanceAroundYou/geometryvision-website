"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition, useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "zh-cn", label: "简" },
  { code: "zh-tw", label: "繁" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(langCode: string) {
    startTransition(() => {
      // 根据 next-intl 的 localePrefix: 'always' 配置
      // 所有语言都需要前缀
      const newPath = `/${langCode}`;
      // 使用 router.push 代替 router.replace，确保即使路径相同也能触发页面刷新
      router.push(newPath);
      setIsOpen(false);
    });
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "flex items-center gap-1 p-1.5 text-sm font-medium",
          "text-gray-500 hover:text-[#0066FF] transition-colors",
          "bg-transparent border-none rounded"
        )}
        aria-label="切换语言"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs">{currentLang.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-16 bg-white rounded-md shadow-sm border py-0.5 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={cn(
                "w-full flex items-center justify-center px-2 py-1 text-xs",
                "hover:bg-gray-50 transition-colors",
                locale === lang.code ? "text-[#0066FF] font-medium" : "text-gray-600"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
