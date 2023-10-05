"use client";
import { useTranslations } from "next-intl";

export default function Client() {
  const t = useTranslations("hello");

  return (
    <div>
      Client
      <p>
        <b>{t("client")}</b>
      </p>
    </div>
  );
}
