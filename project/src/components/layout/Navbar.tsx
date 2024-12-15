import React from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">
              VidSynk
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition">Pricing</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition">How It Works</a>
            <Button variant="primary" size="sm">Get Started Free</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 px-4 py-2">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-700 hover:text-primary-600 py-2">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 py-2">Pricing</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 py-2">How It Works</a>
              <Button variant="primary" size="sm" className="w-full">Get Started Free</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;