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
                <p className="font-sans font-semibold text-foreground">New Tungarli Road, Lonavala</p>
                <p className="text-sm text-muted-foreground">Maharashtra 410401, India</p>
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
              title="Eko Nest Villa Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=QC62%2B7G+Lonavala,+Maharashtra&zoom=17"
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
