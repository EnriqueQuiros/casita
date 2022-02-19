import Image from "next/image";
import Link from "next/link";
import RoomIcon from "../../public/room.svg";
export interface IRoom {
  id: string;
  name: string;
  image: string;
}

interface RoomCardProps {
  room: IRoom;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Link href={`/room/${room.id}`}>
      <a>
        <div className="bg-white p-6 grid justify-items-center gap-3 shadow-md rounded-md">
        <Image src={RoomIcon} alt="Left icon" height={25} width={25} />

          <h3 className="text-primary font-bold text-lg">{room.name}</h3>

      
        </div>
      </a>
    </Link>
  );
};
export default RoomCard;
