"use client";
import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

export default function Feed() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      Feed
      <div>
        <label htmlFor="number">Select number to change language cases</label>
        <select id="number" onChange={handleChange}>
          {[0, 1, 1234].map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <p>
        <b>{t("title.client", { number: value })}</b>
      </p>
      <p>{tCommon("yes")}</p>
    </div>
  );
}
