"use client";

import type { ReactNode } from "react";

interface HeroProps {
  label?: string;
  title: ReactNode;
  description: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

export function Hero({ label, title, description, icon, actions }: HeroProps) {
  return (
    <section className="relative py-12 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] to-[#0066FF]">
      {/* Background Pattern - 静态 CSS，减少渲染 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 px-4 py-12 text-center">
        {/* 直接渲染，移除 framer-motion 动画以提升性能 */}
        <div>
          {icon && (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              {icon}
            </div>
          )}
          {label && <p className="text-lg text-white font-medium mb-4">{label}</p>}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
            {title}
          </h1>
          <p className={`text-xl text-gray-200 max-w-2xl mx-auto${actions ? " mb-12" : " mb-10"}`}>
            {description}
          </p>
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px leading-[0] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
