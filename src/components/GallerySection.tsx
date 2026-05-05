import { motion } from "framer-motion";
import livingImg from "@/assets/gallery-living.jpg";
import bedroomImg from "@/assets/gallery-bedroom.jpg";
import poolImg from "@/assets/gallery-pool.jpg";
import diningImg from "@/assets/gallery-dining.jpg";
import bedroom2Img from "@/assets/gallery-bedroom2.jpg";
import bedroom3Img from "@/assets/gallery-bedroom3.jpg";
import bedroom4Img from "@/assets/gallery-bedroom4.jpg";
import bathroomImg from "@/assets/gallery-bathroom.jpg";
import bathroom2Img from "@/assets/gallery-bathroom2.jpg";
import gamesImg from "@/assets/gallery-games.jpg";
import tableTennisImg from "@/assets/gallery-tabletennis.jpg";
import balconyImg from "@/assets/gallery-balcony.jpg";

const images = [
  { src: poolImg, alt: "Private pool with gazebo seating at dusk", label: "Pool & Gazebo" },
  { src: livingImg, alt: "Spacious living room with designer ceiling", label: "Living Room" },
  { src: diningImg, alt: "Elegant dining area with marble accent wall", label: "Dining Area" },
  { src: bedroomImg, alt: "Master bedroom with garden view", label: "Master Bedroom" },
  { src: bedroom2Img, alt: "Bedroom with direct pool access", label: "Pool-View Bedroom" },
  { src: bedroom3Img, alt: "Bedroom with marble accent wall", label: "Bedroom 3" },
  { src: bedroom4Img, alt: "Spacious bedroom with designer headboard", label: "Bedroom 4" },
  { src: bathroomImg, alt: "Bathroom with rose-petal bathtub", label: "Luxury Bath" },
  { src: bathroom2Img, alt: "Floral bathroom with rose-petal bath", label: "Floral Bath" },
  { src: tableTennisImg, alt: "Table tennis with garden view", label: "Table Tennis" },
  { src: gamesImg, alt: "Indoor games room with carrom and bunk beds", label: "Games Room" },
  { src: balconyImg, alt: "Private balcony with seating and greenery views", label: "Balcony" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-card py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent">Gallery</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Experience Eko Nest Villa</h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-80"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/20" />
              <span className="absolute bottom-4 left-4 font-sans text-sm font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
