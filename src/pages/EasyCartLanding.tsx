
import { EasyCartHero } from '@/components/EasyCartHero';
import { EasyCartProcess } from '@/components/EasyCartProcess';
import { EasyCartFeatures } from '@/components/EasyCartFeatures';
import { EasyCartCTA } from '@/components/EasyCartCTA';
import { EasyCartFooter } from '@/components/EasyCartFooter';

const EasyCartLanding = () => {
  return (
    <div className="min-h-screen">
      <EasyCartHero />
      <EasyCartProcess />
      <EasyCartFeatures />
      <EasyCartCTA />
      <EasyCartFooter />
    </div>
  );
};

export default EasyCartLanding;
