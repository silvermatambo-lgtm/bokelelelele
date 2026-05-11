import { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import bk2 from "@/assets/boleke/bk2.jpeg";
import bk3 from "@/assets/boleke/bk3.jpeg";
import bk4 from "@/assets/boleke/bk4.jpeg";
import bk5 from "@/assets/boleke/bk5.jpeg";
import bk6 from "@/assets/boleke/bk6.jpeg";
import bk7 from "@/assets/boleke/bk7.jpeg";
import bk8 from "@/assets/boleke/bk8.jpeg";

type Item =
  | { type: "image"; src: string; alt: string; cat: "Construction" | "Civil" | "Team" | "Fleet" }
  | { type: "video"; src: string; poster?: string; alt: string; cat: "Construction" | "Civil" | "Team" | "Fleet" };

const items: Item[] = [
  { type: "image", src: bk2, alt: "Construction site at sunset", cat: "Construction" },
  { type: "image", src: bk3, alt: "Civil works — foundations and rebar", cat: "Civil" },
  { type: "image", src: bk4, alt: "Excavation with safety barriers", cat: "Civil" },
  { type: "image", src: bk5, alt: "Site preparation and groundworks", cat: "Civil" },
  { type: "image", src: bk6, alt: "Boleke branded fleet vehicle", cat: "Fleet" },
  { type: "image", src: bk7, alt: "Bricklayers building foundations", cat: "Team" },
  { type: "image", src: bk8, alt: "House foundation completed", cat: "Construction" },
  { type: "video", src: "/media/bk2video.mp4", poster: bk2, alt: "Boleke on-site video", cat: "Construction" },
  { type: "video", src: "/media/bkvid1.mp4", poster: bk7, alt: "Boleke crew at work", cat: "Team" },
];

const cats = ["All", "Construction", "Civil", "Team", "Fleet"] as const;

const Gallery = () => {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const filtered = useMemo(() => (filter === "All" ? items : items.filter((i) => i.cat === filter)), [filter]);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our Work in Pictures" subtitle="A look at the projects, sites, and people that make Boleke." />
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((it, i) => (
              <Reveal key={i} variant="zoom" delay={i * 60}>
                <div className="aspect-square overflow-hidden rounded-lg group bg-secondary">
                  {it.type === "image" ? (
                    <img
                      src={it.src}
                      alt={it.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <video
                      src={it.src}
                      poster={it.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover bg-black"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
