"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

export function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  // Get pathname without locale prefix
  const getPathWithoutLocale = (path: string) => {
    const segments = path.split("/");
    if (["en", "zh-cn", "zh-tw"].includes(segments[1])) {
      return "/" + segments.slice(2).join("/");
    }
    return path;
  };

  const getLocalizedPath = (targetLocale: string, path: string = "/") => {
    // 统一添加 locale 前缀，与 Header 保持一致
    const pathWithoutLocale = getPathWithoutLocale(path);
    return `/${targetLocale}${pathWithoutLocale}`;
  };

  // 根据当前语言获取对应的文案
  const getLocalizedText = () => {
    const texts: Record<string, {
      brand: string;
      description: string;
      quickLinks: string;
      about: string;
      team: string;
      products: string;
      solutions: string;
      contact: string;
      contactTitle: string;
      email: string;
      address: string;
      copyright: string;
    }> = {
      "zh-cn": {
        brand: "几何视界",
        description: "用数学的力量，开启视觉智能的新视界",
        quickLinks: "快速链接",
        about: "关于我们",
        team: "团队介绍",
        products: "产品中心",
        solutions: "解决方案",
        contact: "联系我们",
        contactTitle: "联系方式",
        email: "邮箱: contact@geometryvision.online",
        address: "地址: 香港 / 深圳",
        copyright: `© ${currentYear} GeometryVision. All rights reserved.`,
      },
      "zh-tw": {
        brand: "幾何視界",
        description: "用數學的力量，開啟視覺智能的新視界",
        quickLinks: "快速連結",
        about: "關於我們",
        team: "團隊介紹",
        products: "產品中心",
        solutions: "解決方案",
        contact: "聯繫我們",
        contactTitle: "聯繫方式",
        email: "郵箱: contact@geometryvision.online",
        address: "地址: 香港 / 深圳",
        copyright: `© ${currentYear} GeometryVision. All rights reserved.`,
      },
      "en": {
        brand: "GeometryVision",
        description: "Unlocking new visions of visual intelligence through the power of mathematics",
        quickLinks: "Quick Links",
        about: "About",
        team: "Team",
        products: "Products",
        solutions: "Solutions",
        contact: "Contact",
        contactTitle: "Contact",
        email: "Email: contact@geometryvision.online",
        address: "Address: Hong Kong / Shenzhen",
        copyright: `© ${currentYear} GeometryVision. All rights reserved.`,
      },
    };
    return texts[locale] || texts["zh-cn"];
  };

  const t = getLocalizedText();

  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logos/logo-notext-nobg/64.png" alt={t.brand} width={32} height={32} className="h-8 w-auto" />
              <span className="text-lg font-semibold">{t.brand}</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link href={getLocalizedPath(locale, "/about")} className="text-gray-300 hover:text-white transition-colors">{t.about}</Link></li>
              <li><Link href={getLocalizedPath(locale, "/team")} className="text-gray-300 hover:text-white transition-colors">{t.team}</Link></li>
              <li><Link href={getLocalizedPath(locale, "/products")} className="text-gray-300 hover:text-white transition-colors">{t.products}</Link></li>
              <li><Link href={getLocalizedPath(locale, "/solutions")} className="text-gray-300 hover:text-white transition-colors">{t.solutions}</Link></li>
              <li><Link href={getLocalizedPath(locale, "/contact")} className="text-gray-300 hover:text-white transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contactTitle}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t.email}</li>
              <li>{t.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
