import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="relative w-[187.33px] h-[42px] max-sm:w-[146.67px] max-sm:h-[32.88px] logo"
    >
      <Image src={"/logo.svg"} fill alt="logo" />
    </Link>
  );
}
