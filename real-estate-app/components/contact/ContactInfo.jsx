"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "newtouch.official@gmail.com",
    action: "email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9123779106",
    action: "phone",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "2/143, Tanwar colony, Dumdum road, 700030",
    action: "location",
  },
];

export default function ContactInfo() {
  const [copied, setCopied] = useState(null);

  const copyWithFallback = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const copiedSuccessfully = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!copiedSuccessfully) {
      throw new Error("Fallback copy failed");
    }
  };

  const handleCopy = async (text, type) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        copyWithFallback(text);
      }

      setCopied(type);
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} copied successfully!`
      );

      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Unable to copy. Please copy it manually.");
    }
  };

  const handleCall = async (phone) => {
    const phoneNumber = phone.replace(/\D/g, "");
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.assign(`tel:+${phoneNumber}`);
      return;
    }

    await handleCopy(`+${phoneNumber}`, "phone");
  };

  return (
    <div className="space-y-8">
      {contactMethods.map((method) => {
        const Icon = method.icon;
        const isCopied = copied === method.action;

        return (
          <button
            key={method.action}
            onClick={async () => {
              if (method.action === "phone") {
                await handleCall(method.value);
              } else {
                await handleCopy(method.value, method.action);
              }
            }}
            className="group w-full text-left"
          >
            <div className="flex items-start gap-3 rounded-lg p-4 transition-all hover:bg-neutral-50 sm:gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                  {method.label}
                </p>
                <p className="mt-1 max-w-full break-words text-base font-semibold leading-snug text-neutral-900 sm:text-lg">
                  {method.value}
                </p>
              </div>
              <div className="mt-1 flex min-w-10 shrink-0 items-center justify-end">
                {isCopied ? (
                  <Check className="h-5 w-5 text-green-600" aria-hidden="true" />
                ) : (
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-600">
                    {method.action === "phone" ? "Call" : "Copy"}
                  </span>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
