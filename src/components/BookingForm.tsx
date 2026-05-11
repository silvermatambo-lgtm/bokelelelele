import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { CalendarDays, MapPin, Briefcase, User, Mail, Phone } from "lucide-react";

const services = ["Civil Services", "Construction", "Electrical Work", "Cleaning", "Transport", "Maintenance"];
const budgets = ["Under R10,000", "R10,000 – R50,000", "R50,000 – R250,000", "R250,000+"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  date: z.string().optional(),
  location: z.string().trim().max(160).optional(),
  message: z.string().trim().max(180, "Max 180 characters").optional(),
});

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", date: "", location: "", message: "",
  });
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) { toast.error(r.error.issues[0].message); return; }

    // Send to WhatsApp as a structured booking enquiry
    const lines = [
      `*New booking enquiry — Boleke*`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.budget && `Budget: ${form.budget}`,
      form.date && `Preferred date: ${form.date}`,
      form.location && `Location: ${form.location}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/27881425253?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast.success("Booking sent! Continuing on WhatsApp…");
    setForm({ name: "", email: "", phone: "", service: "", budget: "", date: "", location: "", message: "" });
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name"><User className="w-3.5 h-3.5 inline mr-1" />Full Name *</Label>
          <Input id="name" value={form.name} onChange={(e)=>set("name", e.target.value)} maxLength={100} required />
        </div>
        <div>
          <Label htmlFor="email"><Mail className="w-3.5 h-3.5 inline mr-1" />Email *</Label>
          <Input id="email" type="email" value={form.email} onChange={(e)=>set("email", e.target.value)} maxLength={255} required />
        </div>
        <div>
          <Label htmlFor="phone"><Phone className="w-3.5 h-3.5 inline mr-1" />Phone *</Label>
          <Input id="phone" type="tel" value={form.phone} onChange={(e)=>set("phone", e.target.value)} maxLength={30} required />
        </div>
        <div>
          <Label htmlFor="service"><Briefcase className="w-3.5 h-3.5 inline mr-1" />Service *</Label>
          <Select value={form.service} onValueChange={(v)=>set("service", v)}>
            <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
            <SelectContent>
              {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="budget">Budget range</Label>
          <Select value={form.budget} onValueChange={(v)=>set("budget", v)}>
            <SelectTrigger id="budget"><SelectValue placeholder="Select budget" /></SelectTrigger>
            <SelectContent>
              {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date"><CalendarDays className="w-3.5 h-3.5 inline mr-1" />Preferred start date</Label>
          <Input id="date" type="date" value={form.date} onChange={(e)=>set("date", e.target.value)} />
        </div>
      </div>

      <div>
        <Label htmlFor="location"><MapPin className="w-3.5 h-3.5 inline mr-1" />Project location</Label>
        <Input id="location" value={form.location} onChange={(e)=>set("location", e.target.value)} maxLength={160} placeholder="Town / Province" />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <Label htmlFor="message">Project details</Label>
          <span className="text-xs text-muted-foreground">{form.message.length} / 180</span>
        </div>
        <Textarea id="message" rows={5} value={form.message} onChange={(e)=>set("message", e.target.value)} maxLength={180} />
      </div>

      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
        Book Now via WhatsApp
      </Button>
    </form>
  );
};

export default BookingForm;
