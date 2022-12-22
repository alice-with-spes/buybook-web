import Layout from "../components/Layout";
import CarouselLarge from "../components/Carousel/CarouselLarge";
import QuickMenu from "../components/QuickMenu";

export default function Home() {
  return (
    <Layout title="buyBook">
      <CarouselLarge />
      <QuickMenu />
    </Layout>
  );
}
