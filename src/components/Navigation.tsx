import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-tender-orange">TENDER</span> NOTICES
            </div>
            <div className="text-xs text-muted-foreground">DISCOVER. CONNECT. DELIVER</div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-tender-orange transition-colors ${
                isActive('/') ? 'text-tender-orange' : ''
              }`}
            >
              HOME
            </Link>
            <Link
              to="/tenders"
              className={`hover:text-tender-orange transition-colors ${
                isActive('/tenders') ? 'text-tender-orange' : ''
              }`}
            >
              TENDERS
            </Link>
            <Link
              to="/pricing"
              className={`hover:text-tender-orange transition-colors ${
                isActive('/pricing') ? 'text-tender-orange' : ''
              }`}
            >
              PRICING
            </Link>
            <Link
              to="/about"
              className={`hover:text-tender-orange transition-colors ${
                isActive('/about') ? 'text-tender-orange' : ''
              }`}
            >
              ABOUT US
            </Link>
            <Link
              to="/contact"
              className={`hover:text-tender-orange transition-colors ${
                isActive('/contact') ? 'text-tender-orange' : ''
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="orange" asChild>
              <Link to="/register">REGISTER</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">LOGIN</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;