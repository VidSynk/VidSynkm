import React from 'react';
import { Sparkles, Palette, Share2, Zap } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    name: 'AI-Powered Creation',
    description: 'Our advanced AI understands your brand voice and automatically generates engaging scripts and visuals.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Smart Customization',
    description: 'Intelligent automation for captions, backgrounds, and music that perfectly match your content style.',
    icon: Palette,
    gradient: 'from-primary-500 to-cyan-500',
  },
  {
    name: 'Multi-Platform Ready',
    description: 'One-click export optimized for any platform - TikTok, Instagram, YouTube, and more.',
    icon: Share2,
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Lightning Fast',
    description: 'Create multiple professional videos simultaneously in minutes, not hours.',
    icon: Zap,
    gradient: 'from-green-500 to-emerald-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight">
            Everything you need to create amazing videos
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our AI-powered platform provides all the tools you need to create professional videos in minutes, not hours.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient}`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;