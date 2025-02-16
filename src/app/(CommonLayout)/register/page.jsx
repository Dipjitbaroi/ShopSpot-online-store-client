import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 p-6">
          <img
            src="https://res.cloudinary.com/dqp2vi7h1/image/upload/v1739711093/a1c7dc5b68a42239311e510f54d8cd59_1_kotstj.jpg"
            alt="Signup"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="p-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          <div className="space-y-4">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full"
            />
            <Input type="password" placeholder="Password" className="w-full" />
          </div>

          <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-4">
            Create Account
          </Button>

          <Button
            variant="outline"
            className="w-full mt-2 flex items-center justify-center gap-2">
            <FcGoogle className="text-lg" /> Sign up with Google
          </Button>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-black font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
