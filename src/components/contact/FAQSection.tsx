
import React from 'react';
import { useAppContext } from '@/context/AppContext';

const FAQSection = () => {
  const { language } = useAppContext();
  
  const faqs = [
    {
      question: language === 'en' ? 'Do you ship internationally?' : 'هل تشحنون دوليًا؟',
      answer: language === 'en' 
        ? 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on your location.' 
        : 'نعم، نشحن إلى معظم البلدان في جميع أنحاء العالم. تختلف تكاليف الشحن وأوقات التسليم حسب موقعك.'
    },
    {
      question: language === 'en' ? 'What is your return policy?' : 'ما هي سياسة الإرجاع الخاصة بكم؟',
      answer: language === 'en' 
        ? 'We offer a 30-day return policy for most items. Custom-made pieces may not be eligible for return unless damaged during transit.' 
        : 'نقدم سياسة إرجاع لمدة 30 يومًا لمعظم العناصر. قد لا تكون القطع المصنوعة حسب الطلب مؤهلة للإرجاع ما لم تتضرر أثناء النقل.'
    },
    {
      question: language === 'en' ? 'How do I care for my furniture?' : 'كيف أعتني بأثاثي؟',
      answer: language === 'en' 
        ? 'Each piece comes with specific care instructions. Generally, we recommend regular dusting, avoiding direct sunlight, and using specialized cleaning products for different materials.' 
        : 'تأتي كل قطعة مع تعليمات العناية المحددة. بشكل عام، نوصي بإزالة الغبار بانتظام، وتجنب أشعة الشمس المباشرة، واستخدام منتجات التنظيف المتخصصة للمواد المختلفة.'
    },
    {
      question: language === 'en' ? 'Can I order custom furniture?' : 'هل يمكنني طلب أثاث مخصص؟',
      answer: language === 'en' 
        ? 'Yes! We specialize in custom pieces. Please contact our design team to discuss your requirements and get a quote.' 
        : 'نعم! نحن متخصصون في القطع المخصصة. يرجى الاتصال بفريق التصميم لدينا لمناقشة متطلباتك والحصول على عرض أسعار.'
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
          {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
