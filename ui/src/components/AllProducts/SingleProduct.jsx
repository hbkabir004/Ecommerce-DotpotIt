import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { CartContext, ProductContext } from '../../App';
import StarRating from './StarRating';

const SingleProduct = () => {
    const products = useContext(ProductContext)
    const selectedProduct = useLoaderData();
    // console.log({ selectedProduct });
    const { image, discount, icon, name, rating, originalPrice, discountedPrice } = selectedProduct;

    const [cart, setCart] = useContext(CartContext);

    // Handle Cart Data with Toast Messages
    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(
            (existingProduct) => existingProduct._id === product._id
        );

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter(
                (existingProduct) => existingProduct._id !== product._id
            );
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(product.id);

        // Trigger toast notification
        toast.success(`${product.name} added to cart successfully!`);
    };

    return (
        <div className="flex flex-col items-start pb-4 px-10 w-[25%] border border-r max-md:mt-4 rounded-xl overflow-hidden mx-auto my-10">
            <div className="flex overflow-hidden flex-col py-1 mb-2 w-full text-xs font-extrabold tracking-tight text-center text-red-50 uppercase">
                <img
                    loading="lazy"
                    src={image}
                    alt={name}
                    className="object-cover inset-0 size-min"
                />

                <div className="flex relative z-10 gap-8 self-start mt-0 max-md:mr-0">
                    {discount && (
                        <div className="p-2.5 my-auto bg-red-600 rounded-2xl">
                            {discount}
                        </div>
                    )}
                    {icon && (
                        <img
                            loading="lazy"
                            src={icon}
                            alt=""
                            className="object-contain shrink-0 w-8 rounded-2xl aspect-square"
                        />
                    )}
                </div>
            </div>

            <h2 className="text-lg font-semibold tracking-tight leading-5 text-gray-950">
                {name}
            </h2>
            <StarRating rating={rating} />

            <div className="flex gap-2 mt-5 tracking-tight leading-none whitespace-nowrap">
                <div className="grow text-2xl font-bold text-red-600">
                    ${discountedPrice}
                </div>
                <div className="text-lg font-medium text-gray-900 line-through ml-2">
                    ${originalPrice}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;