import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "联系我们 - 几何视界 GeometryVision",
  description: "联系几何视界团队，获取产品咨询、技术支持和商务合作信息",
};

const contactInfo = [
  {
    icon: Mail,
    title: "邮箱",
    content: "contact@geometryvision.online",
    href: "mailto:contact@geometryvision.online",
  },
  {
    icon: Phone,
    title: "电话",
    content: "香港 / 深圳",
    href: null,
  },
  {
    icon: MapPin,
    title: "地址",
    content: "香港 / 深圳",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero title="联系我们" description="期待与您的交流，共同探索视觉智能的无限可能" />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6">联系方式</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00CCFF] flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#003366] mb-1">{info.title}</h3>
                        {info.href ? (
                          <a href={info.href} className="text-gray-600 hover:text-[#0066FF] transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">工作时间</h3>
                <p className="text-gray-600 text-sm">周一至周五: 9:00 - 18:00 (北京时间)</p>
                <p className="text-gray-600 text-sm">我们会在1-2个工作日内回复您的留言</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#003366] mb-8 text-center">常见问题</h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "如何获取产品演示？",
                a: "您可以通过上方的表单提交申请，或直接发送邮件至 contact@geometryvision.online，我们会尽快与您联系安排演示。",
              },
              {
                q: "是否提供定制化开发服务？",
                a: "是的，我们提供定制化解决方案开发服务。请详细描述您的需求，我们的技术团队会评估并为您提供方案。",
              },
              {
                q: "如何加入几何视界团队？",
                a: "我们欢迎有志于视觉AI和数学研究的人才加入。请将简历发送至 contact@geometryvision.online，注明应聘职位。",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#003366] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
