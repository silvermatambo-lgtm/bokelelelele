import crane from "@/assets/boleke/bk2.jpeg";
import { useTypewriter } from "@/hooks/useTypewriter";

const PageHero = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => {
  const { text } = useTypewriter(title, 45, 200);
  return (
    <section className="relative overflow-hidden bg-foreground text-background py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url(${crane})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      <div className="container-page relative slide-up">
        {eyebrow && <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">{eyebrow}</p>}
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl min-h-[1.2em]">
          <span className="type-caret">{text}</span>
        </h1>
        {subtitle && <p className="mt-5 text-lg text-background/80 max-w-2xl fade-in">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
