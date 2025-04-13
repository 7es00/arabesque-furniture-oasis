
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { dictionary, language } = useAppContext();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Arabesque</h3>
            <p className="text-secondary-foreground/80 max-w-xs">
              {language === 'en' 
                ? 'Quality furniture with Middle Eastern inspired design for your modern home.'
                : 'أثاث عالي الجودة بتصميم مستوحى من الشرق الأوسط لمنزلك العصري.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">{language === 'en' ? 'Navigation' : 'التنقل'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.home}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.products}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">{language === 'en' ? 'Account' : 'الحساب'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.login}
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.register}
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.wishlist}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  {dictionary.cart}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80">
                {language === 'en' ? '123 Furniture Lane, Design District' : '١٢٣ شارع الأثاث، حي التصميم'}
              </li>
              <li className="text-secondary-foreground/80">
                {language === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات العربية المتحدة'}
              </li>
              <li className="text-secondary-foreground/80">+971 50 123 4567</li>
              <li>
                <a href="mailto:info@arabesque.com" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@arabesque.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/20">
          <p className="text-center text-secondary-foreground/60">
            {language === 'en' 
              ? '© 2025 Arabesque Furniture. All rights reserved.'
              : '© ٢٠٢٥ أرابيسك للأثاث. جميع الحقوق محفوظة.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
