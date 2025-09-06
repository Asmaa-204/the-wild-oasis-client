import { getCabins } from "../_lib/data-service";
import CabinCard from "../_components/CabinCard";
import { connection } from "next/server";

export default async function CabinsList({ filter }) {
  await connection();
  const cabins = await getCabins();

  if (!cabins.length) return;

  let filteredCabins;

  if (filter === "all") filteredCabins = cabins;
  else if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  else if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity < 8 && cabin.maxCapacity > 3
    );
  else if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
