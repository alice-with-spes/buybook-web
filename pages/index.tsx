import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselLarge from "../components/Carousel/CarouselLarge";
import QuickMenu from "../components/QuickMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy Book</title>
        <meta name="description" content="Created by Alice and Spes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-full mx-8">
        <CarouselLarge />
        <QuickMenu />
      </main>
      <Footer />
    </>
  );
}
