import { motion } from "framer-motion";
import { Bed, Bath, Users, Mountain, Car, Wifi } from "lucide-react";

const highlights = [
  { icon: Bed, label: "5 Bedrooms", desc: "Spacious king-size beds" },
  { icon: Bath, label: "5 Bathrooms", desc: "Attached & modern" },
  { icon: Users, label: "Up to 15 Guests", desc: "Perfect for groups" },
  { icon: Mountain, label: "Valley Views", desc: "Panoramic Western Ghats" },
  { icon: Car, label: "Private Parking", desc: "Space for 4+ cars" },
  { icon: Wifi, label: "High-Speed WiFi", desc: "Work-from-villa ready" },
];

const HighlightsSection = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent">At a Glance</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Property Highlights</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center rounded-lg bg-card p-6 text-center shadow-sm"
            >
              <item.icon className="mb-3 h-8 w-8 text-primary" />
              <p className="font-sans text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 font-sans text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
