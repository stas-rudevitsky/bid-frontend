import { useGetHotels } from "@/api/HotelsFormApi";
import { Hotel } from "@/types";
import React, { useEffect, useState } from "react";

interface Props {
  data: (hotelData: Hotel) => void;
}

const HotelDropdown: React.FC<Props> = ({ data }) => {

  const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);


  // console.log("selectedHotel====", selectedHotel);

  const { hotels } = useGetHotels();
  //  console.log(hotels)

  useEffect(() => {
    if (selectedHotel) {
      data(selectedHotel);
    }
  }, [selectedHotel]);

  useEffect(() => {
    if (hotels) {
      setHotelsData(hotels);
    }
  }, [hotels]);

  const handleHotelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedHotel = hotelsData.find((hotel) => hotel._id === selectedId);
    setSelectedHotel(selectedHotel || null);
    // console.log(selectedHotel);
  };

  return (
    <div>
      <label htmlFor="hotel-select">בחירת בית מלון:</label>
      <select className="border" id="hotel-select" onChange={handleHotelChange}>
        <option value="">--Please choose an option--</option>
        {hotelsData.map((hotel) => (
          <option key={hotel._id} value={hotel._id}>
            {hotel.hotelName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HotelDropdown;




