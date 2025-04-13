
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onAddToWishlist 
}) => {
  const { language, dictionary } = useAppContext();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
      toast.success(language === 'en' ? 'Added to cart!' : 'تمت الإضافة إلى العربة!');
    }
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(product);
      toast.success(language === 'en' ? 'Added to wishlist!' : 'تمت الإضافة إلى المفضلة!');
    }
  };

  return (
    <div className="product-card h-full flex flex-col">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={language === 'en' ? product.name.en : product.name.ar}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
          />
          {(product.isNew || !product.inStock) && (
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isNew && (
                <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                  {language === 'en' ? 'NEW' : 'جديد'}
                </div>
              )}
              {!product.inStock && (
                <div className="bg-secondary text-secondary-foreground text-xs font-medium py-1 px-2 rounded">
                  {language === 'en' ? 'OUT OF STOCK' : 'نفذ المخزون'}
                </div>
              )}
            </div>
          )}
        </Link>
      </div>
      
      <div className="flex-1 p-4 flex flex-col">
        <div className="mb-1 text-sm text-muted-foreground">
          {language === 'en' ? product.category.en : product.category.ar}
        </div>
        <Link to={`/products/${product.id}`} className="mb-2 block">
          <h3 className="text-lg font-medium hover:text-primary transition-colors">
            {language === 'en' ? product.name.en : product.name.ar}
          </h3>
        </Link>
        <div className="mb-4 text-lg font-medium">
          ${product.price.toLocaleString()}
        </div>
        
        <div className="mt-auto flex items-center justify-between gap-2">
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full gap-1">
              <Eye size={16} />
              {dictionary.viewProduct}
            </Button>
          </Link>
          
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleAddToWishlist}
              disabled={!product.inStock}
              title={dictionary.addToWishlist}
            >
              <Heart size={18} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              title={dictionary.addToCart}
            >
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
