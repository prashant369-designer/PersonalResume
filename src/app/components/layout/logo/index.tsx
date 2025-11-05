import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={getImgPath("/images/logo/logo.png")}
          alt="logo"
          width={140}
          height={140}
        />
      </Link>
    </>
  );
};

export default Logo;
