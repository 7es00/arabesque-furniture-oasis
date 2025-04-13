
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

const ContactForm = () => {
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
  );
};

export default ContactForm;
