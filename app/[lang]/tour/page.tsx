"use client";
import { useTranslations } from "next-intl";

export default function Tour() {
  const t = useTranslations("hello");

  return (
    <div>
      Tour
      <p>
        <b>{t("client")}</b>
      </p>
    </div>
  );
}
