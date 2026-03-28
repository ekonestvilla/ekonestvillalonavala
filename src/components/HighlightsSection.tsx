import { motion } from "framer-motion";
import { Bed, Bath, Users, Mountain, Car, Wifi } from "lucide-react";

const highlights = [
  { icon: Bed, label: "5 Luxurious Bedrooms", desc: "Each with attached washroom" },
  { icon: Bath, label: "2 Relaxing Bathtubs", desc: "For your refreshment" },
  { icon: Users, label: "Up to 25 Guests", desc: "Perfect for large groups" },
  { icon: Mountain, label: "Private Pool", desc: "24 ft × 12 ft with gazebo" },
  { icon: Car, label: "Private Parking", desc: "Space for up to 4 cars" },
  { icon: Wifi, label: "Modern Living", desc: "50\" LED & kitchenette" },
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
