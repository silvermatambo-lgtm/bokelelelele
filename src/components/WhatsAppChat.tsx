import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import logo from "@/assets/boleke/logo.png";

const WA_NUMBER = "27881425253"; // +27 88 142 5253
const SERVICES = [
  "Civil Services",
  "Construction",
  "Electrical Work",
  "Cleaning",
  "Transport",
  "Maintenance",
];

type Msg = { from: "bot" | "user"; text: string };

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Welcome to Boleke Enterprise! 👷" },
    { from: "bot", text: "Book your services with us — pick what you need below or send a message and we’ll continue on WhatsApp." },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      // pulse hint
    }, 0);
    return () => window.clearTimeout(t);
  }, [open]);

  const sendToWhatsApp = (text: string) => {
    const msg = encodeURIComponent(text);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const pickService = (s: string) => {
    setMessages((m) => [...m, { from: "user", text: `I'd like to book: ${s}` }, { from: "bot", text: "Great choice! Tap continue to chat with us on WhatsApp." }]);
    setTimeout(() => sendToWhatsApp(`Hi Boleke, I'd like to book: ${s}.`), 400);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => sendToWhatsApp(text), 250);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce-slow"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col">
          <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
            <img src={logo} alt="Boleke" className="w-10 h-10 rounded-full bg-white p-1" />
            <div className="flex-1">
              <div className="font-bold text-sm">Boleke Enterprise</div>
              <div className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Online — replies on WhatsApp
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#ECE5DD] max-h-80 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm shadow ${
                  m.from === "bot" ? "bg-white text-foreground" : "bg-[#DCF8C6] text-foreground ml-auto"
                }`}
              >
                {m.text}
              </div>
            ))}

            <div className="pt-2">
              <p className="text-[11px] text-muted-foreground mb-1 px-1">Quick book:</p>
              <div className="flex flex-wrap gap-1.5">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => pickService(s)}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-border bg-card flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message…"
              maxLength={300}
              className="flex-1 px-3 py-2 rounded-full bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              aria-label="Send"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1ebe5a] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
