import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p>loading cabins data...</p>
    </div>
  );
}
