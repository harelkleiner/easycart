
export const EasyCartProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Tell Us What You Need",
      description: "Simply chat with our assistant about what groceries you'd like to buy. No lists needed!",
      icon: "💬",
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: "We Fill Your Cart",
      description: "Our assistant finds the best products and adds them to your cart on your favorite store's website.",
      icon: "🛒",
      color: "bg-green-500"
    },
    {
      number: "3",
      title: "You Approve & Pay",
      description: "Review your order, make any changes you want, then complete your purchase safely and securely.",
      icon: "✅",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            How EasyCart Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting your groceries delivered is as easy as having a conversation. 
            Here's how we make it simple for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg`}>
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="text-6xl mb-6">{step.icon}</div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-8 w-32 h-1 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
