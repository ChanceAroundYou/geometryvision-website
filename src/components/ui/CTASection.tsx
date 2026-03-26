import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CTASection({ title, description, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0066FF] to-[#00CCFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">{description}</p>
        <Link href={ctaHref} className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066FF] font-medium rounded-lg hover:bg-gray-100 transition-colors">
          {ctaText}
        </Link>
        {secondaryCtaText && secondaryCtaHref && (
          <Link href={secondaryCtaHref} className="inline-flex items-center justify-center px-8 py-4 ml-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
            {secondaryCtaText}
          </Link>
        )}
      </div>
    </section>
  );
}
