import Image from "next/image";
import Link from "next/link";

export default function ShowAllLink({link='#', text='Все отзывы'}: {link?: string, text?: string}) {
  return (
    <Link href={link} className="all-review">
      {text}
      <Image
        width={47}
        height={4.39}
        alt="show all"
        src={"/icons/arrow-right.svg"}
      />
    </Link>
  );
}
