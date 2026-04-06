import { motion } from "framer-motion";
import {
  Utensils, Tv, Flame, TreePine, Waves, ShieldCheck,
  Wind, Coffee, Gamepad2, Music,
} from "lucide-react";

const amenities = [
  { icon: TreePine, label: "Private Lawn & Garden" },
  { icon: Wind, label: "Private Deck" },
  { icon: Coffee, label: "Gazebo Lounge" },
  { icon: Flame, label: "Bonfire Area" },
  { icon: Gamepad2, label: "Indoor Games Room" },
  { icon: Music, label: "Bluetooth Speakers" },
  { icon: Utensils, label: "Modern Kitchenette" },
  { icon: Tv, label: "50\" LED Smart TV" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Waves, label: "Swimming Pool" },
];

const AmenitiesSection = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent">Amenities</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Everything You Need</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {amenities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3"
            >
              <item.icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-sans text-sm text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
