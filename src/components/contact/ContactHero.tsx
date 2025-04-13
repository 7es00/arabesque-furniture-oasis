
import React from 'react';
import { useAppContext } from '@/context/AppContext';

const ContactHero = () => {
  const { language } = useAppContext();
  
  return (
    <section className="relative bg-furniture-navy text-white py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-furniture-navy to-furniture-burgundy opacity-90" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            {language === 'en' 
              ? 'Get in Touch' 
              : 'تواصل معنا'}
          </h1>
          <p className="text-lg opacity-90">
            {language === 'en' 
              ? 'We\'d love to hear from you. Our friendly team is here to help.' 
              : 'نود أن نسمع منك. فريقنا الودود هنا للمساعدة.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
