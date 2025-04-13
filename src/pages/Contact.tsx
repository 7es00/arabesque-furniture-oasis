
import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import FAQSection from '@/components/contact/FAQSection';

const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactHero />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      
      <FAQSection />
    </div>
  );
};

export default ContactPage;
