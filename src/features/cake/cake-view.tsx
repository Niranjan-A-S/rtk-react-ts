import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customUseSelector, RootState, StoreDispatch } from "../../types";

import { cakeSlice } from "./cake-slice";

export const CakeView = () => {
  const numOfCakes = customUseSelector((state) => state.cake.numOfCakes);

  const dispatch = useDispatch<StoreDispatch>();

  const [value, setValue] = useState<number>(1);

  return (
    <div>
      <h1>Number of Cakes - {numOfCakes} </h1>
      <button onClick={() => dispatch(cakeSlice.actions.ordered(value))}>
        Order Cakes
      </button>
      <button onClick={() => dispatch(cakeSlice.actions.restocked(value))}>
        Restock Cakes
      </button>
      <input
        type={"number"}
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      />
    </div>
  );
};
