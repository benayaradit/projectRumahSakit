const Testimonial = ({ name, feedback }) => (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-gray-700 italic">"{feedback}"</p>
      <p className="text-teal-700 font-semibold mt-2 text-right">- {name}</p>
    </div>
  );

  export default Testimonial