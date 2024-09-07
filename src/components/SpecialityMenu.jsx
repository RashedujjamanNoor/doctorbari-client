import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800 "
    >
      <h1 className="text-3xl font-medium">Find by Speciality </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-4 w-full overflow-scroll py-3">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col justify-center items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-1 transition-all duration-500"
          >
            <img src={item.image} alt="" className="w-16 sm:w-24 mb-2" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
