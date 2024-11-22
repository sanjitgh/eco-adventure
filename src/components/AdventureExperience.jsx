import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const AdventureExperience = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="py-24 container mx-auto px-3">
        <h1 className="sm:text-5xl font-bold text-2xl mb-3 text-cyan-950 uppercase">Adventure Experiences</h1>
        <p className="md:text-lg text-base font-medium sm:font-bold text-cyan-950">
          Popular ski resorts recommended by our Experts
        </p>
        {/* card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-7">
            {
                data.map(data => <Card key={data.id} data={data}></Card>)
            }
        </div>
      </div>
    </div>
  );
};

export default AdventureExperience;
