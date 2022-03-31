import { createContext, useContext } from "react";

const AboutContext = createContext();

function AboutContextProvider({ children }) {
  const about = {
    name: "Gbemu Terra",
    hobbies: ["Dancing", "Skating", "Skipping"],
    bio: "Aliqua occaecat cillum non ea ipsum esse esse proident pariatur deserunt."
  };

  return (
    <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>
  );
}

function useAboutContext() {
  return useContext(AboutContext);
}

export { AboutContextProvider, useAboutContext };
