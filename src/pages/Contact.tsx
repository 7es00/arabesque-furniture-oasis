
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });

  // Form submission handler
  function onSubmit(data: FormValues) {
    console.log('Form Data:', data);
    toast.success(
      language === 'en' 
        ? 'Your message has been sent! We\'ll get back to you soon.' 
        : 'تم إرسال رسالتك! سنعاود الاتصال بك قريبًا.'
    );
    form.reset();
  }

  return (
    <div>
      {/* Hero Section */}
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

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
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
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                {language === 'en' ? 'Send Us a Message' : 'أرسل لنا رسالة'}
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{dictionary.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={language === 'en' ? 'Your name' : 'اسمك'} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{dictionary.email}</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder={language === 'en' ? 'Your email address' : 'عنوان بريدك الإلكتروني'} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{language === 'en' ? 'Subject' : 'الموضوع'}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={language === 'en' ? 'How can we help?' : 'كيف يمكننا المساعدة؟'} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{dictionary.message}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={language === 'en' ? 'Your message here...' : 'رسالتك هنا...'} 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    {dictionary.send}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
