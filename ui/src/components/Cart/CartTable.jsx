import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

const CartTable = ({ cartItems, onDeleteProduct }) => {
    // Flatten the nested array and filter out null/undefined values.
    const cartProducts = cartItems.flat().filter(Boolean);

    // Calculate the total number of items.
    const totalItems = cartProducts.length;

    // Calculate the subtotal of the cart.
    const subtotal = cartProducts.reduce(
        (acc, product) => acc + Number(product.discountedPrice) * Number(product.quantity),
        0
    );

    return (
        <>
            {totalItems > 0 ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Product Name</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Total</th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        {cartProducts.map((product) => (
                            <tbody key={product._id}>
                                <tr className="bg-white border-b hover:bg-gray-100">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        {product.name}
                                    </th>
                                    <td className="px-6 py-4">{product.quantity}</td>
                                    <td className="px-6 py-4">${product.discountedPrice}</td>
                                    <td className="px-6 py-4">${(Number(product.discountedPrice) * Number(product.quantity)).toFixed(2)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            className="font-medium text-red-600 hover:underline"
                                            onClick={() => onDeleteProduct(product._id, product.name)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                    {/* Table Footer */}
                    <section className="flex items-cente">
                        <div className="w-full">
                            <div className="relative overflow-hidden bg-gray-50 rounded-b-lg shadow-md">
                                <nav className="flex flex-row items-center justify-end p-4" aria-label="Table navigation">
                                    <p className="text-sm">
                                        <span className="font-normal text-gray-500">Subtotal:</span>
                                        <span className="font-semibold text-gray-900 pl-2 mr-40">${subtotal}</span>
                                    </p>
                                    <Link to="/invoice">
                                        <button
                                            type="button"
                                            className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 focus:outline-none "
                                        >
                                            Checkout
                                        </button>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default CartTable;
