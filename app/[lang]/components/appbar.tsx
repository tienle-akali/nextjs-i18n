import Link from "next/link";

const menu = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Local",
    path: "local",
  },
];

export default function TopAppbar({ lang }: { lang: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      {menu.map((i) => (
        <Link href={`/${lang}/${i.path}`}>{i.label}</Link>
      ))}
    </div>
  );
}
