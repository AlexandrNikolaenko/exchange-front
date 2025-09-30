import Image from "next/image";
import Link from "next/link";

export default function ShowAllLink() {
  return (
    <Link href={"#"} className="all-review">
      Все отзывы
      <Image
        width={47}
        height={4.39}
        alt="show all"
        src={"/icons/arrow-right.svg"}
      />
    </Link>
  );
}
