import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/boleke/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background mt-12">
    <div className="container-page py-14 grid gap-10 md:grid-cols-4">
      <div>
        <img src={logo} alt="Boleke logo" className="h-16 w-auto bg-background rounded p-2 mb-4" />
        <p className="text-sm text-background/70 leading-relaxed">
          Boleke delivers quality construction and maintenance services you can trust, with reliability,
          safety, and client satisfaction every time.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Useful Links</h4>
        <ul className="space-y-2 text-sm text-background/80">
          {[["Home","/"],["About us","/about"],["Services","/services"],["Gallery","/gallery"],["Contact us","/contact"]].map(([label,to])=>(
            <li key={to}><Link to={to} className="hover:text-primary transition-colors">{label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
        <ul className="space-y-2 text-sm text-background/80">
          {["Civil Services","Construction","Electrical Work","Cleaning","Transport","Maintenance"].map((s)=>(
            <li key={s}><Link to="/services" className="hover:text-primary transition-colors">{s}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
        <ul className="space-y-3 text-sm text-background/80">
          <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /><span>018 004 0118<br/>084 723 1134<br/>+27 66 261 7731</span></li>
          <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /><a href="mailto:info@boleke.co.za" className="hover:text-primary">info@boleke.co.za</a></li>
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" /><span>5812 Dithipe Ext 6 Khuma, Stilfontein, North West, 2551</span></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container-page py-5 text-xs text-background/60 text-center flex flex-col sm:flex-row gap-2 justify-between">
        <span>© {new Date().getFullYear()} Boleke Enterprise (PTY) LTD. All rights reserved.</span>
        <span>
          Website designed by{" "}
          <a href="https://www.webdevpro.co.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
            www.webdevpro.co.za
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
