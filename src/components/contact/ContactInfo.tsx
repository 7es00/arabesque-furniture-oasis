
import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const { language } = useAppContext();
  
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">
        {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full text-primary">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-medium mb-1">
              {language === 'en' ? 'Our Showroom' : 'صالة العرض'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? '123 Furniture Lane, Design District' 
                : '١٢٣ شارع الأثاث، حي التصميم'}
            </p>
            <p className="text-muted-foreground">
              {language === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات العربية المتحدة'}
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full text-primary">
            <Phone size={24} />
          </div>
          <div>
            <h3 className="font-medium mb-1">
              {language === 'en' ? 'Phone' : 'الهاتف'}
            </h3>
            <p className="text-muted-foreground">+971 50 123 4567</p>
            <p className="text-muted-foreground">+971 4 123 4567</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full text-primary">
            <Mail size={24} />
          </div>
          <div>
            <h3 className="font-medium mb-1">
              {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
            </h3>
            <p className="text-muted-foreground">info@arabesque.com</p>
            <p className="text-muted-foreground">sales@arabesque.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full text-primary">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-medium mb-1">
              {language === 'en' ? 'Working Hours' : 'ساعات العمل'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Monday - Friday: 9:00 AM - 8:00 PM' 
                : 'الاثنين - الجمعة: ٩:٠٠ ص - ٨:٠٠ م'}
            </p>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Saturday - Sunday: 10:00 AM - 6:00 PM'
                : 'السبت - الأحد: ١٠:٠٠ ص - ٦:٠٠ م'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="font-medium mb-4">
          {language === 'en' ? 'Find Us' : 'موقعنا'}
        </h3>
        <div className="rounded-lg overflow-hidden h-64 bg-muted">
          {/* This would be a map component in a real implementation */}
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            {language === 'en' ? 'Map location' : 'موقع الخريطة'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
