
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { useShopContext } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Trash2, 
  ShoppingCart, 
  ArrowRight, 
  Eye 
} from 'lucide-react';
import { toast } from "sonner";

const WishlistPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  const { 
    wishlist, 
    removeFromWishlist, 
    addToCart
  } = useShopContext();

  const handleRemoveItem = (productId: string) => {
    removeFromWishlist(productId);
    toast.success(
      language === 'en' 
        ? 'Item removed from wishlist' 
        : 'تمت إزالة العنصر من المفضلة'
    );
  };
  
  const handleAddToCart = (productId: string) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product);
      toast.success(
        language === 'en' 
          ? 'Item added to cart' 
          : 'تمت إضافة العنصر إلى السلة'
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">
        {dictionary.yourWishlist}
      </h1>
      
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div 
              key={product.id} 
              className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <img 
                    src={product.images[0]} 
                    alt={language === 'en' ? product.name.en : product.name.ar} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleRemoveItem(product.id)}
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="p-4">
                <Link 
                  to={`/products/${product.id}`}
                  className="block mb-1 hover:text-primary transition-colors"
                >
                  <h3 className="font-medium">
                    {language === 'en' ? product.name.en : product.name.ar}
                  </h3>
                </Link>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'en' ? product.category.en : product.category.ar}
                </p>
                
                <p className="font-medium mb-4">${product.price.toLocaleString()}</p>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleAddToCart(product.id)}
                    disabled={!product.inStock}
                    className="flex-1 gap-1"
                  >
                    <ShoppingCart size={16} />
                    {dictionary.addToCart}
                  </Button>
                  
                  <Link to={`/products/${product.id}`}>
                    <Button variant="outline" size="icon">
                      <Eye size={16} />
                    </Button>
                  </Link>
                </div>
                
                {!product.inStock && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {language === 'en' ? 'Out of stock' : 'غير متوفر'}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Heart size={24} className="text-muted-foreground" />
          </div>
          
          <h2 className="text-2xl font-medium mb-2">
            {language === 'en' ? 'Your wishlist is empty' : 'قائمة رغباتك فارغة'}
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {language === 'en' 
              ? 'Add items you love to your wishlist. Review them anytime and easily move them to your cart.' 
              : 'أضف العناصر التي تحبها إلى قائمة رغباتك. راجعها في أي وقت وانقلها بسهولة إلى سلة التسوق الخاصة بك.'}
          </p>
          
          <Link to="/products">
            <Button className="gap-2">
              {dictionary.continueShoppingBtn}
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
