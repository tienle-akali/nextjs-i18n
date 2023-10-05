import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "../../../get-dictionary-multiple";

const getDict = async ({ lang }: { lang: string }) => {
  return await getDictionary("feed", lang);
};

export default async function Root({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDict({ lang });

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
