
export const EasyCartFeatures = () => {
  const features = [
    {
      title: "Large, Clear Text",
      description: "Everything is designed to be easy to read and understand",
      icon: "👀"
    },
    {
      title: "Simple Conversations",
      description: "Just talk naturally - no complicated forms or menus",
      icon: "💭"
    },
    {
      title: "Safe & Secure",
      description: "Your payment information is always protected",
      icon: "🔒"
    },
    {
      title: "Personal Assistant",
      description: "Get help whenever you need it, just like talking to a friend",
      icon: "🤝"
    },
    {
      title: "No App Downloads",
      description: "Works right in your web browser - nothing to install",
      icon: "🌐"
    },
    {
      title: "Family Friendly",
      description: "Your family can help you set up and place orders too",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Made With You In Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand that technology can be overwhelming. 
            That's why EasyCart is designed to be as simple and friendly as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-5xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
