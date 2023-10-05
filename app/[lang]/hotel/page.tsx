"use client";
import { useTranslations } from "next-intl";

export default function Hotel() {
  const t = useTranslations("hello");

  return (
    <div>
      Hotel
      <p>
        <b>{t("client")}</b>
      </p>
    </div>
  );
}
