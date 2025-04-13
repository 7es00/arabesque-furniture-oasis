
export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  category: {
    en: string;
    ar: string;
  };
  images: string[];
  inStock: boolean;
  featured: boolean;
  isNew: boolean;
  colors: string[];
  materials: {
    en: string[];
    ar: string[];
  };
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: {
      en: 'Arabesque Lounge Chair',
      ar: 'كرسي استرخاء أرابيسك'
    },
    description: {
      en: 'Elegant lounge chair with arabesque patterns and solid wood frame. Perfect for your living room or reading nook.',
      ar: 'كرسي استرخاء أنيق مع نقوش أرابيسك وإطار من الخشب الصلب. مثالي لغرفة المعيشة أو ركن القراءة.'
    },
    price: 799,
    category: {
      en: 'Chairs',
      ar: 'كراسي'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true,
    featured: true,
    isNew: true,
    colors: ['#8E2C48', '#3D405B', '#F4F1DE'],
    materials: {
      en: ['Oak wood', 'Premium fabric', 'Brass details'],
      ar: ['خشب البلوط', 'قماش فاخر', 'تفاصيل نحاسية']
    },
    dimensions: {
      width: 75,
      height: 85,
      depth: 80,
      unit: 'cm'
    }
  },
  {
    id: '2',
    name: {
      en: 'Marrakech Coffee Table',
      ar: 'طاولة قهوة مراكش'
    },
    description: {
      en: 'Beautiful coffee table with intricate inlay work inspired by traditional Moroccan design.',
      ar: 'طاولة قهوة جميلة مع عمل تطعيم معقد مستوحى من التصميم المغربي التقليدي.'
    },
    price: 1299,
    category: {
      en: 'Tables',
      ar: 'طاولات'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true,
    featured: true,
    isNew: false,
    colors: ['#81B29A', '#F2CC8F'],
    materials: {
      en: ['Walnut wood', 'Marble top', 'Brass inlay'],
      ar: ['خشب الجوز', 'سطح رخامي', 'تطعيم نحاسي']
    },
    dimensions: {
      width: 120,
      height: 45,
      depth: 75,
      unit: 'cm'
    }
  },
  {
    id: '3',
    name: {
      en: 'Cairo Dining Set',
      ar: 'طقم طعام القاهرة'
    },
    description: {
      en: 'Exquisite dining set with six chairs and a table. Features geometric patterns inspired by Islamic art.',
      ar: 'طقم طعام راقي مع ستة كراسي وطاولة. يتميز بأنماط هندسية مستوحاة من الفن الإسلامي.'
    },
    price: 2499,
    category: {
      en: 'Dining',
      ar: 'أطقم طعام'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true,
    featured: true,
    isNew: true,
    colors: ['#3D405B', '#E07A5F'],
    materials: {
      en: ['Acacia wood', 'Metal details', 'Tempered glass'],
      ar: ['خشب الأكاسيا', 'تفاصيل معدنية', 'زجاج مقسى']
    },
    dimensions: {
      width: 180,
      height: 75,
      depth: 90,
      unit: 'cm'
    }
  },
  {
    id: '4',
    name: {
      en: 'Damascus Bed Frame',
      ar: 'إطار سرير دمشق'
    },
    description: {
      en: 'Luxurious king-size bed frame with intricate damascene patterns. The headboard features traditional woodworking techniques.',
      ar: 'إطار سرير فاخر بحجم كينغ مع أنماط دمشقية معقدة. تتميز لوحة الرأس بتقنيات النجارة التقليدية.'
    },
    price: 1899,
    category: {
      en: 'Bedroom',
      ar: 'غرفة النوم'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: false,
    featured: false,
    isNew: false,
    colors: ['#8E2C48', '#F4F1DE'],
    materials: {
      en: ['Mahogany', 'Velvet upholstery', 'Metal accents'],
      ar: ['خشب الماهوجني', 'تنجيد مخملي', 'لمسات معدنية']
    },
    dimensions: {
      width: 200,
      height: 120,
      depth: 210,
      unit: 'cm'
    }
  },
  {
    id: '5',
    name: {
      en: 'Fez Bookshelf',
      ar: 'رف كتب فاس'
    },
    description: {
      en: 'Elegant bookshelf with geometric patterns inspired by Moroccan architecture. Features adjustable shelves and ample storage.',
      ar: 'رف كتب أنيق بأنماط هندسية مستوحاة من العمارة المغربية. يتميز بأرفف قابلة للتعديل ومساحة تخزين واسعة.'
    },
    price: 1499,
    category: {
      en: 'Storage',
      ar: 'تخزين'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true,
    featured: true,
    isNew: false,
    colors: ['#3D405B', '#81B29A'],
    materials: {
      en: ['Oak wood', 'Metal framework', 'Glass shelves'],
      ar: ['خشب البلوط', 'هيكل معدني', 'أرفف زجاجية']
    },
    dimensions: {
      width: 120,
      height: 200,
      depth: 40,
      unit: 'cm'
    }
  },
  {
    id: '6',
    name: {
      en: 'Sahara Outdoor Set',
      ar: 'طقم خارجي صحراء'
    },
    description: {
      en: 'Weather-resistant outdoor furniture set with Middle Eastern design elements. Includes sofa, two chairs, and coffee table.',
      ar: 'مجموعة أثاث خارجي مقاومة للطقس مع عناصر تصميم شرق أوسطية. تشمل أريكة وكرسيين وطاولة قهوة.'
    },
    price: 2299,
    category: {
      en: 'Outdoor',
      ar: 'أثاث خارجي'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    inStock: true,
    featured: false,
    isNew: true,
    colors: ['#F2CC8F', '#81B29A'],
    materials: {
      en: ['Teak wood', 'All-weather fabric', 'Stainless steel'],
      ar: ['خشب الساج', 'قماش مقاوم للعوامل الجوية', 'فولاذ مقاوم للصدأ']
    },
    dimensions: {
      width: 250,
      height: 75,
      depth: 200,
      unit: 'cm'
    }
  }
];
