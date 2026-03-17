import React from 'react';
import { motion } from 'motion/react';
import { Shield, ThermometerSnowflake, Zap, Award, CheckCircle2, Star, ChevronRight, Settings, Droplet, Gauge, Flame, Truck, Car, User, Quote, Gift, Wrench } from 'lucide-react';

const products = [
  {
    series: "ECO ELITE",
    viscosity: "0W-20",
    tech: "ThermaFlow Technology",
    desc: "Fuel Economy & Fast Heat Dissipation Formula",
    size: "4L",
    api: "API SP",
    acea: "",
    color: "from-emerald-500/20 to-emerald-900/20",
    accent: "text-emerald-400",
    ratings: [
      { label: "Heat Dissipation", value: 5 },
      { label: "Fuel Economy", value: 5 },
      { label: "Engine Protection", value: 5 },
      { label: "Cold Start", value: 5 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "EURO ELITE",
    viscosity: "5W-30",
    tech: "ThermaFlow Technology",
    desc: "Fast Heat Dissipation Formula",
    size: "4L",
    api: "API SP",
    acea: "ACEA C5/C6",
    color: "from-blue-500/20 to-blue-900/20",
    accent: "text-blue-400",
    ratings: [
      { label: "Heat Dissipation", value: 5 },
      { label: "Performance", value: 5 },
      { label: "Engine Protection", value: 5 },
      { label: "Fuel Economy", value: 4 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "EURO ELITE",
    viscosity: "5W-40",
    tech: "ThermaFlow Technology",
    desc: "Fast Heat Dissipation Formula",
    size: "4L",
    api: "API SP",
    acea: "ACEA C3",
    color: "from-indigo-500/20 to-indigo-900/20",
    accent: "text-indigo-400",
    ratings: [
      { label: "Heat Dissipation", value: 5 },
      { label: "High Temp Stability", value: 5 },
      { label: "Engine Protection", value: 5 },
      { label: "Performance", value: 5 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "ELITE DRIVE",
    viscosity: "10W-40",
    tech: "ThermaFlow Technology",
    desc: "Smooth Response & Stable Protection Formula",
    size: "4L",
    api: "API SN",
    acea: "",
    color: "from-zinc-500/20 to-zinc-900/20",
    accent: "text-zinc-300",
    ratings: [
      { label: "Heat Dissipation", value: 4 },
      { label: "Smooth Response", value: 5 },
      { label: "Engine Protection", value: 5 },
      { label: "Stability", value: 4 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "VELONZA DIESEL",
    viscosity: "10W-40",
    tech: "TorqueBoost Technology",
    desc: "Improved Low-End Torque & Heavy Duty Diesel Protection",
    size: "4L & 7L",
    api: "API CK-4",
    acea: "",
    color: "from-amber-500/20 to-amber-900/20",
    accent: "text-amber-400",
    ratings: [
      { label: "Low-End Torque", value: 5 },
      { label: "Heavy Duty Protection", value: 5 },
      { label: "Heat Dissipation", value: 4 },
      { label: "Soot Control", value: 5 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "VELONZA DIESEL",
    viscosity: "15W-40",
    tech: "TorqueBoost Technology",
    desc: "Heavy Duty Load Protection Formula",
    size: "4L & 7L",
    api: "API CI-4",
    acea: "",
    color: "from-orange-500/20 to-orange-900/20",
    accent: "text-orange-400",
    ratings: [
      { label: "Load Protection", value: 5 },
      { label: "Low-End Torque", value: 5 },
      { label: "Wear Resistance", value: 5 },
      { label: "Heat Dissipation", value: 3 },
      { label: "Longevity", value: 5 },
    ]
  },
  {
    series: "CLASSIC ELITE",
    viscosity: "20W-50",
    tech: "PowerShield Technology",
    desc: "High Mileage Engine Protection",
    size: "4L",
    api: "API SN",
    acea: "",
    color: "from-red-500/20 to-red-900/20",
    accent: "text-red-400",
    ratings: [
      { label: "High Mileage Protection", value: 5 },
      { label: "Seal Conditioning", value: 5 },
      { label: "Oil Consumption Control", value: 4 },
      { label: "Heat Dissipation", value: 3 },
      { label: "Longevity", value: 5 },
    ]
  }
];

const testimonials = [
  {
    name: "Ahmad R.",
    role: "Full-time Grab Driver",
    icon: Car,
    quote: "Driving across states and in heavy traffic used to make my engine run extremely hot. Since switching to Assenzol's ThermaFlow technology, the temperature stays stable, and the engine feels much smoother even after 12 hours on the road. Truly a lifesaver for high-mileage drivers."
  },
  {
    name: "Sarah L.",
    role: "Top Property Sales Agent",
    icon: User,
    quote: "I do a lot of frequent short trips and highway driving to meet clients. I needed an oil that protects my continental car from premature wear. Assenzol gives me the peace of mind that my engine is protected, allowing me to focus on my sales."
  },
  {
    name: "Muthu K.",
    role: "Logistic Truck Operator",
    icon: Truck,
    quote: "Heavy loads take a toll on our diesel engines. The Velonza Diesel with TorqueBoost is incredible. I can feel the improved low-end torque when pulling heavy cargo uphill, and the engine runs cooler than before."
  }
];

const StarRating: React.FC<{ label: string, rating: number }> = ({ label, rating }) => (
  <div className="flex items-center justify-between text-xs mb-1.5">
    <span className="text-zinc-400 uppercase tracking-wider">{label}</span>
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3 h-3 ${star <= rating ? 'fill-amber-500 text-amber-500' : 'fill-zinc-800 text-zinc-800'}`}
        />
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold tracking-widest uppercase">Assenzol</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-zinc-400">
            <a href="#technology" className="hover:text-white transition-colors">Technology</a>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#story" className="hover:text-white transition-colors">Brand Story</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2525&auto=format&fit=crop" 
            alt="Engine background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
              <Flame className="w-4 h-4" />
              Engine Longevity Technology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
              The Ultimate Protection <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-200">
                For The Extreme Heat Load Era
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Assenzol is the only engine longevity lubricant brand in Malaysia designed for high-frequency, ultra-long-distance driving. Completely bid farewell to engine overheating and achieve million-kilometer lasting protection.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#products" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors flex items-center gap-2">
                Explore Products <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#technology" className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest">
                Discover ThermaFlow
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Declaration & Story */}
      <section id="story" className="py-24 bg-zinc-950 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                Born From Engineering Precision. <br/>
                <span className="text-zinc-500">Built For Longevity.</span>
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Most long-distance drivers and high-mileage owners worry about premature engine wear and expensive repairs caused by long-term high temperatures. 
                </p>
                <p>
                  Founded by a Mechanical Engineer who understood that proper lubrication is the key to mechanical longevity, we leverage our 24-year professional lubricant manufacturing background since 2002.
                </p>
                <p>
                  Using our core extreme heat dissipation technology, we help drivers achieve the perfect balance of engine temperature and power. Extend engine life and become the most trusted long-distance power partner for car owners.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 bg-black border border-white/5 rounded-2xl">
                <Settings className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold uppercase tracking-wider mb-2">24 Years OEM</h3>
                <p className="text-sm text-zinc-500">Professional lubricant manufacturer since 2002.</p>
              </div>
              <div className="p-6 bg-black border border-white/5 rounded-2xl">
                <ThermometerSnowflake className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold uppercase tracking-wider mb-2">ASTM Certified</h3>
                <p className="text-sm text-zinc-500">Lab tested with +-0.01 data accuracy for ultimate precision.</p>
              </div>
              <div className="p-6 bg-black border border-white/5 rounded-2xl">
                <Droplet className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold uppercase tracking-wider mb-2">Premium Additives</h3>
                <p className="text-sm text-zinc-500">Imported from US and Germany, small batch blended.</p>
              </div>
              <div className="p-6 bg-black border border-white/5 rounded-2xl">
                <Wrench className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold uppercase tracking-wider mb-2">Workshop Partner</h3>
                <p className="text-sm text-zinc-500">Standing firmly on the side of car owners and workshops.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section id="technology" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-4">Core Innovation</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">The Science of Longevity</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
              <ThermometerSnowflake className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
              <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 relative z-10">ThermaFlow<br/>Technology</h4>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Ultra-high purity base oil with uniform molecular structure. During heavy acceleration, heat conductivity pulls heat out of the engine. When slowing down or shutting off, the oil cools rapidly, preventing heat soak and ensuring fast heat dissipation.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
              <Zap className="w-12 h-12 text-amber-400 mb-6 relative z-10" />
              <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 relative z-10">TorqueBoost<br/>Technology</h4>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Engineered specifically for heavy-duty diesel engines. Increases low-end torque for better pulling power while maintaining exceptional heat dissipation under extreme loads.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50" />
              <Shield className="w-12 h-12 text-red-400 mb-6 relative z-10" />
              <h4 className="text-2xl font-bold uppercase tracking-wider mb-4 relative z-10">PowerShield<br/>Technology</h4>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Designed for high mileage engines. Conditions seals, reduces oil consumption, and provides a thick protective film to prevent metal-to-metal contact in older engines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-4">Our Lineup</h2>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Engineered For<br/>Every Need</h3>
            </div>
            <p className="text-zinc-400 max-w-md text-sm">
              From high-performance continental cars to heavy-duty logistic trucks, Assenzol provides the precise formulation required for maximum engine longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${product.color}`} />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-wider">{product.series}</h4>
                      <p className={`text-3xl font-black tracking-tighter mt-1 ${product.accent}`}>{product.viscosity}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs font-bold tracking-wider text-zinc-300 mb-1">{product.size}</span>
                      <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{product.api}</div>
                      {product.acea && <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">{product.acea}</div>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      <Gauge className="w-3.5 h-3.5" /> {product.tech}
                    </div>
                    <p className="text-sm text-zinc-400 leading-snug">{product.desc}</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="space-y-1">
                      {product.ratings.map((rating, i) => (
                        <StarRating key={i} label={rating.label} rating={rating.value} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 tracking-widest uppercase mb-4">Trusted By Professionals</h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Real World Performance</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => {
              const Icon = testimonial.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl backdrop-blur-sm"
                >
                  <Quote className="w-10 h-10 text-amber-500/20 mb-6" />
                  <p className="text-zinc-300 leading-relaxed mb-8 text-sm italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Droplet className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold tracking-widest uppercase">Assenzol</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md mb-8">
                The leading brand in Engine Longevity Technology in Malaysia. We are the automotive lubricant specialist standing firmly on the side of car owners and workshops.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 rounded-lg border border-white/5">
                <Gift className="w-5 h-5 text-amber-500" />
                <div className="text-xs">
                  <span className="block text-zinc-300 font-bold uppercase tracking-wider">Seasonal Gifts Available</span>
                  <span className="text-zinc-500 italic">"We are smart car owners, car lovers"</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li><a href="#technology" className="hover:text-amber-500 transition-colors">ThermaFlow Technology</a></li>
                <li><a href="#products" className="hover:text-amber-500 transition-colors">Product Lineup</a></li>
                <li><a href="#story" className="hover:text-amber-500 transition-colors">Our 24-Year Heritage</a></li>
                <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Driver Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li>Malaysia HQ</li>
                <li>info@assenzol.com.my</li>
                <li>1-800-ASSENZOL</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Assenzol Lubricants. All rights reserved.</p>
            <p>Engine Longevity Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

