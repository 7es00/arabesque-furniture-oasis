
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
import { LogIn } from 'lucide-react';
import { toast } from "sonner";

// Form Schema
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  rememberMe: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LoginPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  // Form submission handler
  function onSubmit(data: FormValues) {
    console.log('Login Data:', data);
    toast.success(
      language === 'en' 
        ? 'Login successful!' 
        : 'تم تسجيل الدخول بنجاح!'
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">
            {dictionary.loginToAccount}
          </h1>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Enter your credentials to access your account' 
              : 'أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك'}
          </p>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <div className="flex items-center justify-between">
                      <FormLabel>{dictionary.password}</FormLabel>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        {dictionary.forgotPassword}
                      </Link>
                    </div>
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
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal cursor-pointer">
                      {language === 'en' ? 'Remember me' : 'تذكرني'}
                    </FormLabel>
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                <LogIn size={18} className="mr-2" />
                {dictionary.login}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {dictionary.dontHaveAccount}{' '}
              <Link to="/register" className="text-primary hover:underline">
                {language === 'en' ? 'Create an account' : 'إنشاء حساب'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
