"use client";
import { Button } from "@/components/UI/button";
import Link from "next/link";
import { useState } from "react";

const fakeCartData = [
  {
    id: "1dw342",
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image:
      "https://images.philips.com/is/image/philipsconsumer/1fab7b0fb89c44689288b0200122e34c?wid=700&hei=700&$pnglarge$",
    productCode: "MON-1234",
    sizeInStock: 5,
  },
  {
    id: "1dw3342",
    name: "HI Gamepad",
    price: 550,
    quantity: 2,
    image:
      "https://img.drz.lazcdn.com/static/bd/p/90293ea6be240bd3e192b6f196723147.jpg_960x960q80.jpg_.webp",
    productCode: "GPD-5678",
    sizeInStock: 10,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(fakeCartData);

  const updateQuantity = (index, value) => {
    const newCart = [...cart];
    newCart[index].quantity = value;
    setCart(newCart);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="border rounded-lg p-4 bg-white shadow">
        {cart.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">
                Product Code: {item.productCode}
              </p>
            </div>
            <p className="font-bold">${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(index, parseInt(e.target.value) || 1)
              }
              min={1}
              max={item.sizeInStock}
              className="w-16 p-1 border rounded text-center"
            />
            <p className="font-bold">${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between mt-4 font-bold text-lg">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        <Link href={"/checkout"}>
          <Button className="w-full mt-4 bg-red-500 hover:bg-red-600">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
