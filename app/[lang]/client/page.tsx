"use client";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export default function Client() {
  const t = useTranslations("user");

  const [data, setData] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);

    setData(
      JSON.stringify({
        content: data.get("content"),
      })
    );
  };

  return (
    <div>
      Client
      <p>
        <b>{t("editor.title")}</b>
      </p>
      <form method="POST" onSubmit={handleSubmit}>
        <textarea
          name="content"
          rows={10}
          placeholder={t("editor.placeholder")}
          style={{ width: "100%", display: "block" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            padding: 16,
          }}
        >
          <button type="submit">{t("editor.save")}</button>
          <button type="reset">{t("editor.close")}</button>
        </div>
      </form>
      <p>
        {t("editor.yourInput")}: <b>{data}</b>
      </p>
    </div>
  );
}
