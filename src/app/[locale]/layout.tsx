import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateMetadata({ params }: { params?: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params)?.locale ?? routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('brand')}`,
    },
    description: t('description'),
    keywords: t('keywords').split(',').map(k => k.trim()),
    icons: {
      icon: "/icons/favicon.ico",
      apple: "/icons/apple-touch-icon.png",
      other: [
        {
          rel: "android-chrome-192x192",
          url: "/icons/android-chrome-192x192.png",
        },
        {
          rel: "android-chrome-512x512",
          url: "/icons/android-chrome-512x512.png",
        },
      ],
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh-cn' ? 'zh_CN' : locale === 'zh-tw' ? 'zh_TW' : 'en_US',
      alternateLocale: locale === 'zh-cn' ? ['zh-tw', 'en'] : locale === 'zh-tw' ? ['zh-cn', 'en'] : ['zh-cn', 'zh-tw'],
      url: 'https://geometryvision.online',
      siteName: t('brand'),
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params?: Promise<{ locale: string }>;
}) {
  const locale = (await params)?.locale ?? routing.defaultLocale;
  setRequestLocale(locale);
  const validLocale = locale as (typeof routing.locales)[number];

  // Ensure that a valid locale is used
  if (!routing.locales.includes(validLocale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
