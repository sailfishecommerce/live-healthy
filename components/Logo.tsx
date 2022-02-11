/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <>
      <Link href="/" passHref>
        <a className={className}>
          <Image src="/logo.png" alt="Bandicoot" height={70} width={200} />
        </a>
      </Link>
    </>
  );
}
