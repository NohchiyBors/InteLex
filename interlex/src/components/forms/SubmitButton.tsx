"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-primary text-on-primary px-10 py-4 font-label text-sm uppercase tracking-wider hover:bg-on-primary-fixed transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? "Processing..." : label}
    </button>
  );
}
