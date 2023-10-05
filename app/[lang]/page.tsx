import { getDictionary } from "../../get-dictionary-multiple";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary("home", lang);

  return (
    <div>
      <p>
        Current locale: <b>{lang}</b>
      </p>
      <p>
        This text is rendered on the server: <b>{dictionary.hello.server}</b>
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
