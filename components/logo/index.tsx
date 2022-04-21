import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" passHref>
      <a title="welcome to live healthy" className={className}>
        <img
          src="/logo.webp"
          alt="logo"
          height={50}
          width={130}
          layout="responsive"
        />
      </a>
    </Link>
  );
}
