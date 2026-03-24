import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logos/logo-notext-nobg/64.png" alt="几何视界" width={32} height={32} className="h-8 w-auto" />
              <span className="text-lg font-semibold">几何视界</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              用数学的力量，开启视觉智能的新视界
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">团队介绍</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">产品中心</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">解决方案</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-gray-300">
              <li>邮箱: contact@geometryvision.online</li>
              <li>地址: 香港 / 深圳</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {currentYear} GeometryVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
