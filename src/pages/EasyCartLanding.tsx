
import { EasyCartHero } from '@/components/EasyCartHero';
import { EasyCartProcess } from '@/components/EasyCartProcess';
import { EasyCartFeatures } from '@/components/EasyCartFeatures';

const EasyCartLanding = () => {
  return (
    <div className="min-h-screen">
      <EasyCartHero />
      <EasyCartProcess />
      <EasyCartFeatures />
    </div>
  );
};

export default EasyCartLanding;
