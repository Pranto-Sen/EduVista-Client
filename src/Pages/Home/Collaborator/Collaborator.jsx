import React from "react";

const Collaborator = () => {
  const partners = [
    {
      name: "cisco",
      logoSrc: "https://i.ibb.co/GFYmGqW/cisco.jpg",
      description: "A brief description of the partnership with Partner",
    },
    {
      name: "IEEE",
      logoSrc: "https://i.ibb.co/mGHjxwj/ieee.jpg",
      description: "A brief description of the partnership with Partner",
    },
    {
      name: "Udemy",
      logoSrc: "https://i.ibb.co/PMdC97R/download.png",
      description: "A brief description of the partnership with Partner",
    },
    {
      name: "Oracal",
      logoSrc: "https://i.ibb.co/M8F7VJM/oracle.jpg",
      description: "A brief description of the partnership with Partner",
    },
    {
      name: "Microsoft",
      logoSrc: "https://i.ibb.co/vw4FR3L/msiap.jpg",
      description: "A brief description of the partnership with Partner",
    },
    // Add more partners as needed
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4 pb-4">Our Partners</h2>
        <div className="flex flex-wrap justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="mx-4 mb-4 ">
              <div className="flex items-center justify-center">
                {" "}
                <img
                  src={partner.logoSrc}
                  alt={`${partner.name} Logo`}
                  className="h-16 flex items-center justify-center"
                />
              </div>

              <p className="mt-2 text-xl ">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
