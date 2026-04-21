"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/i18n";
import type { ServicesFormLabels } from "@/lib/i18n/messages/forms";

type Props = {
  locale: Locale;
  labels: ServicesFormLabels;
};

export function ServicesContactForm({ locale, labels }: Props) {
  const [state, action, pending] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-surface p-10 md:p-14 rounded shadow-xl border-l-4 border-secondary text-center">
        <h3 className="font-headline text-2xl text-primary mb-4">{labels.successTitle}</h3>
        <p className="font-body text-on-surface-variant max-w-lg mx-auto">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-surface p-10 md:p-14 rounded shadow-xl">
      <form action={action} className="space-y-8">
        <input type="hidden" name="locale" value={locale} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 text-primary py-3 px-0 focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent"
              id="fullName"
              name="fullName"
              placeholder={labels.fullName}
              required
              type="text"
            />
            <label
              className="absolute left-0 -top-3.5 text-xs text-on-surface-variant font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-secondary"
              htmlFor="fullName"
            >
              {labels.fullName}
            </label>
          </div>
          <div className="relative group">
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 text-primary py-3 px-0 focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent"
              id="email"
              name="email"
              placeholder={labels.email}
              required
              type="email"
            />
            <label
              className="absolute left-0 -top-3.5 text-xs text-on-surface-variant font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-secondary"
              htmlFor="email"
            >
              {labels.email}
            </label>
          </div>
        </div>
        <div className="relative group">
          <select
            defaultValue=""
            name="interest"
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 text-primary py-3 px-0 focus:ring-0 focus:border-secondary transition-colors appearance-none"
            id="interest"
            required
          >
            <option disabled value="">
              {labels.interestPlaceholder}
            </option>
            {labels.interests.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-0 top-4 h-5 w-5 text-outline-variant" />
        </div>
        <div className="relative group mt-12">
          <textarea
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 text-primary py-3 px-0 focus:ring-0 focus:border-secondary transition-colors peer placeholder-transparent resize-none"
            id="details"
            name="details"
            placeholder={labels.details}
            rows={3}
          ></textarea>
          <label
            className="absolute left-0 -top-3.5 text-xs text-on-surface-variant font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-secondary"
            htmlFor="details"
          >
            {labels.details}
          </label>
        </div>
        <div className="pt-6 flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-on-surface-variant/70 max-w-xs leading-tight">{labels.disclaimer}</p>
          <button
            className="bg-primary text-on-primary px-10 py-4 rounded font-medium hover:bg-secondary-container hover:text-on-secondary-container transition-colors duration-300 shadow-sm disabled:opacity-50"
            type="submit"
            disabled={pending}
          >
            {pending ? labels.submitting : labels.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
