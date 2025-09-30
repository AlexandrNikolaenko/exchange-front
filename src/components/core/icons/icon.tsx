import Image from "next/image";

export default function Icon() {
  return <></>;
}

export function ContactsIcon({ src, alt }: { src: string; alt: string }) {
  return <Image alt={alt} src={src} width={24} height={24} />;
}
