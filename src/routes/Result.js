import { useLocation, NavLink } from "react-router-dom";

export function Result() {
  const location = useLocation();
  let state = location.state;

  console.log("state", state);
  let result = {};
  if (
    (state.Frequency === "Everyday") |
    (state.Frequency === "Only Workdays")
  ) {
    result = { ...result, price: "$300+" };
  } else {
    result = { ...result, price: "$0 - $300" };
  }
  if (result.Useage === "Work/Study") {
    result = {
      ...result,
      Brand: "APPLE",
      RAM_SiZE: "8GB +",
      os: "Mac",
      weight: "ThinNlight",
    };
  } else if (result.Useage === "Play games") {
    result = {
      ...result,
      Brand: "ALIENWARE",
      RAM_SiZE: "16B +",
      os: "Window",
      weight: "Gaming",
    };
  } else {
    result = {
      ...result,
      Brand: "Levono",
      RAM_SiZE: "4GB +",
      os: "Window",
      weight: "ThinNlight",
    };
  }

  return (
    <main className="w-full h-full max-w-screen-md flex flex-col">
      <h1 className="font-medium text-2xl md:text-3xl text-slate-700 my-3 mb-4 ml-2 md:ml-24">
        Here's the best choice for you.
      </h1>
      <div className="flex flex-col justify-start item-start">
        <div className="mb-2 md:text-xl ml-2 md:ml-24">Price: {result.price}</div>
        <div className="mb-2 md:text-xl ml-2 md:ml-24 ">Brand: {result.Brand}</div>
        <div className="mb-2 md:text-xl ml-2 md:ml-24 ">RAM Size: {result.RAM_SiZE}</div>
        <div className="mb-2 md:text-xl ml-2 md:ml-24 ">OS: {result.os}</div>
        <div className="ml-2 md:text-xl md:ml-24 ">Weight: {result.weight}</div>
      </div>
      <h1 className="ml-2 font-medium text-3xl text-slate-700 mb-4 md:ml-24 md:mb-0">
        ___
      </h1>
      <div className="ml-2 flex">
        <NavLink
          to="/takeTest"
          className="mb-4 bg-slate-500 rounded-lg pl-2 py-2 pr-8 text-white text-center hover:bg-slate-700 md:ml-24 md:mt-4 md:pr-24"
          style={{ textDecoration: 'none' }}
        >
          Back
        </NavLink>
      </div>
    </main>
  );
}
