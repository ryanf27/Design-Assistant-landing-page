import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/m",
      description: "Free Forever",
      features: [
        "Basic AI-generated designs",
        "Access to design templates",
        "Community support",
        "5 projects per month",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Basic",
      price: isYearly ? "$14.99" : "$14.99",
      period: isYearly ? "/year" : "/m",
      description: "Most Popular",
      features: [
        "Advanced AI-generated designs",
        "Full customization tools",
        "Unlimited projects",
        "Real-time collaboration",
        "Priority email support",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Pro",
      price: isYearly ? "$29.99" : "$29.99",
      period: isYearly ? "/year" : "/m",
      description: "Best Monthly",
      features: [
        "All Basic features",
        "Dedicated account manager",
        "Online training sessions",
        "24/7 priority support",
        "Advanced analytics and reporting",
        "Secure cloud storage",
      ],
      buttonText: "Get Started",
      popular: false,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Affordable Plans for{" "}
            <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your design needs, from startups to enterprises. Our 
            flexible pricing grows with your business, ensuring you get the most out 
            of our AI-powered design assistant.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isYearly ? 'bg-purple-600' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={plan.popular ? "pricing-card-highlighted" : "pricing-card"}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {plan.description}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {!plan.popular && (
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-transparent border border-border hover:bg-purple-600/10'
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}