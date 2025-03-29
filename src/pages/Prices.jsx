import PriceBox from "@/components/prices/PriceBox";
import PricesBanner from "@/components/prices/PricesBanner";
import ComparePlans from "@/components/prices/ComparePlans";
import Products from "@/components/prices/Products";
import FAQ from "@/components/prices/FAQ";
import Card from "@/components/prices/Card";

const Prices = () => {
  return (
    <>
      <PricesBanner />
      <PriceBox />
      <Card />
      <ComparePlans />
      <Products />
      <FAQ />
    </>
  );
};

export default Prices;
