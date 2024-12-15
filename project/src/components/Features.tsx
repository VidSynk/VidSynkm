import React from 'react';
import { Sparkles, Palette, Share2, Zap } from 'lucide-react';

const features = [
  {
    name: 'AI Script Generation',
    description: 'Generate engaging scripts with our advanced AI that understands your brand voice and target audience.',
    icon: Sparkles,
  },
  {
    name: 'Smart Customization',
    description: 'Automatically generate captions, backgrounds, and music that perfectly match your content.',
    icon: Palette,
  },
  {
    name: 'Multi-Platform Ready',
    description: 'Export videos optimized for any platform - TikTok, Instagram, YouTube, and more.',
    icon: Share2,
  },
  {
    name: 'Batch Creation',
    description: 'Create multiple videos simultaneously, saving hours of production time.',
    icon: Zap,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create amazing videos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered platform provides all the tools you need to create professional videos in minutes, not hours.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;