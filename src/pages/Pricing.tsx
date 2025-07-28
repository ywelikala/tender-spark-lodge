import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "LKR 0",
      period: "Forever",
      description: "Perfect for getting started",
      features: [
        { name: "View 5 tenders per day", included: true },
        { name: "Basic search functionality", included: true },
        { name: "Email alerts", included: false },
        { name: "Advanced filters", included: false },
        { name: "Download tender documents", included: false },
        { name: "Priority support", included: false },
      ],
      popular: false,
    },
    {
      name: "Basic",
      price: "LKR 2,500",
      period: "per month",
      description: "Great for small businesses",
      features: [
        { name: "View 50 tenders per day", included: true },
        { name: "Advanced search functionality", included: true },
        { name: "Email alerts", included: true },
        { name: "Basic filters", included: true },
        { name: "Download tender documents", included: false },
        { name: "Priority support", included: false },
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "LKR 5,000",
      period: "per month",
      description: "Best for growing companies",
      features: [
        { name: "Unlimited tender views", included: true },
        { name: "Advanced search functionality", included: true },
        { name: "Email & SMS alerts", included: true },
        { name: "Advanced filters", included: true },
        { name: "Download tender documents", included: true },
        { name: "Priority support", included: true },
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "LKR 10,000",
      period: "per month",
      description: "For large organizations",
      features: [
        { name: "Unlimited tender views", included: true },
        { name: "Advanced search functionality", included: true },
        { name: "Email & SMS alerts", included: true },
        { name: "Advanced filters & analytics", included: true },
        { name: "Download tender documents", included: true },
        { name: "24/7 dedicated support", included: true },
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-tender-orange">Subscription Plan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your business needs. Upgrade or downgrade at any time.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-tender-orange shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tender-orange text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-tender-orange">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500 mr-3" />
                        ) : (
                          <X className="h-4 w-4 text-red-500 mr-3" />
                        )}
                        <span className={feature.included ? '' : 'text-muted-foreground'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "orange" : "outline"} 
                    className="w-full mt-6"
                    size="lg"
                  >
                    {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Compare All Features
            </h2>
            <p className="text-lg text-muted-foreground">
              See what's included in each subscription plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Free</th>
                  <th className="text-center p-4 font-semibold">Basic</th>
                  <th className="text-center p-4 font-semibold bg-tender-orange/10">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Daily tender views</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4">50</td>
                  <td className="text-center p-4 bg-tender-orange/10">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Email alerts</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-tender-orange/10"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">SMS alerts</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-tender-orange/10"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Document downloads</td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4"><X className="h-4 w-4 text-red-500 mx-auto" /></td>
                  <td className="text-center p-4 bg-tender-orange/10"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="h-4 w-4 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Support</td>
                  <td className="text-center p-4">Community</td>
                  <td className="text-center p-4">Email</td>
                  <td className="text-center p-4 bg-tender-orange/10">Priority</td>
                  <td className="text-center p-4">24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan anytime?</h3>
                <p className="text-muted-foreground">Yes, you can change your subscription plan at any time. Changes will take effect from your next billing cycle.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, bank transfers, and online banking payments in Sri Lankan Rupees.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-muted-foreground">Yes, our Free plan allows you to explore the platform with limited features. You can upgrade anytime to access more features.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;