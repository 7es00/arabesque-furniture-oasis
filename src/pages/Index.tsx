
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { useShopContext } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const HomePage: React.FC = () => {
  const { dictionary, language } = useAppContext();
  const { addToCart, addToWishlist } = useShopContext();
  
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  const newArrivals = products.filter(product => product.isNew).slice(0, 3);

  return (
    <div className="min-h-screen arabesque-pattern">
      {/* Hero Section */}
      <section className="relative bg-furniture-navy text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-furniture-navy to-furniture-burgundy opacity-90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {language === 'en' 
                ? 'Transform Your Space with Middle Eastern Elegance' 
                : 'حوّل مساحتك بأناقة شرقية'}
            </h1>
            <p className="text-lg mb-8 opacity-90">
              {language === 'en' 
                ? 'Discover our collection of premium furniture inspired by Arabian heritage and crafted for modern living.'
                : 'اكتشف مجموعتنا من الأثاث الفاخر المستوحى من التراث العربي والمصمم للحياة العصرية.'}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/products">
                <Button size="lg">
                  {dictionary.shopNow}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  {dictionary.ourStory}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              {dictionary.featuredProducts}
            </h2>
            <Link to="/products" className="text-primary flex items-center hover:underline">
              <span>{language === 'en' ? 'View all' : 'عرض الكل'}</span>
              <ArrowRight size={16} className="ms-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={addToCart}
                onAddToWishlist={addToWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">
            {language === 'en' ? 'Shop by Room' : 'تسوق حسب الغرفة'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: language === 'en' ? 'Living Room' : 'غرفة المعيشة', 
                image: '/placeholder.svg',
                link: '/products?category=living' 
              },
              { 
                name: language === 'en' ? 'Bedroom' : 'غرفة النوم', 
                image: '/placeholder.svg',
                link: '/products?category=bedroom' 
              },
              { 
                name: language === 'en' ? 'Dining' : 'غرفة الطعام', 
                image: '/placeholder.svg',
                link: '/products?category=dining' 
              },
              { 
                name: language === 'en' ? 'Outdoor' : 'الخارجية', 
                image: '/placeholder.svg',
                link: '/products?category=outdoor' 
              }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={category.link}
                className="relative rounded-md overflow-hidden group h-48"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <h3 className="text-white text-xl font-serif font-medium">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              {dictionary.newArrivals}
            </h2>
            <Link to="/products?new=true" className="text-primary flex items-center hover:underline">
              <span>{language === 'en' ? 'View all' : 'عرض الكل'}</span>
              <ArrowRight size={16} className="ms-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newArrivals.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={addToCart}
                onAddToWishlist={addToWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section className="py-16 md:py-20 bg-furniture-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 arabesque-pattern opacity-20" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              {dictionary.qualityFurniture}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              {language === 'en' 
                ? 'Each piece in our collection is carefully crafted by skilled artisans using traditional techniques and premium materials, bringing authentic Middle Eastern elegance into modern homes.'
                : 'يتم صناعة كل قطعة في مجموعتنا بعناية من قبل حرفيين مهرة باستخدام تقنيات تقليدية ومواد متميزة، مما يضفي أناقة الشرق الأوسط الأصيلة على المنازل العصرية.'}
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-furniture-navy">
                {language === 'en' ? 'Learn More About Our Craftsmanship' : 'تعرف على المزيد عن حرفيتنا'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">
            {language === 'en' ? 'What Our Customers Say' : 'ما يقوله عملاؤنا'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: language === 'en' 
                  ? 'The Arabesque Lounge Chair completely transformed my living room. The quality and craftsmanship are exceptional.'
                  : 'كرسي الاسترخاء أرابيسك غيّر غرفة معيشتي تمامًا. الجودة والحرفية استثنائية.',
                author: language === 'en' ? 'Sarah K.' : 'سارة ك.',
                location: language === 'en' ? 'Dubai, UAE' : 'دبي، الإمارات'
              },
              {
                text: language === 'en' 
                  ? 'I love my Marrakech Coffee Table. The attention to detail and the beautiful inlay work makes it a conversation starter!'
                  : 'أحب طاولة القهوة مراكش الخاصة بي. الاهتمام بالتفاصيل والعمل المرصع الجميل يجعلها بداية للمحادثة!',
                author: language === 'en' ? 'Mohammed A.' : 'محمد أ.',
                location: language === 'en' ? 'Riyadh, KSA' : 'الرياض، السعودية'
              },
              {
                text: language === 'en' 
                  ? 'The customer service was impeccable, and my Cairo Dining Set arrived perfectly packaged. Truly a premium experience.'
                  : 'كانت خدمة العملاء لا تشوبها شائبة، ووصلت مجموعة طعام القاهرة الخاصة بي معبأة بشكل مثالي. تجربة فاخرة حقًا.',
                author: language === 'en' ? 'Layla M.' : 'ليلى م.',
                location: language === 'en' ? 'Doha, Qatar' : 'الدوحة، قطر'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
