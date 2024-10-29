import Link from "next/link";

// Component untuk Kartu Layanan
const ServiceCard = ({ title, description,href }) => (
    <Link href={`${href}`} className="hover:scale-95 transform transition-all duration-75 p-4 border border-gray-200 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );

  export default ServiceCard