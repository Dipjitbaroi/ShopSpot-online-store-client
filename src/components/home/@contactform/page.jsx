import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mt-10 mx-auto bg-white p-8 shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left Column (Contact Info) */}
      <div className="md:w-1/3 bg-white border-r pr-6">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold">Call To Us</h2>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-800 font-medium text-sm">
            Phone: +880161112222
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="bg-red-500 text-white p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold">Write To Us</h2>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-800 text-sm font-medium">
            Emails: customer@exclusive.com
          </p>
          <p className="text-gray-800 font-medium text-sm">
            support@exclusive.com
          </p>
        </div>
      </div>

      {/* Right Column (Contact Form) */}
      <div className="md:w-2/3 bg-white">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full h-40 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"></textarea>
          <button
            type="submit"
            className="w-[180px] bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
