"use client";

import { Send } from "lucide-react";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const company = formData.get('company') || '';
  const message = formData.get('message') || '';
  
  const mailtoLink = `mailto:contact@geometryvision.online?subject=来自网站的咨询 - ${encodeURIComponent(String(name))}&body=${encodeURIComponent(`姓名: ${name}\n邮箱: ${email}\n公司/机构: ${company}\n\n留言内容:\n${message}`)}`;
  window.location.href = mailtoLink;
}

export function ContactForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#003366] mb-6">发送消息</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              姓名
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              placeholder="您的姓名"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            公司/机构
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
            placeholder="您的公司或机构名称"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            主题
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
          >
            <option value="">请选择咨询主题</option>
            <option value="product">产品咨询</option>
            <option value="solution">解决方案</option>
            <option value="partnership">商务合作</option>
            <option value="career">人才招聘</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            留言内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent resize-none"
            placeholder="请详细描述您的需求或问题..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
          发送消息
        </button>
      </form>
    </div>
  );
}
