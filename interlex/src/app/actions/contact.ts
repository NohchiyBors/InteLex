"use server";

import { contactSuccessMessage } from "@/lib/i18n/messages/forms";
import { normalizeLocale } from "@/lib/i18n";

export async function submitContactForm(
  prevState: { success?: boolean; message?: string } | null,
  formData: FormData,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const locale = normalizeLocale(String(formData.get("locale") ?? ""));
  const message = contactSuccessMessage[locale];

  return {
    success: true,
    message,
  };
}
