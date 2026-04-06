import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const InquirySection = () => {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;
    const checkInStr = format(checkIn, "dd MMM yyyy");
    const checkOutStr = format(checkOut, "dd MMM yyyy");
    const text = `Hi, I'd like to book Eko Nest Villa Lonavala.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Check-in:* ${checkInStr}%0A*Check-out:* ${checkOutStr}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Message:* ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919082288678?text=${text}`, "_blank");
  };

  const inputClasses = "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20";

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
            Fill in your details and we'll connect with you on WhatsApp.
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
            <Input placeholder="Your Name" required value={name} onChange={e => setName(e.target.value)} className={inputClasses} />
            <Input type="tel" placeholder="Phone Number" required value={phone} onChange={e => setPhone(e.target.value)} className={inputClasses} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    inputClasses,
                    !checkIn && "text-primary-foreground/50"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "dd MMM yyyy") : "Check-in Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10",
                    inputClasses,
                    !checkOut && "text-primary-foreground/50"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "dd MMM yyyy") : "Check-out Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          <Textarea placeholder="Any special requests?" rows={4} value={message} onChange={e => setMessage(e.target.value)} className={inputClasses} />
          <Button type="submit" variant="accent" size="lg" className="w-full flex items-center justify-center gap-2">
            <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.748-1.966-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.792s1.194-3.402 1.618-3.868c.424-.466.924-.582 1.232-.582.308 0 .616.002.886.016.284.014.666-.108.942.718.39 1.1.942 2.674 1.026 2.866.084.192.14.416.028.672-.112.258-.168.418-.336.644-.168.226-.354.504-.504.676-.168.192-.344.4-.148.784.196.384.872 1.44 1.872 2.332 1.288 1.148 2.374 1.504 2.71 1.672.336.168.532.14.728-.084.196-.226.84-.98 1.064-1.316.224-.336.448-.28.756-.168.308.112 1.952.92 2.286 1.088.334.168.556.252.64.39.084.14.084.784-.306 1.882z" />
            </svg>
            Send via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default InquirySection;
