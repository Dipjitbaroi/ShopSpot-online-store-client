import { Button } from "@/components/UI/button";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* LEFT COLUMN: BILLING FORM */}
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="streetAddress">
                Street Address *
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Street Address"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="apt">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apt"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Apartment, floor, etc. (optional)"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="townCity">
                Town/City *
              </label>
              <input
                type="text"
                id="townCity"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Town/City"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Email Address"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="saveInfo"
                className="h-4 w-4 border-gray-300"
              />
              <label htmlFor="saveInfo" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: ORDER SUMMARY */}
        <div className="md:col-span-5">
          <div className="bg-white p-4 shadow rounded space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm">LCD Monitor</p>
              <p className="font-semibold">$650</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <p className="text-sm">HI Gamepad</p>
              <p className="font-semibold">$1100</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="font-semibold">$1750</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Shipping</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="flex items-center justify-between border-t pt-2">
              <p className="text-sm">Total</p>
              <p className="font-semibold">$1750</p>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="bank" />
                <label htmlFor="bank">Bank</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="cod" />
                <label htmlFor="cod">Cash on delivery</label>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">We accept:</span>

                <Image
                  src="https://static.vecteezy.com/system/resources/previews/020/336/392/non_2x/visa-logo-visa-icon-free-free-vector.jpg"
                  alt="Visa"
                  width={40}
                  height={25}
                />
                <Image
                  src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
                  alt="Mastercard"
                  width={40}
                  height={25}
                />
                <Image
                  src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                  alt="PayPal"
                  width={40}
                  height={25}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Apply Coupon
              </Button>
            </div>

            <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
