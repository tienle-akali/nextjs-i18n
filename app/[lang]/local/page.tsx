"use client";
import { useTranslations } from "next-intl";

export default function Local() {
  const t = useTranslations("hello");

  return (
    <div>
      <p>
        <b>{t("client")}</b>
      </p>
    </div>
  );
}
