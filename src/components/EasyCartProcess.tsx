
import { MessageCircle, ShoppingCart, CreditCard } from 'lucide-react';

export const EasyCartProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Tell Us What You Need",
      description: "Chat with our friendly assistant about your groceries",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: "We Fill Your Cart",
      description: "We find the best products at great prices for you",
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      color: "bg-green-500"
    },
    {
      number: "3",
      title: "You Approve & Pay",
      description: "Review your order and complete your purchase securely",
      icon: <CreditCard className="w-8 h-8 text-white" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How EasyCart Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your groceries delivered is as easy as having a conversation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Families Choose EasyCart */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Families Choose EasyCart</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>Works with your existing grocery store accounts</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>No hidden fees or subscription required</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>Real human support when you need help</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-lg">✓</span>
              <span>Trusted by thousands of satisfied customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
