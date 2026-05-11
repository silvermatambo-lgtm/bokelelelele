import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import bk7 from "@/assets/boleke/bk7.jpeg";

const About = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="Delivering Quality, Reliability, and Real Results"
      subtitle="Reliable construction solutions powered by expertise, modern tools, and a commitment to excellence."
    />
    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="left">
          <img src={bk7} alt="Boleke builders on site" className="rounded-lg w-full shadow-[var(--shadow-card)]" />
        </Reveal>
        <Reveal variant="right" delay={120}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Built on trust. Driven by results.</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Boleke, we provide reliable solutions combining quality, expertise, and modern tools. Our focus is on
            delivering measurable results, helping businesses grow, stand out, and succeed. Every project is handled
            with care, professionalism, and a commitment to exceeding client expectations, ensuring real value every time.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[["10+","Years"],["100+","Projects"],["24/7","Support"]].map(([n,l])=>(
              <div key={l} className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{n}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="container-page grid md:grid-cols-2 gap-6">
        {[
          { icon: Target, title: "Our Mission", text: "Our mission is to deliver quality solutions, reliable service, and measurable results that help businesses grow and succeed." },
          { icon: Eye, title: "Our Vision", text: "Our vision is to be a trusted leader, providing innovative solutions that drive growth, excellence, and lasting value for clients." },
        ].map((c, idx) => (
          <Reveal key={c.title} variant="up" delay={idx * 120}>
            <div className="bg-card p-8 rounded-lg border border-border shadow-[var(--shadow-soft)] h-full">
              <div className="w-14 h-14 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">What sets us apart</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {["Expertise You Can Trust","Reliable and Timely","Comprehensive Services","Client-Focused Approach","Safety and Compliance","Modern Tools & Methods"].map((p, idx)=>(
            <Reveal key={p} variant="zoom" delay={idx * 80}>
              <div className="flex items-start gap-3 p-5 border border-border rounded-lg hover:border-primary transition-colors h-full">
                <CheckCircle2 className="w-6 h-6 text-primary flex-none mt-0.5" />
                <span className="font-semibold">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
