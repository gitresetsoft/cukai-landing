
import React, { useEffect, useState } from "react";
import { FileText, CircleDollarSign, SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistDialog from "@/components/WaitlistDialog";
import FeatureCard from "@/components/FeatureCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 glass-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                MyCukai
              </span>
            </div>
            <WaitlistDialog>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-2xl px-6 py-2 transform hover:scale-105 transition-all duration-300">
                Join Waitlist 🚀
              </Button>
            </WaitlistDialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 pt-20 pb-32">
        <div className="container mx-auto px-6 text-center">
          <div 
            className="transform transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tax Management
              </span>
              <br />
              <span className="text-white">
                Reimagined 🌟
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Welcome to the future of income tax management. MyCukai leverages cutting-edge technology 
              to transform your receipts into powerful insights with AI-driven categorization and blockchain-level security.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <WaitlistDialog>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-lg font-bold py-4 px-8 rounded-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  Join the Revolution 🚀
                </Button>
              </WaitlistDialog>
              <Button variant="outline" className="glass border-2 border-cyan-500/50 text-white hover:bg-cyan-500/20 text-lg font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
                Watch Demo ▶️
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="glass-dark rounded-3xl p-8 border border-cyan-500/30 transform hover:scale-105 transition-all duration-300">
                <AnimatedCounter end={98} suffix="%" />
                <p className="text-white/70 mt-2">Accuracy Rate</p>
              </div>
              <div className="glass-dark rounded-3xl p-8 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
                <AnimatedCounter end={10000} suffix="+" />
                <p className="text-white/70 mt-2">Users Waiting</p>
              </div>
              <div className="glass-dark rounded-3xl p-8 border border-pink-500/30 transform hover:scale-105 transition-all duration-300">
                <AnimatedCounter end={2} suffix="min" />
                <p className="text-white/70 mt-2">Setup Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-40 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the next generation of tax management with AI-powered insights and seamless automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FileText}
              title="Smart Receipt Scanning"
              description="AI-powered OCR technology instantly extracts and categorizes data from your receipts with 99% accuracy. Say goodbye to manual entry forever."
              gradient="from-cyan-500 to-blue-600"
            />
            <FeatureCard
              icon={CircleDollarSign}
              title="Real-time Tax Insights"
              description="Get instant insights into your tax obligations with our advanced analytics engine. Make informed decisions with predictive tax calculations."
              gradient="from-purple-500 to-pink-600"
            />
            <FeatureCard
              icon={SquarePlus}
              title="Seamless Integration"
              description="Connect with your existing accounting software and banking systems. One platform to rule them all with enterprise-grade security."
              gradient="from-green-500 to-cyan-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-dark rounded-3xl p-16 border-2 border-gradient-to-r from-cyan-500/30 to-purple-500/30 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Tax Game?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking individuals who are already revolutionizing their tax management. 
              Be part of the future, today.
            </p>
            <WaitlistDialog>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xl font-bold py-6 px-12 rounded-3xl transform hover:scale-110 transition-all duration-300 animate-glow">
                Secure Your Spot Now 🎯
              </Button>
            </WaitlistDialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 glass-dark border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MyCukai
            </span>
          </div>
          <p className="text-white/60">
            © 2024 MyCukai. Revolutionizing tax management, one receipt at a time. 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
