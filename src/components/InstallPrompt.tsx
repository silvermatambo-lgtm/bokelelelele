import { useEffect, useState } from "react";
import { Download, X, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "boleke_pwa_install_dismissed_at";
const DISMISS_DAYS = 7;

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  // @ts-expect-error iOS Safari
  window.navigator.standalone === true;

const isIOS = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent);

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BIPEvent | null>(null);
  const [show, setShow] = useState(false);
  const [iosHelp, setIosHelp] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;

    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 86400000) return;

    const onBIP = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);

    // iOS fallback (no beforeinstallprompt support)
    if (isIOS()) {
      const t = setTimeout(() => {
        setIosHelp(true);
        setShow(true);
      }, 4000);
      return () => {
        clearTimeout(t);
        window.removeEventListener("beforeinstallprompt", onBIP);
      };
    }

    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setShow(false);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-border bg-background p-4 shadow-2xl md:left-auto md:right-6 animate-in fade-in slide-in-from-bottom-4">
      <button
        onClick={dismiss}
        className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted"
        aria-label="Dismiss install prompt"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3 pr-6">
        <img src="/icon-192.png" alt="Boleke" className="h-12 w-12 rounded-lg" />
        <div className="flex-1">
          <p className="font-semibold text-foreground">Install Boleke App</p>
          {iosHelp ? (
            <p className="mt-1 text-sm text-muted-foreground">
              Tap <Share className="inline h-4 w-4 align-text-bottom" /> Share, then{" "}
              <span className="font-medium">Add to Home Screen</span>.
            </p>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">
              Get quick access to our services right from your home screen.
            </p>
          )}
          {!iosHelp && (
            <div className="mt-3 flex gap-2">
              <Button size="sm" onClick={install} className="bg-primary hover:bg-primary/90">
                <Download className="mr-1.5 h-4 w-4" />
                Install
              </Button>
              <Button size="sm" variant="ghost" onClick={dismiss}>
                Not now
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
