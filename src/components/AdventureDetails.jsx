import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { GiMountainCave } from "react-icons/gi";
import { useEffect } from "react";

const AdventureDetails = () => {
  useEffect(() => {
    document.title = `${adventureTitle} | Eco-Adventure`;
  }, []);
  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = useLoaderData();

  const handelClick = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com/", "_blank");
    } else {
      document.getElementById("my_modal_3").showModal();
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-80 bg-[url('https://i.ibb.co.com/DRPg5m2/pexels-maryamyounis-10280401.webp')] bg-no-repeat bg-cover bg-bottom relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="font-bold text-5xl text-white z-10 tracking-wide">
          <i>Details</i>
        </h1>
      </div>
      <div className="bg-slate-100 md:px-10 px-3 py-20">
        <div className="container mx-auto bg-white p-5 md:p-10 rounded-xl">
          <h1 className="font-bold text-3xl text-cyan-950 flex gap-3 items-center">
            <GiMountainCave className="text-6xl" /> {adventureTitle}
          </h1>

          <p className="font-medium mt-3 text-gray-500">{shortDescription}</p>

          <img
            className="w-full max-h-[800px] my-6 rounded"
            src={image}
            alt=""
          />

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <ul className="space-y-3">
              <li>
                <b>Category :</b> {categoryName}
              </li>

              <li>
                <b>AdventureLevel : </b> {adventureLevel}
              </li>
              <li>
                <b>Location :</b> {location}
              </li>
              <li>
                <b>Duration :</b> {duration}
              </li>

              <li>
                <b>Max Group Size : </b>
                {maxGroupSize}
              </li>
              <li>
                <b>Eco Friendly Features :</b>
                <blockquote className="border-l-[3px] pl-4 border-blue-500">
                  {ecoFriendlyFeatures.map((item, idx) => (
                    <li className="list-disc ms-4" key={idx}>
                      {item}
                    </li>
                  ))}
                </blockquote>
              </li>
            </ul>
            <ul className="space-y-3 pt-4 md:pt-0">
              <li>
                <b>Adventure Cost :</b>{" "}
                <span className="text-blue-500">{adventureCost}$</span>
              </li>
              <li>
                <b>Booking Availability :</b>{" "}
                <span className="text-blue-500">{bookingAvailability}</span>
              </li>
              <li>
                <b>IncludedItems :</b>{" "}
                <blockquote className="border-l-[3px] pl-4 border-blue-500">
                  {includedItems.map((item, idx) => (
                    <li className="list-disc ms-4" key={idx}>
                      {item}
                    </li>
                  ))}
                </blockquote>
              </li>
              <li>
                <b>Special Instructions :</b>{" "}
                <blockquote className="border-l-[3px] pl-4 border-blue-500">
                  {specialInstructions.map((item, idx) => (
                    <li className="list-disc ms-4" key={idx}>
                      {item}
                    </li>
                  ))}
                </blockquote>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <button
              onClick={handelClick}
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium"
            >
              Talk with Expert
            </button>
          </div>
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetails;
