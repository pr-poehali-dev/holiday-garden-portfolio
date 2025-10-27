import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const portfolioItems = [
    {
      image: "https://cdn.poehali.dev/files/f2717b00-4d3b-4b16-9003-4e47ce0c07c8.jpg",
      title: "Эксклюзивное оформление фасада",
      description: "Роскошная композиция с золотыми оленями и венками"
    },
    {
      image: "https://cdn.poehali.dev/projects/71636491-fa45-4661-af22-918e60704700/files/ab12e992-4444-4a36-a739-c6531c8cc588.jpg",
      title: "Праздничная иллюминация",
      description: "Премиальное освещение территории и фасада"
    },
    {
      image: "https://cdn.poehali.dev/projects/71636491-fa45-4661-af22-918e60704700/files/205fd347-93c0-4936-b91c-2994db7f7327.jpg",
      title: "Оформление сада",
      description: "Элегантный декор для открытых пространств"
    }
  ];

  const services = [
    {
      icon: "Home",
      title: "Оформление фасадов",
      description: "Эксклюзивные композиции с использованием премиальных материалов и декора",
      price: "от 150 000 ₽"
    },
    {
      icon: "Trees",
      title: "Декор садов и территорий",
      description: "Праздничное оформление ландшафта с иллюминацией",
      price: "от 200 000 ₽"
    },
    {
      icon: "Sparkles",
      title: "Интерьерное оформление",
      description: "Роскошные композиции для внутренних пространств",
      price: "от 100 000 ₽"
    },
    {
      icon: "Lightbulb",
      title: "Праздничная иллюминация",
      description: "Профессиональное световое оформление любой сложности",
      price: "от 80 000 ₽"
    }
  ];

  const process = [
    { step: "01", title: "Консультация", description: "Обсуждаем ваши пожелания и концепцию оформления" },
    { step: "02", title: "Дизайн-проект", description: "Создаём индивидуальный проект с визуализацией" },
    { step: "03", title: "Согласование", description: "Утверждаем все детали и материалы" },
    { step: "04", title: "Реализация", description: "Профессиональный монтаж под ключ" }
  ];

  const reviews = [
    {
      name: "Екатерина Волкова",
      text: "Великолепная работа! Наш дом преобразился до неузнаваемости. Каждая деталь продумана, качество материалов превосходное.",
      rating: 5
    },
    {
      name: "Александр Петров",
      text: "Профессиональный подход на всех этапах. Команда работала четко и аккуратно. Соседи в восторге от нашего оформления!",
      rating: 5
    },
    {
      name: "Мария Соколова",
      text: "Это настоящее волшебство! Территория выглядит как сказочный дворец. Спасибо за воплощение нашей мечты!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">✨ Новогодний Декор</div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Заказать звонок
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full border border-primary/30">
            <span className="text-primary text-sm font-medium">Премиальное оформление</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Создаём новогоднюю<br />
            <span className="text-primary">сказку</span> для вашего дома
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">Создаем уникальные композиции для максимального погружения в новогоднюю атмосферу.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              Смотреть портфолио
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">реализованных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — уникальное воплощение праздничной атмосферы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card border-primary/20">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по новогоднему оформлению
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-primary/20 group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Процесс работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачная схема сотрудничества на каждом этапе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="text-7xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют самые взыскательные заказчики
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-card border-primary/20">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div className="font-semibold text-foreground">{review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card className="p-8 bg-card border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                <Input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Введите ваше имя"
                  className="bg-input border-primary/30"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                <Input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-input border-primary/30"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Расскажите о вашем проекте"
                  className="min-h-32 bg-input border-primary/30"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">+7 (995) 388-31-77</div>
              <div className="text-sm text-muted-foreground">Ежедневно 9:00 — 21:00</div>
            </div>
            <div>
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">artem_1122@bk.ru</div>
              <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">Москва и МО</div>
              <div className="text-sm text-muted-foreground"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Новогодний Декор. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;