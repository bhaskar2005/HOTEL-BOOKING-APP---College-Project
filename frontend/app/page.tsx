// app/hotels/page.tsx

type Hotel = {
  Hotel_ID: number;
  Hotel_Name: string;
  City: string;
  Star_Rating: number;
};

async function getHotels() {
  const res = await fetch("http://127.0.0.1:8000/api/hotels/Delhi", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return res.json();
}

export default async function HotelsPage() {
  const data = await getHotels();
  const hotels: Hotel[] = Array.isArray(data) ? data : (data.hotels ?? []);

  return (
    <div>
      {hotels.map((hotel) => (
        <p key={hotel.Hotel_ID}>{hotel.Hotel_Name}</p>
      ))}
    </div>
  );
}
