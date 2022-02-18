import Link from "next/link";

export interface ITask {
  id: string;
  name: string;
  image: string;
}

interface TaskCardProps {
  task: ITask;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Link href={`/task/${task.id}`}>
      <a>
        <div className="bg-white p-6 flex justify-between gap-3 shadow-md rounded-md">
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
      </a>
    </Link>
  );
};
export default TaskCard;
