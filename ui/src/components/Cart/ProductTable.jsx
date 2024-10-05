import React from 'react';

const CartTable = ({ cartItems }) => {
    // Flatten the nested array and filter out null/undefined values.
    const products = cartItems.flat().filter(Boolean);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Product Name</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Brand</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Total</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={product.id} className="bg-white border-b hover:bg-gray-100">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">{product.categoryName}</td>
                                <td className="px-6 py-4">{product.brand}</td>
                                <td className="px-6 py-4">{product.quantity}</td>
                                <td className="px-6 py-4">${product.price}</td>
                                <td className="px-6 py-4">${(product.price * product.quantity).toFixed(2)}</td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        className="font-medium text-red-600 hover:underline"
                                        onClick={() => console.log('Remove product with ID:', product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center px-6 py-4">
                                No products in the cart.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
