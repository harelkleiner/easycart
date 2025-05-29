
import { EasyCartProcess } from '@/components/EasyCartProcess';
import { EasyCartFeatures } from '@/components/EasyCartFeatures';

const EasyCartLanding = () => {
  return (
    <div className="min-h-screen">
      {/* Logo Section */}
      <div className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <img 
            src="/lovable-uploads/b16cfba5-84fc-4e8c-a277-9c1ade4faa14.png" 
            alt="EasyCart - Your friendly grocery shopping assistant"
            className="h-24 w-auto mx-auto"
          />
        </div>
      </div>
      
      <EasyCartProcess />
      <EasyCartFeatures />
    </div>
  );
};

export default EasyCartLanding;
