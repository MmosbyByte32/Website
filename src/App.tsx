import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, Users, Monitor, Cpu, MapPin, Phone, Mail, ChevronRight, Star, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    {
      title: "In-Class Tutoring",
      description: "Focused, small-group sessions in core subjects like Mathematics, English, and Sciences.",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      image: "https://picsum.photos/seed/tutoring1/600/400"
    },
    {
      title: "Outdoor Learning",
      description: "Engaging activities outside the classroom to build teamwork and practical skills.",
      icon: <Users className="w-6 h-6 text-green-600" />,
      image: "https://picsum.photos/seed/tutoring2/600/400"
    },
    {
      title: "Online Portal",
      description: "Access to our comprehensive online learning platform for continued study at home.",
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
      image: "https://picsum.photos/seed/tutoring3/600/400"
    },
    {
      title: "Robotics & Coding",
      description: "Future-ready skills with hands-on robotics kits and programming lessons.",
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      image: "https://picsum.photos/seed/tutoring4/600/400"
    }
  ];

  const gallery = [
    "https://picsum.photos/seed/gallery1/800/600",
    "https://picsum.photos/seed/gallery2/800/600",
    "https://picsum.photos/seed/gallery3/800/600",
    "https://picsum.photos/seed/gallery4/800/600",
    "https://picsum.photos/seed/gallery5/800/600",
    "https://picsum.photos/seed/gallery6/800/600",
  ];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-orange-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                K
              </div>
              <span className="font-bold text-xl tracking-tight text-neutral-900">
                Kitso Ke Bokamoso
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-orange-500 transition-colors">About</a>
              <a href="#programs" className="text-sm font-medium text-neutral-600 hover:text-orange-500 transition-colors">Programs</a>
              <a href="#achievements" className="text-sm font-medium text-neutral-600 hover:text-orange-500 transition-colors">Achievements</a>
              <a href="#gallery" className="text-sm font-medium text-neutral-600 hover:text-orange-500 transition-colors">Gallery</a>
              <a href="#contact" className="px-5 py-2.5 bg-orange-500 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-all shadow-sm hover:shadow-md">
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-4 space-y-1 shadow-lg"
          >
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50">About</a>
            <a href="#programs" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50">Programs</a>
            <a href="#achievements" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50">Achievements</a>
            <a href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-orange-500 hover:bg-orange-50">Gallery</a>
            <a href="#contact" className="block mt-4 px-3 py-3 text-center bg-orange-500 text-white text-base font-medium rounded-lg hover:bg-orange-600">
              Enroll Now
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 opacity-90"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold tracking-wide mb-6">
                Educational Center
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-8 leading-tight">
                Empowering Minds, <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  Shaping the Future
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
                Kitso Ke Bokamoso provides top-tier tutoring inside and outside the classroom. From core subjects to robotics and coding, we nurture excellence in every student.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Start Learning Today <ChevronRight className="w-5 h-5" />
                </a>
                <a href="#programs" className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-700 text-lg font-medium rounded-full hover:bg-neutral-50 border border-neutral-200 transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                  Explore Programs
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Comprehensive Learning</h2>
            <p className="text-lg text-neutral-600">We offer a holistic approach to education, combining traditional classroom tutoring with modern technology and outdoor activities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden border border-neutral-100 bg-neutral-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -mt-14 relative z-10">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">{program.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Celebrating <br/><span className="text-yellow-400">Excellence</span></h2>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Our students consistently achieve top positions, gold awards, and distinctions. We are proud of their hard work and dedication to academic excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Top Achievers</h4>
                    <p className="text-neutral-400">Consistent position 1 rankings in primary and secondary education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Distinctions</h4>
                    <p className="text-neutral-400">Outstanding results in English, Afrikaans, Mathematics, and Life Skills.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-neutral-800 border border-neutral-700 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/certificate/600/800" 
                  alt="Student Certificate" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl shadow-inner"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl border-4 border-neutral-900">
                  <div className="text-center">
                    <span className="block text-3xl font-black text-neutral-900">1st</span>
                    <span className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">Position</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Life at Kitso Ke Bokamoso</h2>
              <p className="text-lg text-neutral-600">Glimpses of our vibrant learning environment, from focused classroom sessions to interactive outdoor activities.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery image ${index + 1}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover aspect-square md:aspect-auto hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join us?</h2>
                <p className="text-orange-100 text-lg mb-10">
                  Enroll your child today and give them the educational foundation they deserve. Our Saturday classes and weekday tutoring sessions are open for registration.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-orange-100">Saturday classes taking place in town</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-orange-100">+27 (0) 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-orange-100">info@kitsokebokamoso.co.za</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900 p-10 md:p-16">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Parent's Name</label>
                    <input type="text" id="name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-neutral-400 mb-2">Student's Grade</label>
                    <select id="grade" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                      <option>Primary School (Grades 1-7)</option>
                      <option>High School (Grades 8-12)</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Kitso Ke Bokamoso
            </span>
          </div>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Educational Center dedicated to empowering minds and shaping the future through quality tutoring.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} Kitso Ke Bokamoso Educational Center. All rights reserved.
          </p>
          <p className="text-neutral-700 text-xs mt-4 max-w-xl mx-auto">
            Note: The images used on this website are placeholders. Please replace them with your actual photos from the center.
          </p>
        </div>
      </footer>
    </div>
  );
}
