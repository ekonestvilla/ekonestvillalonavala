import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Eko Nest Villa — Luxury 5BHK in Lonavala with infinity pool and mountain views"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(150,20%,10%,0.2) 0%, hsla(150,20%,10%,0.65) 100%)" }} />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-secondary"
        >
          Exclusive Hill Station Retreat
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Your Private Escape in Lonavala
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 max-w-xl font-sans text-lg font-light text-secondary/90"
        >
          5 stunning bedrooms, a private pool, panoramic mountain views — your ultimate getaway in the heart of Lonavala awaits.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4"
        >
          <Button variant="hero" size="lg" onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}>
            Book Your Stay
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
            View Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
