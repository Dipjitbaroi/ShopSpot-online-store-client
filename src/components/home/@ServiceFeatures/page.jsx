import { Truck, PhoneOutgoing, DollarSign } from "lucide-react";

const serviceData = [
  {
    id: 1,
    icon: <Truck className="h-10 w-10 text-white mx-auto " />,
    title: "FREE AND FAST DELIVERY",
    description: "Enjoy free delivery on all orders over $99",
  },
  {
    id: 2,
    icon: (
      <PhoneOutgoing className="h-10 w-10  justify-center text-white mx-auto " />
    ),
    title: "24/7 CUSTOMER SERVICE",
    description: "Round-the-clock support for all your needs",
  },
  {
    id: 3,
    icon: <DollarSign className="h-10 w-10 text-white mx-auto " />,
    title: "MONEY BACK GUARANTEE",
    description: "30-day hassle-free return policy",
  },
];

const ServiceFeatures = () => {
  return (
    <section className=" mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow  ">
              <div
                className="w-20 h-20 mx-auto rounded-full  flex items-center  justify-center 
                         bg-gray-300 text-gray-100 group-hover:bg-white group-hover:text-gray-800
                         transition-colors">
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center  justify-center 
                         bg-gray-800 text-gray-100 group-hover:bg-white group-hover:text-gray-800
                         transition-colors ">
                  <p className=""> {service.icon}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
