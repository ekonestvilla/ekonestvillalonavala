import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const InquirySection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="inquiry" className="bg-primary py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-accent">Get in Touch</p>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">Book Your Stay</h2>
          <p className="mt-3 font-sans text-primary-foreground/80">
            Send us your preferred dates and we'll get back to you with availability and pricing.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Your Name" required className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20" />
            <Input type="email" placeholder="Email Address" required className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input type="date" required className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20" />
            <Input type="date" required className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20" />
          </div>
          <Input type="tel" placeholder="Phone Number" className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20" />
          <Textarea placeholder="Any special requests?" rows={4} className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20" />
          <Button type="submit" variant="accent" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default InquirySection;
