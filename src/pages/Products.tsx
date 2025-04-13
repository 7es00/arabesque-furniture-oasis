
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { useShopContext } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products as allProducts, Product } from '@/data/products';

const ProductsPage: React.FC = () => {
  const { language, dictionary } = useAppContext();
  const { addToCart, addToWishlist } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isNew, setIsNew] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [sortBy, setSortBy] = useState<string>('featured');
  
  // Get unique categories
  const categories = Array.from(
    new Set(allProducts.map(p => language === 'en' ? p.category.en : p.category.ar))
  );
  
  // Handle URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    const newParam = searchParams.get('new');
    const stockParam = searchParams.get('inStock');
    const sort = searchParams.get('sort');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategories([category]);
    }
    
    if (newParam === 'true') {
      setIsNew(true);
    }
    
    if (stockParam === 'true') {
      setInStock(true);
    }
    
    if (sort) {
      setSortBy(sort);
    }
    
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);
  
  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Search term filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name.ar.includes(searchTerm) ||
        product.description.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.ar.includes(searchTerm)
      );
    }
    
    // Category filter
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        selectedCategories.includes(language === 'en' ? product.category.en : product.category.ar)
      );
    }
    
    // Price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // New items filter
    if (isNew) {
      filteredProducts = filteredProducts.filter(product => product.isNew);
    }
    
    // In stock filter
    if (inStock) {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'featured':
      default:
        filteredProducts.sort((a, b) => (a.featured === b.featured) ? 0 : a.featured ? -1 : 1);
        break;
    }
    
    setProducts(filteredProducts);
  }, [searchTerm, selectedCategories, priceRange, isNew, inStock, sortBy, language]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange([0, 3000]);
    setIsNew(false);
    setInStock(false);
    setSortBy('featured');
    setSearchParams({});
  };
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">
        {language === 'en' ? 'Our Collection' : 'مجموعتنا'}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">
                {language === 'en' ? 'Filters' : 'فلترة'}
              </h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                {language === 'en' ? 'Clear' : 'مسح'}
              </Button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder={language === 'en' ? 'Search products...' : 'البحث عن منتجات...'}
                className="pl-9"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-medium">
              {language === 'en' ? 'Categories' : 'الفئات'}
            </h3>
            <div className="space-y-2">
              {categories.map((category, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${idx}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label 
                    htmlFor={`category-${idx}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="font-medium">
              {language === 'en' ? 'Price Range' : 'نطاق السعر'}
            </h3>
            <Slider
              defaultValue={[0, 3000]}
              max={3000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Availability */}
          <div className="space-y-3">
            <h3 className="font-medium">
              {language === 'en' ? 'Availability' : 'التوفر'}
            </h3>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="in-stock"
                checked={inStock}
                onCheckedChange={() => setInStock(!inStock)}
              />
              <label 
                htmlFor="in-stock"
                className="text-sm font-medium leading-none"
              >
                {language === 'en' ? 'In Stock Only' : 'المتوفر فقط'}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="new-arrivals"
                checked={isNew}
                onCheckedChange={() => setIsNew(!isNew)}
              />
              <label 
                htmlFor="new-arrivals"
                className="text-sm font-medium leading-none"
              >
                {language === 'en' ? 'New Arrivals' : 'وصل حديثًا'}
              </label>
            </div>
          </div>
        </div>
        
        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="text-muted-foreground">
              {language === 'en' 
                ? `${products.length} products found` 
                : `تم العثور على ${products.length} منتج`}
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} className="mr-2" />
                {language === 'en' ? 'Filters' : 'فلترة'}
              </Button>
              
              <Select
                value={sortBy}
                onValueChange={setSortBy}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={language === 'en' ? 'Sort by' : 'ترتيب حسب'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">
                    {language === 'en' ? 'Featured' : 'مميز'}
                  </SelectItem>
                  <SelectItem value="price-low-high">
                    {language === 'en' ? 'Price: Low to High' : 'السعر: من الأقل إلى الأعلى'}
                  </SelectItem>
                  <SelectItem value="price-high-low">
                    {language === 'en' ? 'Price: High to Low' : 'السعر: من الأعلى إلى الأقل'}
                  </SelectItem>
                  <SelectItem value="newest">
                    {language === 'en' ? 'Newest' : 'الأحدث'}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden bg-card p-4 mb-6 rounded-lg border border-border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium flex items-center">
                  <SlidersHorizontal size={18} className="mr-2" />
                  {language === 'en' ? 'Filters' : 'فلترة'}
                </h3>
                <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                  <X size={18} />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={language === 'en' ? 'Search products...' : 'البحث عن منتجات...'}
                    className="pl-9"
                  />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">
                    {language === 'en' ? 'Categories' : 'الفئات'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`mobile-category-${idx}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label 
                          htmlFor={`mobile-category-${idx}`}
                          className="text-sm leading-none"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">
                    {language === 'en' ? 'Price Range' : 'نطاق السعر'}
                  </h4>
                  <Slider
                    defaultValue={[0, 3000]}
                    max={3000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">
                    {language === 'en' ? 'Availability' : 'التوفر'}
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="mobile-in-stock"
                        checked={inStock}
                        onCheckedChange={() => setInStock(!inStock)}
                      />
                      <label 
                        htmlFor="mobile-in-stock"
                        className="text-sm leading-none"
                      >
                        {language === 'en' ? 'In Stock Only' : 'المتوفر فقط'}
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="mobile-new-arrivals"
                        checked={isNew}
                        onCheckedChange={() => setIsNew(!isNew)}
                      />
                      <label 
                        htmlFor="mobile-new-arrivals"
                        className="text-sm leading-none"
                      >
                        {language === 'en' ? 'New Arrivals' : 'وصل حديثًا'}
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    {language === 'en' ? 'Clear All' : 'مسح الكل'}
                  </Button>
                  <Button size="sm" onClick={() => setShowFilters(false)}>
                    {language === 'en' ? 'Apply Filters' : 'تطبيق الفلاتر'}
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  onAddToCart={addToCart}
                  onAddToWishlist={addToWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">
                {language === 'en' ? 'No products found' : 'لم يتم العثور على منتجات'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'Try adjusting your filters or search terms' 
                  : 'حاول تعديل الفلاتر أو مصطلحات البحث الخاصة بك'}
              </p>
              <Button onClick={clearFilters}>
                {language === 'en' ? 'Clear Filters' : 'مسح الفلاتر'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
