import { motion } from "framer-motion";
import livingImg from "@/assets/gallery-living.jpg";
import bedroomImg from "@/assets/gallery-bedroom.jpg";
import poolImg from "@/assets/gallery-pool.jpg";
import gazeboImg from "@/assets/gallery-view.jpg";
import bedroom2Img from "@/assets/gallery-bedroom2.jpg";
import bedroom3Img from "@/assets/gallery-bedroom3.jpg";
import bedroom4Img from "@/assets/gallery-bedroom4.jpg";
import bathroomImg from "@/assets/gallery-bathroom.jpg";

const images = [
  { src: livingImg, alt: "Spacious living room with pool view", label: "Living Room" },
  { src: bedroomImg, alt: "Luxurious master bedroom with designer interiors", label: "Master Bedroom" },
  { src: poolImg, alt: "Private swimming pool with gazebo", label: "Swimming Pool" },
  { src: gazeboImg, alt: "Gazebo seating area by the pool", label: "Gazebo" },
  { src: bedroom2Img, alt: "Elegant bedroom with balcony view", label: "Bedroom 2" },
  { src: bedroom3Img, alt: "Bedroom with gold marble accent wall", label: "Bedroom 3" },
  { src: bedroom4Img, alt: "Cozy bedroom with warm lighting", label: "Bedroom 4" },
  { src: bathroomImg, alt: "Bathrooms with bathtub facilities", label: "Bathrooms" },
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
