
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { useShopContext } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight 
} from 'lucide-react';
import { toast } from "sonner";

const CartPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  const { 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart,
    cartTotal
  } = useShopContext();

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    toast.success(
      language === 'en' 
        ? 'Item removed from cart' 
        : 'تمت إزالة العنصر من السلة'
    );
  };
  
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
  };
  
  const handleClearCart = () => {
    clearCart();
    toast.success(
      language === 'en' 
        ? 'Cart cleared' 
        : 'تم مسح السلة'
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">
        {dictionary.yourCart}
      </h1>
      
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">
                    {language === 'en' 
                      ? `Cart (${cart.length} ${cart.length === 1 ? 'item' : 'items'})` 
                      : `السلة (${cart.length} ${cart.length === 1 ? 'عنصر' : 'عناصر'})`}
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleClearCart}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={16} className="mr-1" />
                    {language === 'en' ? 'Clear Cart' : 'مسح السلة'}
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded border border-border overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={language === 'en' ? item.product.name.en : item.product.name.ar} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/products/${item.product.id}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-1"
                        >
                          {language === 'en' ? item.product.name.en : item.product.name.ar}
                        </Link>
                        <p className="text-muted-foreground text-sm line-clamp-1">
                          {language === 'en' ? item.product.category.en : item.product.category.ar}
                        </p>
                        <div className="flex items-center mt-2">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8"
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="mx-2 min-w-10 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-medium">${item.product.price}</p>
                        <p className="text-sm text-muted-foreground">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="mt-1 h-8 w-8 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-4">
                  {language === 'en' ? 'Order Summary' : 'ملخص الطلب'}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Subtotal' : 'المجموع الفرعي'}
                    </span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Shipping' : 'الشحن'}
                    </span>
                    <span>
                      {language === 'en' ? 'Calculated at checkout' : 'يحسب عند الدفع'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Tax' : 'الضريبة'}
                    </span>
                    <span>
                      {language === 'en' ? 'Calculated at checkout' : 'تحسب عند الدفع'}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>{language === 'en' ? 'Total' : 'المجموع'}</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">
                      {dictionary.checkout}
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      {language === 'en' 
                        ? 'Taxes and shipping calculated at checkout' 
                        : 'يتم احتساب الضرائب والشحن عند الدفع'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Promo Code */}
            <div className="mt-6 bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-6">
                <h3 className="font-medium mb-4">
                  {language === 'en' ? 'Promo Code' : 'رمز ترويجي'}
                </h3>
                
                <div className="flex space-x-2">
                  <Input 
                    placeholder={language === 'en' ? 'Enter promo code' : 'أدخل الرمز الترويجي'} 
                    className="flex-1"
                  />
                  <Button variant="outline">
                    {language === 'en' ? 'Apply' : 'تطبيق'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <ShoppingCart size={24} className="text-muted-foreground" />
          </div>
          
          <h2 className="text-2xl font-medium mb-2">
            {language === 'en' ? 'Your cart is empty' : 'سلة التسوق الخاصة بك فارغة'}
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {language === 'en' 
              ? 'Looks like you haven\'t added anything to your cart yet.' 
              : 'يبدو أنك لم تضف أي شيء إلى سلة التسوق الخاصة بك بعد.'}
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

export default CartPage;
