"use client";
import { useTranslations } from "next-intl";

export default function Local() {
  const t = useTranslations("hello");

  return (
    <div>
      <p>{t("client")}</p>
    </div>
  );
}
