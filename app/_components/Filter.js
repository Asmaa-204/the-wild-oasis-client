"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const filtersData = [
  {
    filter: "all",
    text: "All cabins",
  },
  {
    filter: "small",
    text: "2 - 3 guests",
  },
  {
    filter: "medium",
    text: " 4 - 7 guests",
  },
  {
    filter: "large",
    text: " 8 - 12 guests",
  },
];

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="border border-primary-800 flex">
      {filtersData.map((filterObj) => (
        <Button
          key={filterObj.filter}
          filter={filterObj.filter}
          text={filterObj.text}
          handleFilter={handleFilter}
          activeFilter={searchParams.get("capacity")}
        />
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, text }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {text}
    </button>
  );
}

export default Filter;
