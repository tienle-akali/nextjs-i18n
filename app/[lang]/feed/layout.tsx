import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "../../../get-dictionary-multiple";

export default async function Root({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDictionary("feed", lang);

  return (
    <div>
      <NextIntlClientProvider locale={lang} messages={dictionary}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
