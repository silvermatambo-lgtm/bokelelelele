import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import Reveal from "@/components/Reveal";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Connect With Our Specialists!"
        subtitle="Have questions or need assistance? Reach out to our team today. We're ready to listen, provide support, and guide you through your project, ensuring clear communication and timely responses."
      />

      <section className="section-pad">
        <div className="container-page grid lg:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Phone, title: "Give us a call", lines: ["018 004 0118", "084 723 1134", "+27 66 261 7731"], href: "tel:+27662617731" },
            { icon: Mail, title: "Enquire now", lines: ["info@boleke.co.za"], href: "mailto:info@boleke.co.za" },
            { icon: MapPin, title: "Visit us", lines: ["5812 Dithipe Ext 6 Khuma,", "Stilfontein, North West, 2551"] },
          ].map((c, idx) => (
            <Reveal key={c.title} variant="up" delay={idx * 100}>
              <a
                href={c.href || "#"}
                className="block p-7 bg-card border border-border rounded-lg shadow-[var(--shadow-soft)] hover:border-primary transition-colors h-full"
              >
                <div className="w-12 h-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold uppercase tracking-wide mb-2">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-muted-foreground text-sm">{l}</p>
                ))}
              </a>
            </Reveal>
          ))}
        </div>

        <div className="container-page max-w-3xl">
          <Reveal>
            <div className="bg-card border border-border rounded-lg p-6 md:p-10 shadow-[var(--shadow-soft)]">
              <div className="mb-6">
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Booking Form</p>
                <h2 className="text-2xl md:text-3xl font-extrabold">Book a service</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Fill in the details below — we’ll continue the conversation on WhatsApp.
                </p>
              </div>
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
