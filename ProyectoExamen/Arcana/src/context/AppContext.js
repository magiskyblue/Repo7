import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [animations, setAnimations] = useState(true);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [
      ...prev,
      {
        ...appointment,
        id: Date.now().toString(),
      },
    ]);
  };

  const removeAppointment = (id) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id),
    );
  };

  return (
    <AppContext.Provider
      value={{
        appointments,
        addAppointment,
        removeAppointment,
        darkMode,
        setDarkMode,
        animations,
        setAnimations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
