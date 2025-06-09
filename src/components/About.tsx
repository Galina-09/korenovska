import React from 'react';
import { Award, Target, Users, TrendingUp, BookOpen, Briefcase, Heart, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Років досвіду', icon: Award },
    { number: '100+', label: 'Завершених проектів', icon: Target },
    { number: '50+', label: 'Задоволених клієнтів', icon: Users },
    { number: '99%', label: 'Успішних впроваджень', icon: TrendingUp }
  ];

  const achievements = [
    {
      icon: BookOpen,
      title: 'Освіта та кваліфікація',
      description: 'Вища технічна освіта, постійне підвищення кваліфікації в галузі ІТ'
    },
    {
      icon: Briefcase,
      title: 'Професійний досвід',
      description: 'Багаторічний досвід роботи з різними типами бізнесу та галузями'
    },
    {
      icon: Heart,
      title: 'Індивідуальний підхід',
      description: 'Кожен проект розглядаю як унікальний виклик з персональним рішенням'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                <Star className="h-4 w-4 mr-2" />
                Про мене
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Софія Кореновська
                <span className="block text-blue-700 text-2xl font-normal mt-2">
                  ФОП • ІТ-консультант
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привіт! Я Софія, професійний ІТ-консультант з Вінниці. Спеціалізуюся на 
                консультаціях з питань інформатизації та розробці ІТ-рішень для бізнесу. 
                Моя мета - допомогти вашій компанії ефективно використовувати сучасні технології.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Працюю за кодами КВЕД 62.02 (Консультація з питань інформатизації) та 62.09 
                (Інша діяльність у сфері інформаційних технологій і комп'ютерних систем). 
                Кожен проект для мене - це можливість створити щось унікальне та корисне.
              </p>
            </div>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start group">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{achievement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Profile image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Софія Кореновська - ІТ консультант"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">ТОП</div>
                    <div className="text-sm text-gray-600">Консультант</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Мої досягнення</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Values */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-6 text-xl">Мої принципи роботи</h4>
              <div className="space-y-4">
                {[
                  'Якість понад усе',
                  'Індивідуальний підхід до кожного клієнта',
                  'Прозорість у роботі та ціноутворенні',
                  'Постійний розвиток та навчання'
                ].map((principle, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                    <span className="text-gray-700 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;