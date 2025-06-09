import React from 'react';
import { 
  Monitor, 
  Shield, 
  Database, 
  Cloud, 
  Settings, 
  Users,
  BarChart3,
  Smartphone,
  Zap,
  Target
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Консультації з інформатизації',
      description: 'Професійні консультації щодо впровадження інформаційних систем та оптимізації ІТ-процесів у вашому бізнесі.',
      features: ['Аналіз потреб', 'Стратегія розвитку', 'Планування впровадження'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Database,
      title: 'Управління базами даних',
      description: 'Проектування, оптимізація та адміністрування баз даних для забезпечення максимальної продуктивності.',
      features: ['Проектування БД', 'Оптимізація запитів', 'Резервне копіювання'],
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Cloud,
      title: 'Хмарні технології',
      description: 'Міграція в хмару, налаштування хмарної інфраструктури та оптимізація витрат на ІТ-ресурси.',
      features: ['Міграція в хмару', 'Налаштування інфраструктури', 'Оптимізація витрат'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Shield,
      title: 'Інформаційна безпека',
      description: 'Аудит безпеки, розробка політик захисту інформації та впровадження систем кібербезпеки.',
      features: ['Аудит безпеки', 'Політики захисту', 'Моніторинг загроз'],
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Settings,
      title: 'Системна інтеграція',
      description: 'Інтеграція різних інформаційних систем для створення єдиного інформаційного простору компанії.',
      features: ['API інтеграція', 'Синхронізація даних', 'Автоматизація процесів'],
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: BarChart3,
      title: 'Аналітика та звітність',
      description: 'Впровадження систем бізнес-аналітики для прийняття обґрунтованих управлінських рішень.',
      features: ['Business Intelligence', 'Дашборди', 'Автоматизовані звіти'],
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Мої послуги
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Професійні ІТ-рішення
            <span className="block text-blue-700">для вашого бізнесу</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Надаю повний спектр послуг з інформатизації та розвитку ІТ-систем 
            відповідно до КВЕД 62.02 та 62.09
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden relative"
              >
                {/* Service image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Дізнатися більше
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Готові розпочати проект?</h3>
            <p className="text-blue-100 mb-6">Зв'яжіться зі мною для безкоштовної консультації</p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Замовити консультацію
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;