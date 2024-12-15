import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="relative z-10 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                <span className="block text-gray-900">Sync Your Vision</span>
                <span className="block text-primary-600 mt-2">With AI Magic</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl">
                Transform your ideas into captivating videos in minutes. VidSynk's AI-powered platform handles everything from scripting to production, so you can focus on what matters most.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" icon={Sparkles}>
                  Start Creating Free
                </Button>
                <Button variant="secondary" size="lg" icon={Play}>
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="User avatar"
                    />
                  ))}
                </div>
                <span>Trusted by 10,000+ content creators</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80"
                  alt="VidSynk dashboard preview"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;