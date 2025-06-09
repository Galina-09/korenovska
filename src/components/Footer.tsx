import React from 'react';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sofia IT
              </span>
              <p className="text-sm text-gray-300 mt-2">ФОП Кореновська Софія Олександрівна</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Професійні ІТ-консультації та розробка інноваційних рішень для вашого бізнесу. 
              Індивідуальний підхід до кожного проекту.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300">Послуги</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <Code className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Консультації з інформатизації
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Управління базами даних</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Хмарні технології</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Інформаційна безпека</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Системна інтеграція</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Аналітика та звітність</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300">Швидкі посилання</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Головна</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Послуги</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Про мене</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Портфоліо</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-300">Контакти</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">
                  м. Вінниця<br />
                  вул. Немченка Олександра 17А
                </span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+380934192011" className="text-sm hover:text-blue-400 transition-colors">
                  +380 93 419 20 11
                </a>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:sofi.korenovska@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
                  sofi.korenovska@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="font-semibold text-blue-400 mb-2 flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Працюю з любов'ю
              </h4>
              <p className="text-sm text-gray-300">
                Кожен проект - це можливість створити щось особливе для вашого бізнесу
              </p>
            </div>
          </div>
        </div>

        {/* KVED codes */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="font-semibold text-blue-400 mb-4 text-center">Коди КВЕД</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="text-center">
                <span className="font-semibold text-blue-300">62.02</span> - Консультація з питань інформатизації
              </div>
              <div className="text-center">
                <span className="font-semibold text-blue-300">62.09</span> - Інша діяльність у сфері інформаційних технологій
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ФОП Кореновська Софія Олександрівна. Всі права захищено.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Політика конфіденційності</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Умови співпраці</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Договір оферти</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;