
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { useShopContext } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  ShoppingCart, 
  ChevronLeft, 
  Plus, 
  Minus, 
  Check,
  ArrowLeft 
} from 'lucide-react';
import { products } from '@/data/products';
import { toast } from "sonner";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, dictionary } = useAppContext();
  const { addToCart, addToWishlist, isInWishlist } = useShopContext();
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {language === 'en' ? 'Product Not Found' : 'المنتج غير موجود'}
        </h1>
        <Button onClick={() => navigate('/products')}>
          {language === 'en' ? 'Back to Products' : 'العودة إلى المنتجات'}
        </Button>
      </div>
    );
  }
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(
      language === 'en' 
        ? `Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart` 
        : `تمت إضافة ${quantity} ${quantity === 1 ? 'عنصر' : 'عناصر'} إلى السلة`
    );
  };
  
  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(
      language === 'en' 
        ? 'Added to wishlist' 
        : 'تمت الإضافة إلى المفضلة'
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            {dictionary.home}
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Products' : 'المنتجات'}
          </Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/products?category=${product.category.en.toLowerCase()}`} 
            className="hover:text-primary transition-colors"
          >
            {language === 'en' ? product.category.en : product.category.ar}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">
            {language === 'en' ? product.name.en : product.name.ar}
          </span>
        </div>
      </div>
      
      {/* Back button */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-6" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} className="mr-2" />
        {language === 'en' ? 'Back' : 'رجوع'}
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border border-border">
            <img 
              src={product.images[activeImage]} 
              alt={language === 'en' ? product.name.en : product.name.ar} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex space-x-2 overflow-auto pb-2">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                className={`relative w-20 h-20 rounded border ${
                  activeImage === idx ? 'border-primary' : 'border-border'
                }`}
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={image} 
                  alt={`${language === 'en' ? product.name.en : product.name.ar} ${idx + 1}`} 
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          {/* Status Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {product.isNew && (
              <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                {language === 'en' ? 'NEW' : 'جديد'}
              </div>
            )}
            {!product.inStock && (
              <div className="bg-destructive text-destructive-foreground text-xs font-medium py-1 px-2 rounded">
                {language === 'en' ? 'OUT OF STOCK' : 'نفذ المخزون'}
              </div>
            )}
            {product.featured && (
              <div className="bg-secondary text-secondary-foreground text-xs font-medium py-1 px-2 rounded">
                {language === 'en' ? 'FEATURED' : 'مميز'}
              </div>
            )}
          </div>
          
          <h1 className="text-3xl font-serif font-bold">
            {language === 'en' ? product.name.en : product.name.ar}
          </h1>
          
          <p className="text-2xl font-medium">${product.price.toLocaleString()}</p>
          
          <p className="text-muted-foreground">
            {language === 'en' ? product.description.en : product.description.ar}
          </p>
          
          <Separator />
          
          {/* Colors */}
          <div className="space-y-3">
            <h3 className="font-medium">
              {language === 'en' ? 'Colors' : 'الألوان'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full relative ${
                    selectedColor === color ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select color ${color}`}
                >
                  {selectedColor === color && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Check size={14} className="text-white drop-shadow-sm" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Materials */}
          <div className="space-y-3">
            <h3 className="font-medium">
              {language === 'en' ? 'Materials' : 'المواد'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(language === 'en' ? product.materials.en : product.materials.ar).map((material, idx) => (
                <div 
                  key={idx}
                  className="bg-muted text-muted-foreground text-sm py-1 px-3 rounded-full"
                >
                  {material}
                </div>
              ))}
            </div>
          </div>
          
          {/* Dimensions */}
          <div className="space-y-3">
            <h3 className="font-medium">
              {language === 'en' ? 'Dimensions' : 'الأبعاد'}
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted rounded p-3">
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Width' : 'العرض'}
                </p>
                <p className="font-medium">
                  {product.dimensions.width} {product.dimensions.unit}
                </p>
              </div>
              <div className="bg-muted rounded p-3">
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Height' : 'الارتفاع'}
                </p>
                <p className="font-medium">
                  {product.dimensions.height} {product.dimensions.unit}
                </p>
              </div>
              <div className="bg-muted rounded p-3">
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Depth' : 'العمق'}
                </p>
                <p className="font-medium">
                  {product.dimensions.depth} {product.dimensions.unit}
                </p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h3 className="font-medium">
                {language === 'en' ? 'Quantity' : 'الكمية'}
              </h3>
              <div className="flex items-center border border-border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="rounded-r-none h-10"
                >
                  <Minus size={16} />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleQuantityChange(1)}
                  className="rounded-l-none h-10"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
              >
                <ShoppingCart size={18} className="mr-2" />
                {dictionary.addToCart}
              </Button>
              
              <Button 
                variant={isInWishlist(product.id) ? "secondary" : "outline"}
                onClick={handleAddToWishlist}
                className="w-12"
                title={dictionary.addToWishlist}
              >
                <Heart size={18} />
              </Button>
            </div>
            
            {!product.inStock && (
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? 'This product is currently out of stock. We expect it to be available in 2-3 weeks.' 
                  : 'هذا المنتج غير متوفر حاليًا. نتوقع أن يكون متاحًا في غضون 2-3 أسابيع.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
