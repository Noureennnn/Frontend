import { useEffect,useState } from "react";
import { apiGet } from "../api";

export const LocationTable = () => {
    const [locations,setLocations] = useState([]);
    useEffect(() => {
        apiGet("/events/locationsBarChart")
        .then((data) => setLocations(data)).
        catch((err) => console.error("Failed to fetch locations",err));
    },[]);
  return (
<div className="">
      <table className=" w-[300px] text-left mt-[15px] ml-[60px] border-[3px] bg-[#ffffff] rounded-[20px]">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-r-[2px] px-4 py-2 p-[10px] rounded-[20]">Location</th>
            <th className="border-none border-gray-300 py-[3px] px-[7px]">Count</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((loc) => (
            <tr key={loc._id}>
              <td className="border-t-[2px] border-r-[2px] py-[5px] font-[600]"><p>{loc._id}</p></td>
              <td className="border-t-[2px] px-[10px] py-2 font-[600]">{loc.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
