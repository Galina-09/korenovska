import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles, Code, Database } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Консультації з інформатизації",
    "ІТ-рішення для бізнесу",
    "Цифрова трансформація"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-1/4 left-1/4 h-8 w-8 text-blue-300/30 animate-bounce delay-300" />
        <Database className="absolute top-1/3 right-1/4 h-6 w-6 text-purple-300/30 animate-bounce delay-700" />
        <Sparkles className="absolute bottom-1/3 left-1/3 h-10 w-10 text-pink-300/30 animate-bounce delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                ФОП Кореновська Софія Олександрівна
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Професійні
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  {texts[currentText]}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Допомагаю бізнесу впроваджувати сучасні ІТ-рішення та оптимізувати 
                інформаційні процеси для досягнення максимальної ефективності
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-lg hover:shadow-xl">
                Замовити консультацію
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Дізнатися більше
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-blue-100">КВЕД 62.02</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-blue-100">КВЕД 62.09</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-500/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-blue-100">м. Вінниця</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main image placeholder with modern design */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional IT Consultant" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce">
                <div className="text-2xl font-bold text-blue-900">100+</div>
                <div className="text-sm text-gray-600">Проектів</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce delay-500">
                <div className="text-2xl font-bold text-purple-900">24/7</div>
                <div className="text-sm text-gray-600">Підтримка</div>
              </div>
            </div>

            {/* Technology icons floating around */}
            <div className="absolute -top-8 right-8 bg-blue-500/20 p-3 rounded-full animate-pulse">
              <Code className="h-6 w-6 text-blue-300" />
            </div>
            <div className="absolute -bottom-8 left-8 bg-purple-500/20 p-3 rounded-full animate-pulse delay-1000">
              <Database className="h-6 w-6 text-purple-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;