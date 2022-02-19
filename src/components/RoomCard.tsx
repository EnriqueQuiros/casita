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
          <Image src={RoomIcon} alt="Room icon" height={25} width={25} />

          <h3 className="text-primary font-bold text-lg">{room.name}</h3>

          <svg
            width="94"
            height="25"
            viewBox="0 0 94 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2_80)">
              <path
                d="M6 10.5788C27.5 -14.9212 32.5 25.5788 54 15.0788C75 2.07886 76.5 23.0789 88.5 27.5788"
                stroke="#FF774D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_80"
                x="0.499969"
                y="0.499992"
                width="93.5004"
                height="36.5793"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_80"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_80"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </a>
    </Link>
  );
};
export default RoomCard;
