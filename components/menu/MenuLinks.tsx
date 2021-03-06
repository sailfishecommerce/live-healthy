import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

import menuLinks from "@/json/menu.json";
import useSlidingTab from "@/hooks/useSlidingTab";
import PageLink from "@/components/menu/PageLink";
import Whatsapp from "@/components/icons/Whatsapp";
import CartIcon from "@/components/icons/CartIcon";

export default function MenuLinks({ cart }: any) {
  const { updateSlideTab } = useSlidingTab();

  return (
    <>
      <div className="hidden md:flex items-center">
        <Whatsapp />
        <span className="font-bold text-green-500 mx-1">Whatsapp:</span>
        9449 2060
      </div>
      <ul className="hidden lg:flex items-center justify-between w-1/3">
        {menuLinks.primaryMenu.map((menuItem, index) => (
          <PageLink key={index} menuItem={menuItem} />
        ))}
      </ul>
      <div className="icons flex items-center justify-between w-16">
        <button
          onClick={() => updateSlideTab("SLIDING-CART")}
          className="cart-icon relative"
        >
          <CartIcon />
          <div className="bg-yellow-500 rounded-full flex items-center text-white justify-center -mt-8 text-xs ml-2 z-5 absolute h-4 w-4">
            {cart?.items?.length}
          </div>
        </button>
        <Link href="/account" passHref>
          <button title="account" className="account">
            <IoPersonOutline className="hover:text-green-500" size={20} />
          </button>
        </Link>
      </div>
    </>
  );
}
