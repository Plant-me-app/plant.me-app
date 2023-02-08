import React, { createContext, useState } from "react";

export const PlantContext = createContext(null);

export const PlantContextProvider = (props) => {
  const [plantContext, setPlantContext] = useState(null);

  return (
    <PlantContext.Provider
      value={{
        plantContext,
        setPlantContext,
      }}
    >
      {props.children}
    </PlantContext.Provider>
  );
};
