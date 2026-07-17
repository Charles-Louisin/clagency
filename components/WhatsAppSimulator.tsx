"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  OPEN_SERVICE_EVENT,
  PREFERRED_SERVICE_STORAGE_KEY,
  SERVICES,
  buildContactMessage,
  buildMailtoUrl,
  buildWhatsAppUrl,
  isValidServiceId,
  type ServiceOffer,
} from "@/lib/constants";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

export function WhatsAppSimulator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState<ServiceOffer | null>(null);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");

  const openService = useCallback((id: string) => {
    if (!isValidServiceId(id)) return;
    const match = SERVICES.find((s) => s.id === id);
    if (!match) return;
    setService(match);
    setPriorities([]);
    setNote("");
    setNoteOpen(false);
    setStep(2);
    try {
      sessionStorage.removeItem(PREFERRED_SERVICE_STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    try {
      const id = sessionStorage.getItem(PREFERRED_SERVICE_STORAGE_KEY);
      if (id && isValidServiceId(id)) {
        timeoutId = setTimeout(() => openService(id), 0);
      }
    } catch {
      /* ignore */
    }

    function onOpen(e: Event) {
      const id = (e as CustomEvent<string>).detail;
      if (typeof id === "string" && isValidServiceId(id)) {
        openService(id);
      }
    }

    window.addEventListener(OPEN_SERVICE_EVENT, onOpen);
    return () => {
      window.removeEventListener(OPEN_SERVICE_EVENT, onOpen);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [openService]);

  function selectService(offer: ServiceOffer) {
    setService(offer);
    setPriorities([]);
    setNote("");
    setNoteOpen(false);
    setStep(2);
  }

  function togglePriority(value: string) {
    setPriorities((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  }

  function goToStep3() {
    if (priorities.length === 0) return;
    setStep(3);
  }

  const messagePreview = useMemo(() => {
    if (!service || priorities.length === 0) return "";
    return buildContactMessage(service.title, priorities, note);
  }, [service, priorities, note]);

  const waUrl = useMemo(
    () =>
      service && priorities.length
        ? buildWhatsAppUrl(service.title, priorities, note)
        : "#",
    [service, priorities, note]
  );

  const mailUrl = useMemo(
    () =>
      service && priorities.length
        ? buildMailtoUrl(service.title, priorities, note)
        : "#",
    [service, priorities, note]
  );

  return (
    <section id="contact" className="border-t border-border bg-contact py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-ink">
          Configurons votre projet.
        </h2>
        <p className="mt-4 text-base text-muted">
          Choisissez l&apos;offre et les priorités qui vous correspondent à votre besoin.
        </p>

        <div className="mt-12 min-h-[300px] border border-border bg-surface p-8 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-medium text-ink">
                  De quoi avez-vous besoin ?
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectService(item)}
                      className="border border-border bg-transparent px-5 py-4 text-left transition-colors hover:border-accent hover:bg-accent/5"
                    >
                      <span className="block text-sm font-medium text-ink">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-muted">
                        {item.priceHint
                          ? `${item.priceHint} ${item.priceLabel}`
                          : item.priceLabel}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && service && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mb-6 font-mono text-[11px] tracking-wider text-muted uppercase hover:text-foreground/70"
                >
                  ← Retour
                </button>
                <h3 className="text-xl font-medium text-ink">
                  Quelles sont vos priorités ?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Offre : {service.title} — sélectionnez une ou plusieurs options
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  {service.priorities.map((item) => {
                    const selected = priorities.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => togglePriority(item)}
                        className={`border px-5 py-4 text-left text-sm transition-colors ${
                          selected
                            ? "border-accent bg-accent/10 text-ink"
                            : "border-border bg-transparent text-foreground/80 hover:border-accent"
                        }`}
                      >
                        <span className="flex items-center justify-between gap-3">
                          {item}
                          {selected && (
                            <span className="font-mono text-[10px] tracking-wider text-accent uppercase">
                              Sélectionné
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  disabled={priorities.length === 0}
                  onClick={goToStep3}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-semibold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto"
                >
                  Continuer
                </button>
              </motion.div>
            )}

            {step === 3 && service && priorities.length > 0 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mb-6 font-mono text-[11px] tracking-wider text-muted uppercase hover:text-foreground/70"
                >
                  ← Retour
                </button>

                <p className="text-sm text-muted">
                  {service.title} · {priorities.join(" · ")}
                </p>

                <div className="mt-6">
                  {!noteOpen ? (
                    <button
                      type="button"
                      onClick={() => setNoteOpen(true)}
                      className="inline-flex items-center gap-2 border border-dashed border-border px-4 py-3 text-sm text-foreground/70 transition-colors hover:border-accent hover:text-ink"
                    >
                      + Ajouter une note
                    </button>
                  ) : (
                    <div>
                      <label
                        htmlFor="contact-note"
                        className="font-mono text-[11px] tracking-wider text-muted uppercase"
                      >
                        Votre note
                      </label>
                      <textarea
                        id="contact-note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={4}
                        placeholder="Précisez votre contexte, délais, contraintes…"
                        className="mt-2 w-full resize-y border border-border bg-background px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 border border-border bg-background p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                    Aperçu du message
                  </p>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground/80">
                    {messagePreview}
                  </pre>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-center text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a
                    href={mailUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-ink bg-ink px-6 py-4 text-center text-sm font-semibold tracking-wide text-background transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <EmailIcon />
                    E-mail
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
