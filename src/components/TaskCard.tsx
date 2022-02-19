import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChecklIcon from "../../public/check.svg";
import CogIcon from "../../public/cog.svg";

export interface ITask {
  id: string;
  name: string;
  image: string;
}

interface TaskCardProps {
  task: ITask;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-md">
      <button onClick={() => setShowCard(!showCard)} className="w-full">
        <div className="p-6 flex justify-between gap-3 ">

          <div className="flex flex-col justify-between">
            <h3 className="text-primary font-bold text-xl">{task.name}</h3>
            <h3 className="text-primary ">Every 5 days</h3>
          </div>

          <div className="flex flex-col gap-2">
            <section className=" flex justify-center">
              <svg
                width="35"
                height="35"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="1"
                  cx="75"
                  cy="75"
                  r="60"
                  stroke="#061B4D"
                  strokeWidth="15"
                />
              </svg>
            </section>
            <h3 className="text-primary ">11 days ago</h3>
          </div>
          
        </div>
      </button>

      {showCard && (
        <div className="p-6 pt-0 flex justify-between">
          <button className=" bg-green py-2 px-12 rounded-md shadow-sm">
          <Image src={ChecklIcon} alt="Check icon" height={25} width={25} />
          </button>

          <button className="bg-secondary py-2 px-12 rounded-md shadow-sm">
          <Image src={CogIcon} alt="Cog icon" height={25} width={25} />
          </button>
        </div>
      )}
    </div>
  );
};
export default TaskCard;
