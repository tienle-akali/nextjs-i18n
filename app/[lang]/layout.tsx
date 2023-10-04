import { i18n } from "../../i18n-config";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import TopAppbar from "./components/appbar";
import LocaleSwitcher from "./components/locale-switcher";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  let messages;
  try {
    messages = (await import(`../../dictionaries/${params.lang}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.lang}>
      <body>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          <LocaleSwitcher />
          <TopAppbar lang={params.lang} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
