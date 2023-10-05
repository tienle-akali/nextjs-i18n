import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "../../get-dictionary-multiple";
import { i18n } from "../../i18n-config";
import TopAppbar from "./components/appbar";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = await getDictionary("common", lang);

  return (
    <html lang={lang}>
      <body style={{ margin: 0 }}>
        <NextIntlClientProvider locale={lang} messages={dictionary}>
          <main style={{ maxWidth: 960, margin: "auto", padding: `0px 16px` }}>
            <TopAppbar lang={lang} />

            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
