import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, HardHat, Building2, Zap, Sparkles, Truck, Wrench } from "lucide-react";

const services = [
  { icon: HardHat, title: "Civil Services", text: "Our civil services cover all aspects of construction, including roads, foundations, and structural works, delivering durable, safe, and high-quality infrastructure that meets client and regulatory standards." },
  { icon: Building2, title: "Construction", text: "We handle residential, commercial, and industrial construction projects with professionalism, quality materials, and skilled workmanship, ensuring projects are completed on time, within budget, and to the highest standards." },
  { icon: Zap, title: "Electrical Work", text: "We provide expert electrical solutions, including installations, repairs, and maintenance, ensuring safe, efficient, and code-compliant systems for residential, commercial, and industrial clients." },
  { icon: Sparkles, title: "Cleaning", text: "Our cleaning services deliver spotless, hygienic environments for homes, offices, and construction sites, using professional techniques and eco-friendly products to maintain cleanliness and safety." },
  { icon: Truck, title: "Transport", text: "Our transport services ensure safe, timely, and efficient movement of goods, equipment, and materials, supporting construction projects and logistics operations with reliability and professionalism." },
  { icon: Wrench, title: "Maintenance", text: "We provide comprehensive maintenance services to keep buildings, equipment, and facilities in optimal condition, ensuring safety, efficiency, and longevity while minimizing downtime and operational disruptions." },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="Our Services"
      title="Construction Solutions You Can Trust"
      subtitle="We deliver high-quality construction services, combining expertise, reliability, and innovative solutions. From residential to commercial projects, we build structures that last."
    />

    <section className="py-8 bg-secondary">
      <div className="container-page flex flex-wrap items-center justify-between gap-4">
        <p className="font-semibold">Need expert advice on your project?</p>
        <div className="flex gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground"><Link to="/contact">Book Now</Link></Button>
          <Button asChild variant="outline"><a href="tel:+27662617731"><Phone className="w-4 h-4 mr-2" />+27 66 261 7731</a></Button>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, idx) => (
          <Reveal key={s.title} variant="up" delay={idx * 90}>
            <article className="group p-7 bg-card border border-border rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all h-full">
              <div className="w-14 h-14 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default Services;
