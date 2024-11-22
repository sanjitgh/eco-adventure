import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, adventureTitle, image, ecoFriendlyFeatures } = data;
  return (
    <div className="p-5 border rounded-xl flex flex-col" data-aos="fade-up" data-aos-delay="200">
      <img
        className="w-full max-h-[290px] mb-2 rounded-xl"
        src={image}
        alt=""
      />
      <h3 className="font-medium text-cyan-950 text-xl sm:text-2xl my-2">
        {adventureTitle}
      </h3>
      <ul className="text-gray-500">
        {ecoFriendlyFeatures.map((features, idx) => (
          <li key={idx} className="list-disc ms-5">
            {features}
          </li>
        ))}
      </ul>
      <div className="text-end mt-2">
        <Link
          to={`/details/${id}`}
          className="btn rounded-none bg-blue-500 hover:bg-blue-600 text-white"
          style={{ borderTopLeftRadius: "25px", borderBottomRightRadius: "25px"}}
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
