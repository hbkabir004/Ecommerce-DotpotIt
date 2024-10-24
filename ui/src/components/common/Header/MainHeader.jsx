import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../App";
import DeliveryInfo from "./DeliveryInfo";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";

function MainHeader() {
    const [cart, setCart] = useContext(CartContext);
    // const myCart = cart.length;

    // console.log("Cart Length", myCart);

    return (
        <header className="flex flex-col justify-center items-center px-16 py-4 bg-white border border-solid max-md:px-5">
            <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1363px] max-md:max-w-full">
                <Link to="/">
                    <div className="flex gap-2.5 text-2xl font-bold text-black whitespace-nowrap">
                        <img
                            loading="lazy"
                            src="/icons/logo.svg"
                            alt="JinStore Logo"
                            className="object-contain shrink-0 rounded-none aspect-[1.15] w-[45px]"
                        />
                        <div>JinStore</div>
                    </div>
                </Link>
                <div className="flex gap-3.5 items-center self-stretch">
                    <DeliveryInfo />
                    <SearchBar />
                </div>
                <div className="flex gap-3.5 mt-1.5 tracking-tight leading-tight text-gray-950">
                    <UserAccount />
                    <IconButton
                        src="/icons/wishlist-icon.png"
                        alt="Notifications"
                    />
                    <Link to="/cart">
                        <div className="relative justify-center mt-2">
                            <IconButton
                                src="/icons/cart-icon.png"
                                alt="Cart"
                            />
                            <p className="bg-red-600 absolute top-1 right-0 translate-x-1/2 -translate-y-1/2 rounded-full text-white w-[20px] h-[20px] leading-[20px] inline-block text-[12px] font-normal text-center">{cart.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
