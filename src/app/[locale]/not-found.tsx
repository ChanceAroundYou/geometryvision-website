import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? "zh-cn";
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-128px)] flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#0066FF]">
        <div className="text-center text-white px-4">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
          <p className="text-gray-200 mb-8">{t("description")}</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00CCFF] text-white font-medium rounded-lg hover:bg-[#00BBFF] transition-colors"
          >
            {t("backHome")}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
