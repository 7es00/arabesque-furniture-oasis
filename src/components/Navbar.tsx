
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ShoppingCart, 
  Heart, 
  Info, 
  PhoneCall, 
  LogIn, 
  UserPlus, 
  Moon, 
  Sun, 
  Globe, 
  Menu, 
  X
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { dictionary, toggleTheme, theme, toggleLanguage, language } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-primary">Arabesque</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              <span className="flex items-center gap-1">
                <Home size={16} />
                <span>{dictionary.home}</span>
              </span>
            </Link>
            <Link to="/products" className="nav-link">
              <span>{dictionary.products}</span>
            </Link>
            <Link to="/about" className="nav-link">
              <span>{dictionary.about}</span>
            </Link>
            <Link to="/contact" className="nav-link">
              <span>{dictionary.contact}</span>
            </Link>
          </nav>
          
          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleLanguage} title={language === 'en' ? 'Arabic' : 'English'}>
              <Globe size={20} />
            </Button>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" title={dictionary.wishlist}>
                <Heart size={20} />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" title={dictionary.cart}>
                <ShoppingCart size={20} />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="ml-2">
                {dictionary.login}
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm">
                {dictionary.register}
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="bg-background border-b border-border">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col py-4 space-y-3">
                <Link to="/" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <Home size={18} />
                  <span>{dictionary.home}</span>
                </Link>
                <Link to="/products" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <span>{dictionary.products}</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <Info size={18} />
                  <span>{dictionary.about}</span>
                </Link>
                <Link to="/contact" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <PhoneCall size={18} />
                  <span>{dictionary.contact}</span>
                </Link>
                <Link to="/wishlist" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <Heart size={18} />
                  <span>{dictionary.wishlist}</span>
                </Link>
                <Link to="/cart" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <ShoppingCart size={18} />
                  <span>{dictionary.cart}</span>
                </Link>
                <Link to="/login" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <LogIn size={18} />
                  <span>{dictionary.login}</span>
                </Link>
                <Link to="/register" className="flex items-center space-x-2 py-2" onClick={toggleMenu}>
                  <UserPlus size={18} />
                  <span>{dictionary.register}</span>
                </Link>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start">
                    {theme === 'light' ? <Moon size={18} className="mr-2" /> : <Sun size={18} className="mr-2" />}
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={toggleLanguage} className="w-full justify-start">
                  <Globe size={18} className="mr-2" />
                  {language === 'en' ? 'Arabic' : 'English'}
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
