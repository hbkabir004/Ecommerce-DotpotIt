import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center mx-auto font-bold text-center max-w-[760px] py-20">
            <img
                loading="lazy"
                src="/empty-cart.svg"
                className="object-contain w-40 max-w-full aspect-square"
                alt="Empty cart illustration"
            />
            <p className="self-stretch px-16 py-6 mt-16 w-full text-lg tracking-tight text-red-500 uppercase border border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                Your cart is currently empty.
            </p>
            <Link to="/">
                <button className="px-5 py-4 mt-5 max-w-full text-sm tracking-tight leading-3 text-white rounded-lg bg-neutral-800 w-[237px]">
                    Return to HOME
                </button>
            </Link>
        </div>
    );
};

export default EmptyCart;