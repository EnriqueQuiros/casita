import React from "react";
import Link from "next/link";
import PlusIcon from "../../public/plus.svg";
import TrashIcon from "../../public/trash.svg";
import PencilIcon from "../../public/pencil.svg";
import Image from "next/image";

export enum roomTypes {
  Kitchen = "Kitchen",
  LivingRoom = "Living Room",
  Bedroom = "Bedroom",
  Bathroom = "Bathroom",
  DiningRoom = "Dining Room",
  Office = "Office",
  Other = "Other",
}

export interface ISchema {
  id: string;
  name: string;
  type: roomTypes;
}

interface SchemaCardProps {
  schema: ISchema[];
  type: roomTypes;
}

const SchemaCard = ({ schema, type }: SchemaCardProps) => {
  return (
    <>
      <section className="mt-3">
        <div className="flex ">
          <h3 className="text-primary font-bold text-xl">{type}</h3>
          <button className="text-primary ml-2 pt-1">
            <Image src={PlusIcon} alt="Plus icon" height={25} width={25} />
          </button>
        </div>

        {schema &&
          schema.map((room, key) => (
            <div className="bg-white p-3 my-2 flex justify-between gap-3 shadow-sm rounded-md">
              <div className="flex gap-3">
                <Link href={`/task/${room.id}`} key={key}>
                  <a>
                    <div className="">
                      <h3 className="text-primary text-md">{room.name}</h3>
                    </div>
                  </a>
                </Link>
                <button className="text-primary ">
                  <Image
                    src={PencilIcon}
                    alt="Pencil icon"
                    height={20}
                    width={20}
                  />
                </button>
              </div>

              <div className="mr-3">
                <button className="text-primary ">
                  <Image
                    src={TrashIcon}
                    alt="Trash icon"
                    height={20}
                    width={20}
                  />
                </button>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};
export default SchemaCard;
