"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import type { Locale } from "@/lib/i18n";
import type { HomeFormLabels } from "@/lib/i18n/messages/forms";
import { SubmitButton } from "./SubmitButton";

type Props = {
  locale: Locale;
  labels: HomeFormLabels;
};

export function HomeContactForm({ locale, labels }: Props) {
  const [state, action] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-surface-container p-8 border-l-4 border-secondary">
        <h3 className="font-headline text-2xl text-primary mb-2">{labels.successTitle}</h3>
        <p className="font-body text-on-surface-variant">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-12">
      <input type="hidden" name="locale" value={locale} />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative group">
          <input
            className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 text-primary focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent"
            id="name"
            name="name"
            placeholder={labels.fullLegalName}
            required
            type="text"
          />
          <label
            className="absolute left-0 top-3 font-label text-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
            htmlFor="name"
          >
            {labels.fullLegalName}
          </label>
        </div>
        <div className="relative group">
          <input
            className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 text-primary focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent"
            id="email"
            name="email"
            placeholder={labels.corporateEmail}
            required
            type="email"
          />
          <label
            className="absolute left-0 top-3 font-label text-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
            htmlFor="email"
          >
            {labels.corporateEmail}
          </label>
        </div>
      </div>
      <div className="relative group">
        <textarea
          className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 text-primary focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent resize-none"
          id="inquiry"
          name="inquiry"
          placeholder={labels.natureOfInquiry}
          required
          rows={4}
        ></textarea>
        <label
          className="absolute left-0 top-3 font-label text-sm text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
          htmlFor="inquiry"
        >
          {labels.natureOfInquiry}
        </label>
      </div>
      <div className="flex justify-end pt-4">
        <SubmitButton label={labels.submit} />
      </div>
    </form>
  );
}
