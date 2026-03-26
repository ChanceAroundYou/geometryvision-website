import { getTranslations } from "next-intl/server";

export default async function Loading() {
  const t = await getTranslations("Loading");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#0066FF]">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          {/* Inner pulse */}
          <div className="absolute inset-4 bg-white/20 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">
          {t("brand")}
        </h2>
        <p className="text-white/70 text-sm">{t("text")}</p>
      </div>
    </div>
  );
}
