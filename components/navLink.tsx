import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  close: any;
};

const NavLink: React.FC<Props> = ({ children, href, close }) => {
  const router = useRouter();
  console.log(router.asPath == href);
  return (
    <Link href={href}>
      <a
        className={router.asPath == href ? " text-emerald-200" : ""}
        onClick={close}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
