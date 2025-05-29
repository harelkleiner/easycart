
export const EasyCartFooter = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">EasyCart</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Making grocery shopping simple and accessible for everyone, 
              especially those who need a little extra help with technology.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Get Help</h4>
            <div className="space-y-3">
              <p className="text-gray-600 text-lg">📞 1-800-EASYCART</p>
              <p className="text-gray-600 text-lg">✉️ help@easycart.com</p>
              <p className="text-gray-600 text-lg">🕘 Available 7 days a week</p>
            </div>
          </div>

          {/* Simple Links */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Support</h4>
            <div className="space-y-3">
              <p className="text-gray-600 text-lg">How It Works</p>
              <p className="text-gray-600 text-lg">Privacy & Safety</p>
              <p className="text-gray-600 text-lg">Family Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-lg">
            © 2024 EasyCart. Making technology accessible for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};
