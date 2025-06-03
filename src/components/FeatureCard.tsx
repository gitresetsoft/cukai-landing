
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500`}></div>
      <div className="relative glass-dark rounded-3xl p-8 border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 transform group-hover:scale-105">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
