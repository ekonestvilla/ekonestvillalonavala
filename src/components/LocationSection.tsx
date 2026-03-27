import { motion } from "framer-motion";
import { MapPin, Clock, Train } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="bg-card py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent">Location</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Where We Are</h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans font-semibold text-foreground">Lonavala, Maharashtra</p>
                <p className="text-sm text-muted-foreground">Nestled in the Sahyadri mountain range of the Western Ghats</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans font-semibold text-foreground">Easy Access</p>
                <p className="text-sm text-muted-foreground">~2 hours from Mumbai • ~1 hour from Pune</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Train className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-sans font-semibold text-foreground">Nearby Attractions</p>
                <p className="text-sm text-muted-foreground">Tiger's Leap, Bhushi Dam, Karla & Bhaja Caves, Lion's Point</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg"
          >
            <iframe
              title="Villa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60542.89442749066!2d73.3825!3d18.7546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b70a7bf9e311%3A0xb89a1c0854b9c8f!2sLonavala%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="h-72 w-full border-0 md:h-80"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
