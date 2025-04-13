
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'en' | 'ar';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  dictionary: Record<string, string>;
}

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    wishlist: 'Wishlist',
    cart: 'Cart',
    login: 'Login',
    register: 'Register',
    featuredProducts: 'Featured Products',
    newArrivals: 'New Arrivals',
    shopNow: 'Shop Now',
    viewProduct: 'View Product',
    addToCart: 'Add to Cart',
    addToWishlist: 'Add to Wishlist',
    ourStory: 'Our Story',
    ourValues: 'Our Values',
    contactUs: 'Contact Us',
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    yourCart: 'Your Cart',
    yourWishlist: 'Your Wishlist',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    continueShoppingBtn: 'Continue Shopping',
    empty: 'Empty',
    loginToAccount: 'Login to your account',
    createAccount: 'Create an account',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    confirmPassword: 'Confirm Password',
    signUp: 'Sign Up',
    qualityFurniture: 'Quality Furniture',
    craftedWithLove: 'Crafted with love',
  },
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    wishlist: 'المفضلة',
    cart: 'عربة التسوق',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    featuredProducts: 'منتجات مميزة',
    newArrivals: 'وصل حديثاً',
    shopNow: 'تسوق الآن',
    viewProduct: 'عرض المنتج',
    addToCart: 'أضف إلى العربة',
    addToWishlist: 'أضف إلى المفضلة',
    ourStory: 'قصتنا',
    ourValues: 'قيمنا',
    contactUs: 'اتصل بنا',
    getInTouch: 'تواصل معنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    yourCart: 'عربة التسوق الخاصة بك',
    yourWishlist: 'المفضلة الخاصة بك',
    subtotal: 'المجموع الفرعي',
    checkout: 'إتمام الشراء',
    continueShoppingBtn: 'مواصلة التسوق',
    empty: 'فارغة',
    loginToAccount: 'تسجيل الدخول إلى حسابك',
    createAccount: 'إنشاء حساب جديد',
    password: 'كلمة المرور',
    forgotPassword: 'نسيت كلمة المرور؟',
    dontHaveAccount: "ليس لديك حساب؟",
    alreadyHaveAccount: 'لديك حساب بالفعل؟',
    confirmPassword: 'تأكيد كلمة المرور',
    signUp: 'اشتراك',
    qualityFurniture: 'أثاث عالي الجودة',
    craftedWithLove: 'مصنوع بحب',
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedLanguage = localStorage.getItem('language') as Language | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  return (
    <AppContext.Provider value={{ 
      language, 
      theme, 
      toggleLanguage, 
      toggleTheme,
      dictionary: translations[language] 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
