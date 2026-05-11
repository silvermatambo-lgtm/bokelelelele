import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Clock, Target, CheckCircle2, Phone, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { useTypewriter } from "@/hooks/useTypewriter";
import bk2 from "@/assets/boleke/bk2.jpeg";
import bk3 from "@/assets/boleke/bk3.jpeg";
import bk6 from "@/assets/boleke/bk6.jpeg";
import bk4 from "@/assets/boleke/bk4.jpeg";
import bk5 from "@/assets/boleke/bk5.jpeg";
import bk7 from "@/assets/boleke/bk7.jpeg";
import bk8 from "@/assets/boleke/bk8.jpeg";

const slides = [
  { src: bk2, headline: "WELCOME TO BOLEKE CONSTRUCTION!", sub: "Reliable solutions, quality service, and modern tools that deliver real, measurable results — every time." },
  { src: bk3, headline: "BUILDING TOMORROW'S INFRASTRUCTURE", sub: "From foundations to finishing — civil and construction expertise you can trust." },
  { src: bk6, headline: "EXCELLENCE IN EVERY PROJECT", sub: "Construction, electrical, fencing & cleaning — one trusted partner for your site." },
];

const Home = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const { text: typedHeadline } = useTypewriter(slides[i].headline, 45, 250, [i]);

  return (
    <>
      {/* Hero slider */}
      <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${i === idx ? "animate-kenburns" : ""}`}
              style={{ backgroundImage: `url(${s.src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
          </div>
        ))}
        <div className="relative container-page h-full flex items-center">
          <div className="max-w-3xl text-background">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4 fade-in">Boleke Enterprise (Pty) Ltd</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight min-h-[3em]">
              <span className="type-caret">{typedHeadline}</span>
            </h1>
            <p key={`sub-${i}`} className="mt-6 text-lg md:text-xl text-background/85 leading-relaxed slide-up">
              {slides[i].sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 slide-up">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link to="/contact">Book a Service <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
                <a href="tel:+27662617731"><Phone className="w-5 h-5 mr-2" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-primary" : "w-4 bg-background/60"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Value cards */}
      <section className="section-pad bg-background">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "QUALITY", text: "Delivering work that meets the highest standards every time." },
            { icon: Clock, title: "Reliability", text: "Being dependable and consistent in every service we provide." },
            { icon: Target, title: "Results", text: "Focusing on outcomes that bring real value to our clients." },
          ].map((c, idx) => (
            <Reveal key={c.title} variant="up" delay={idx * 120}>
              <div className="group p-8 bg-card border border-border rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all h-full">
                <div className="w-14 h-14 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{c.title}</h3>
                <p className="text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section-pad bg-secondary">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div className="relative">
              <img src={bk7} alt="Boleke construction project" className="rounded-lg shadow-[var(--shadow-card)] w-full" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-[var(--shadow-card)] hidden md:block animate-float">
                <div className="text-3xl font-extrabold">10+</div>
                <div className="text-xs uppercase tracking-wide">Years of Trust</div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Delivering Quality, Reliability, and Real Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Boleke, we provide reliable solutions combining quality, expertise, and modern tools. Our focus is on
              delivering measurable results, helping businesses grow, stand out, and succeed. Every project is handled
              with care, professionalism, and a commitment to exceeding client expectations.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/about">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* See our work — videos */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3 inline-flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> See Our Work in Action
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold">Watch Boleke on Site</h2>
              <p className="mt-3 text-muted-foreground">Real moments from our crews delivering quality construction.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {["/media/bk2video.mp4", "/media/bkvid1.mp4"].map((src, idx) => (
              <Reveal key={src} variant="up" delay={idx * 120}>
                <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] bg-black aspect-video">
                  <video
                    src={src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-pad bg-secondary">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Services</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">Construction Solutions You Can Trust</h2>
              <p className="mt-4 text-muted-foreground">
                From residential to commercial projects, we build structures that last — ensuring safety,
                efficiency, and client satisfaction every time.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Civil Services","Construction","Electrical Work","Cleaning","Transport","Maintenance"].map((s,idx)=>(
              <Reveal key={s} variant="zoom" delay={idx * 80}>
                <Link to="/services" className="block p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group h-full">
                  <div className="text-primary text-3xl font-extrabold mb-2">{String(idx+1).padStart(2,"0")}</div>
                  <h3 className="text-lg font-bold mb-1">{s}</h3>
                  <p className="text-sm text-muted-foreground">Professional, reliable and code-compliant.</p>
                  <div className="mt-3 text-primary text-sm font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${bk3})` }} />
        <div className="container-page relative grid lg:grid-cols-2 gap-12">
          <Reveal variant="left">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Your Trusted Construction Solutions Partner</h2>
            <p className="text-background/80 leading-relaxed">
              We deliver reliable construction and maintenance services, combining expertise, quality, and efficiency
              to build lasting structures and satisfied clients.
            </p>
            <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <a href="tel:+27662617731"><Phone className="w-4 h-4 mr-2" /> +27 66 261 7731</a>
            </Button>
          </Reveal>
          <ul className="space-y-4">
            {["Expertise You Can Trust","Reliable and Timely","Comprehensive Services","Client-Focused Approach","Safety and Compliance"].map((p, idx)=>(
              <Reveal key={p} variant="right" delay={idx * 100}>
                <li className="flex items-start gap-3 bg-background/5 backdrop-blur p-4 rounded-md border border-background/10">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-none mt-0.5" />
                  <span className="font-semibold">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Gallery</p>
                <h2 className="text-3xl md:text-5xl font-extrabold">Recent Work</h2>
              </div>
              <Button asChild variant="outline"><Link to="/gallery">View Gallery <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[bk3,bk4,bk5,bk7,bk8,bk2].map((src,idx)=>(
              <Reveal key={idx} variant="zoom" delay={idx * 70}>
                <div className="aspect-square overflow-hidden rounded-lg group">
                  <img src={src} alt={`Project ${idx+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-14 md:py-20 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <Reveal variant="left">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to start your next project?</h2>
            <p className="mt-2 text-primary-foreground/90">Speak with our specialists today — clear communication, timely responses.</p>
          </Reveal>
          <Reveal variant="right">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link to="/contact">Book a Service <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
