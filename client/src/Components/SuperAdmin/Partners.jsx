import React, { useState } from "react";

const Partners = () => {
  const [Partner, setPartner] = useState(true);
  const HandleClick = () => {
    setPartner(!Partner);
  };

  const PartnarData = [
    {
      Name: "Aesop",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <h2
          className={`cursor-pointer mb-4 ${Partner ? "text-blue-500" : ""}`}
          onClick={HandleClick}
        >
          Partners
        </h2>
        <h2
          className={`cursor-pointer mb-4 ${!Partner ? "text-blue-500" : ""}`}
          onClick={HandleClick}
        >
          Create
        </h2>
      </div>
      {Partner ? (
        <table className="min-w-full table-auto ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {PartnarData.map((request, index) => (
              <tr key={index} className="border-b bg-white hover:bg-gray-100">
                <td className="px-4 py-2">{request.Name}</td>
                <td className="px-4 py-2">
                  <img src={request.Image} alt="" className="h-20 w-20" />
                </td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full mr-2">
                    Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full mr-2">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className=" flex flex-col space-y-2">
         <h1>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
         </h1>
            <h1>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="file" />
            </h1>
          <h1 className="">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white">
              Save
            </button>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Partners;
