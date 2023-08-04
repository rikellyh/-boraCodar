import { useEffect, useState } from "react";

export const useTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const formattedTime = `Hoje - ${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      return formattedTime;
    };

    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { currentTime };
};
