import moment from "moment";
import { useEffect, useRef } from "react";

const Clock = () => {
  const clockRef = useRef();

  useEffect(() => {
    // Update the clock every second
    const interval = setInterval(() => {
      if (clockRef.current) {
        clockRef.current.innerHTML = moment().format('LTS');
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 ref={clockRef} className="text-[15vw]  h-[calc(100vh-1.25rem)] w-full bg-black/20 flex justify-center items-center font-clockFont text-white">{moment().format('LTS')}</h1>
    </div>
  );
};

export default Clock;
