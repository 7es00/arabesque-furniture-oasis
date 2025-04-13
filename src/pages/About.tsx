
import React from 'react';
import { useAppContext } from '@/context/AppContext';

const AboutPage: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-furniture-navy text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-furniture-navy to-furniture-burgundy opacity-90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              {language === 'en' 
                ? 'Our Story' 
                : 'قصتنا'}
            </h1>
            <p className="text-lg opacity-90">
              {language === 'en' 
                ? 'Bringing Middle Eastern artistry to modern homes across the world.' 
                : 'نقدم فن الشرق الأوسط إلى المنازل العصرية في جميع أنحاء العالم.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                {language === 'en' 
                  ? 'How It All Began' 
                  : 'كيف بدأ كل شيء'}
              </h2>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'Arabesque Furniture was founded in 2010 by a group of designers with a shared passion for Middle Eastern art and craftsmanship. Our journey began in a small workshop in Dubai, where we created bespoke furniture pieces that combined traditional arabesque patterns with contemporary design sensibilities.' 
                  : 'تأسست شركة أرابيسك للأثاث في عام 2010 على يد مجموعة من المصممين الذين يشتركون في شغفهم بالفن والحرفية في الشرق الأوسط. بدأت رحلتنا في ورشة صغيرة في دبي، حيث أنشأنا قطع أثاث مصممة خصيصًا تجمع بين أنماط الأرابيسك التقليدية وأحاسيس التصميم المعاصرة.'}
              </p>
              <p className="text-muted-foreground mb-4">
                {language === 'en' 
                  ? 'What started as a small operation quickly grew as people fell in love with our unique aesthetic. Today, we work with master craftspeople across the Middle East and North Africa to create furniture that honors traditional techniques while meeting the needs of modern living.' 
                  : 'ما بدأ كعملية صغيرة نمت بسرعة عندما وقع الناس في حب جمالياتنا الفريدة. اليوم، نعمل مع حرفيين رئيسيين في جميع أنحاء الشرق الأوسط وشمال إفريقيا لإنشاء أثاث يحترم التقنيات التقليدية مع تلبية احتياجات الحياة العصرية.'}
              </p>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Each piece in our collection tells a story—of ancient design traditions, of skilled hands that shape wood and metal, and of the cultural heritage that inspires us every day.' 
                  : 'كل قطعة في مجموعتنا تروي قصة - عن تقاليد التصميم القديمة، والأيدي الماهرة التي تشكل الخشب والمعدن، والتراث الثقافي الذي يلهمنا كل يوم.'}
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt={language === 'en' ? 'Arabesque Workshop' : 'ورشة أرابيسك'} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            {language === 'en' ? 'Our Values' : 'قيمنا'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: language === 'en' ? 'Craftsmanship' : 'الحرفية',
                description: language === 'en' 
                  ? 'We believe in the value of handcrafted furniture, made with care and attention to detail. Each piece is created by skilled artisans using traditional techniques passed down through generations.' 
                  : 'نؤمن بقيمة الأثاث المصنوع يدويًا، والمصنوع بعناية واهتمام بالتفاصيل. يتم إنشاء كل قطعة من قبل حرفيين مهرة باستخدام تقنيات تقليدية تم تناقلها عبر الأجيال.'
              },
              {
                title: language === 'en' ? 'Cultural Heritage' : 'التراث الثقافي',
                description: language === 'en' 
                  ? 'We draw inspiration from the rich artistic traditions of the Middle East and North Africa, preserving and celebrating these cultural legacies through contemporary design.' 
                  : 'نستمد الإلهام من التقاليد الفنية الغنية للشرق الأوسط وشمال إفريقيا، ونحافظ على هذه الموروثات الثقافية ونحتفل بها من خلال التصميم المعاصر.'
              },
              {
                title: language === 'en' ? 'Sustainability' : 'الاستدامة',
                description: language === 'en' 
                  ? 'We are committed to environmentally responsible practices, from sourcing sustainable materials to minimizing waste in our production processes and creating furniture built to last generations.' 
                  : 'نحن ملتزمون بالممارسات المسؤولة بيئيًا، من مصادر المواد المستدامة إلى تقليل النفايات في عمليات الإنتاج لدينا وإنشاء أثاث مبني ليدوم لأجيال.'
              },
              {
                title: language === 'en' ? 'Quality' : 'الجودة',
                description: language === 'en' 
                  ? 'We never compromise on quality. From the selection of materials to the final finishing touches, every step of our production process is held to the highest standards.' 
                  : 'نحن لا نساوم أبدًا على الجودة. من اختيار المواد إلى اللمسات النهائية، كل خطوة من عمليات الإنتاج لدينا تخضع لأعلى المعايير.'
              },
              {
                title: language === 'en' ? 'Innovation' : 'الابتكار',
                description: language === 'en' 
                  ? 'While we honor traditional techniques, we also embrace innovation. We continuously explore new methods, materials, and technologies to enhance our furniture's quality and sustainability.' 
                  : 'بينما نكرم التقنيات التقليدية، فإننا نتبنى أيضًا الابتكار. نستكشف باستمرار طرقًا ومواد وتقنيات جديدة لتعزيز جودة واستدامة أثاثنا.'
              },
              {
                title: language === 'en' ? 'Community' : 'المجتمع',
                description: language === 'en' 
                  ? 'We support the communities where our artisans live and work. Through fair trade practices and skills training, we help preserve traditional crafts and provide sustainable livelihoods.' 
                  : 'نحن ندعم المجتمعات التي يعيش ويعمل فيها حرفيونا. من خلال ممارسات التجارة العادلة والتدريب على المهارات، نساعد في الحفاظ على الحرف التقليدية وتوفير سبل عيش مستدامة.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            {language === 'en' ? 'Meet Our Team' : 'تعرف على فريقنا'}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: language === 'en' ? 'Layla Al-Mansouri' : 'ليلى المنصوري',
                title: language === 'en' ? 'Founder & Creative Director' : 'المؤسس والمدير الإبداعي',
                image: '/placeholder.svg'
              },
              {
                name: language === 'en' ? 'Omar Khalid' : 'عمر خالد',
                title: language === 'en' ? 'Head of Design' : 'رئيس التصميم',
                image: '/placeholder.svg'
              },
              {
                name: language === 'en' ? 'Nadia Rahman' : 'نادية رحمن',
                title: language === 'en' ? 'Master Craftsperson' : 'سيد الحرفيين',
                image: '/placeholder.svg'
              },
              {
                name: language === 'en' ? 'Hassan Al-Farsi' : 'حسن الفارسي',
                title: language === 'en' ? 'Materials Specialist' : 'أخصائي المواد',
                image: '/placeholder.svg'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-40 h-40">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
