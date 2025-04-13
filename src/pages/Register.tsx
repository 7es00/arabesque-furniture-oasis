
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { UserPlus } from 'lucide-react';
import { toast } from "sonner";

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

const RegisterPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
  });

  // Form submission handler
  function onSubmit(data: FormValues) {
    console.log('Register Data:', data);
    toast.success(
      language === 'en' 
        ? 'Registration successful! Please check your email to verify your account.' 
        : 'تم التسجيل بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد حسابك.'
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">
            {dictionary.createAccount}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Fill in the form below to create your account' 
              : 'املأ النموذج أدناه لإنشاء حسابك'}
          </p>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.name}</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={language === 'en' ? 'Your full name' : 'اسمك الكامل'} 
                        {...field} 
                      />
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
                        placeholder={language === 'en' ? 'your.email@example.com' : 'بريدك@مثال.كوم'} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.password}</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder={language === 'en' ? '••••••••' : '••••••••'} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.confirmPassword}</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder={language === 'en' ? '••••••••' : '••••••••'} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal cursor-pointer">
                        {language === 'en' 
                          ? 'I agree to the terms of service and privacy policy' 
                          : 'أوافق على شروط الخدمة وسياسة الخصوصية'}
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                <UserPlus size={18} className="mr-2" />
                {dictionary.signUp}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {dictionary.alreadyHaveAccount}{' '}
              <Link to="/login" className="text-primary hover:underline">
                {language === 'en' ? 'Sign in' : 'تسجيل الدخول'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
