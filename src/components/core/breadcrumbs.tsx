import Image from "next/image";
import Link from "next/link";

type Page = {
  name: string;
  href: string;
};

export default function Breadcrumbs({ pages }: { pages: Page[] }) {
  return (
    <div className="main__header">
      <Link href="/">Главная</Link>
      {pages.map((page) => (
        <BreadCrumbsPoint key={page.name} page={page} />
      ))}
    </div>
  );
}

function BreadCrumbsPoint({ page }: { page: Page }) {
  return (
    <>
      <Image alt="arrow" width={7.79} height={13.36} src="/icons/arrow.svg" />
      <Link href={page.href}>{page.name}</Link>
    </>
  );
}
