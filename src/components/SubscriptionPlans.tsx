
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  Crown, 
  Zap, 
  Star,
  Users,
  Code,
  BookOpen,
  Award,
  Shield,
  Headphones
} from "lucide-react";

export const SubscriptionPlans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: BookOpen,
      color: "gray",
      features: [
        "Access to 5 free courses",
        "Basic code editor",
        "Community support",
        "Progress tracking",
        "Basic certificates"
      ],
      limitations: [
        "Limited course access",
        "No premium features",
        "No priority support"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      description: "Most popular for serious learners",
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: Crown,
      color: "blue",
      popular: true,
      features: [
        "Access to 200+ courses",
        "Advanced code editor with AI",
        "Priority support",
        "Downloadable resources",
        "Verified certificates",
        "Progress analytics",
        "Mobile app access",
        "Offline content"
      ],
      limitations: []
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For teams and organizations",
      monthlyPrice: 99,
      yearlyPrice: 990,
      icon: Zap,
      color: "purple",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Custom learning paths",
        "Advanced analytics",
        "SSO integration",
        "Dedicated account manager",
        "Custom branding",
        "API access",
        "24/7 phone support"
      ],
      limitations: []
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return "Free";
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isYearly ? "year" : "month";
    return `€${price}/${period}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.yearlyPrice;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Choose Your Learning Journey
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Unlock your potential with our comprehensive coding education platform
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm ${!isYearly ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-blue-600"
          />
          <span className={`text-sm ${isYearly ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 ml-2">
              Save up to 17%
            </Badge>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const Icon = plan.icon;
          const savings = getSavings(plan);
          
          return (
            <Card 
              key={plan.id}
              className={`relative dark:bg-gray-800 dark:border-gray-700 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 scale-105 shadow-xl' 
                  : 'hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  plan.color === 'gray' 
                    ? 'bg-gray-100 dark:bg-gray-700' 
                    : plan.color === 'blue'
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : 'bg-purple-100 dark:bg-purple-900'
                }`}>
                  <Icon className={`h-8 w-8 ${
                    plan.color === 'gray' 
                      ? 'text-gray-600 dark:text-gray-300' 
                      : plan.color === 'blue'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-purple-600 dark:text-purple-400'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {getPrice(plan)}
                  </div>
                  {isYearly && savings && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Save €{savings.amount}/year ({savings.percentage}% off)
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
                  }`}
                >
                  {plan.id === 'free' ? 'Get Started Free' : `Start ${plan.name} Plan`}
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    What's included:
                  </h4>
                  
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {plan.id === 'pro' && (
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                        Join 50,000+ Pro learners
                      </span>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      Most chosen by developers who want to advance their careers
                    </p>
                  </div>
                )}
                
                {plan.id === 'enterprise' && (
                  <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-semibold text-purple-900 dark:text-purple-200">
                        Enterprise Features
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Headphones className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs text-purple-700 dark:text-purple-300">
                          24/7 dedicated support
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs text-purple-700 dark:text-purple-300">
                          Custom certification programs
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Can I switch plans anytime?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Is there a refund policy?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We offer a 30-day money-back guarantee on all paid plans. No questions asked.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Do you offer student discounts?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Yes! Students get 50% off Pro plans with valid student ID verification.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              What payment methods do you accept?
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
