import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-primary">
                Create Your Account
              </CardTitle>
              <p className="text-muted-foreground">
                Join thousands of suppliers and buyers on our platform
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supplier">Supplier</SelectItem>
                    <SelectItem value="contractor">Contractor</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="government">Government Entity</SelectItem>
                    <SelectItem value="private">Private Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="western">Western Province</SelectItem>
                      <SelectItem value="central">Central Province</SelectItem>
                      <SelectItem value="southern">Southern Province</SelectItem>
                      <SelectItem value="northern">Northern Province</SelectItem>
                      <SelectItem value="eastern">Eastern Province</SelectItem>
                      <SelectItem value="north-western">North Western Province</SelectItem>
                      <SelectItem value="north-central">North Central Province</SelectItem>
                      <SelectItem value="uva">Uva Province</SelectItem>
                      <SelectItem value="sabaragamuwa">Sabaragamuwa Province</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-tender-orange hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-tender-orange hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <Label htmlFor="newsletter" className="text-sm">
                  Subscribe to tender alerts and newsletters
                </Label>
              </div>
              
              <Button variant="orange" className="w-full" size="lg">
                Create Account
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-tender-orange hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;