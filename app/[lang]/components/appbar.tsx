import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";

const menu = [
  {
    label: "Home (Server page)",
    path: "",
  },
  {
    label: "Client",
    path: "client",
  },
  {
    label: "Feed",
    path: "feed",
  },
  {
    label: "Hotel",
    path: "hotel",
  },
  {
    label: "Tour",
    path: "tour",
  },
];

export default function TopAppbar({ lang }: { lang: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
        }}
      >
        {menu.map((i) => (
          <Link href={`/${lang}/${i.path}`} key={i.path}>
            {i.label}
          </Link>
        ))}
      </div>

      <LocaleSwitcher lang={lang} />
    </div>
  );
}
