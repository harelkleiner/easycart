
import { MessageCircle, ShoppingCart, CreditCard } from 'lucide-react';

export const EasyCartProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Tell Us What You Need",
      description: "Simply chat with our friendly assistant about what groceries you'd like to buy. No complicated lists or forms needed!",
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      number: "2", 
      title: "We Fill Your Cart",
      description: "Our smart assistant finds the best products at great prices and adds them to your cart on your favorite store's website.",
      icon: <ShoppingCart className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-green-600"
    },
    {
      number: "3",
      title: "You Approve & Pay",
      description: "Review your order, make any changes you want, then complete your purchase safely and securely with our protected checkout.",
      icon: <CreditCard className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 id="process-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How EasyCart Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Getting your groceries delivered is as easy as having a conversation with a friend. 
            Here's our simple 3-step process that thousands of families trust every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative" role="article" aria-labelledby={`step-${index}-title`}>
              {/* Step Number Circle */}
              <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-xl relative z-10`}>
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 id={`step-${index}-title`} className={`text-2xl font-bold ${step.textColor} mb-6`}>
                {step.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
              
              {/* Connector Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full transform -translate-x-6 translate-y-0 z-0">
                  <div className="w-16 h-1 bg-gray-300 relative">
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional trust messaging */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Families Choose EasyCart</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <span>Works with your existing grocery store accounts</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <span>No hidden fees or subscription required</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <span>Real human support when you need help</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-xl">✓</span>
                <span>Trusted by thousands of satisfied customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
