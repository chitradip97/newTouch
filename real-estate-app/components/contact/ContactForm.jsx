"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "",
  });

  function updateField(field, value) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", values);
      alert("Message sent! We'll get back to you soon.");
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl bg-neutral-50 p-6 shadow-lg ring-1 ring-neutral-200 md:p-8">
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="contact-first-name"
            className="text-sm font-medium text-neutral-700"
          >
            First name*
          </label>
          <Input
            id="contact-first-name"
            name="firstName"
            placeholder="Billy"
            required
            value={values.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="rounded-lg border-neutral-200 bg-neutral-50 placeholder:text-neutral-400"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contact-last-name"
            className="text-sm font-medium text-neutral-700"
          >
            Last name*
          </label>
          <Input
            id="contact-last-name"
            name="lastName"
            placeholder="Jhomel"
            required
            value={values.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="rounded-lg border-neutral-200 bg-neutral-50 placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-neutral-700"
        >
          Work email*
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Enter email"
          required
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="rounded-lg border-neutral-200 bg-neutral-50 placeholder:text-neutral-400"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">
          Phone number*
        </label>
        <div className="flex gap-2">
          <Select
            value={values.countryCode}
            onValueChange={(value) => updateField("countryCode", value)}
          >
            <SelectTrigger className="w-20 rounded-lg border-neutral-200 bg-neutral-50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((item) => (
                <SelectItem
                  key={`${item.country}-${item.code}`}
                  value={item.code}
                >
                  {item.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="flex-1 rounded-lg border-neutral-200 bg-neutral-50 placeholder:text-neutral-400"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-neutral-700"
        >
          Message*
        </label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Enter a question, feedback, or suggestions..."
          required
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 rounded-lg border-neutral-200 bg-neutral-50 placeholder:text-neutral-400"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary text-white hover:bg-primary/90 font-medium"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
    </div>
  );
}
