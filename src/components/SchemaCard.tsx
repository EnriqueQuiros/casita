import Link from "next/link";

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
    <section className="flex ">
      <h3 className="text-primary font-bold text-xl">{type}</h3>
    <h3 className="text-primary ml-3">+</h3>

    </section>

      {schema &&
        schema.map((room, key) => (
          <Link href={`/task/${room.id}`} key={key}>
            <a>
              <div className="bg-white p-3 flex justify-between gap-3 shadow-sm rounded-md">
                <div className="flex flex-col justify-between">
                  <h3 className="text-primary text-md">
                    {room.name}
                  </h3>
                </div>

                <div className="mr-3">
                  <h3 className="text-primary ">-</h3>
                </div>
              </div>
            </a>
          </Link>
        ))}
    </>
  );
};
export default SchemaCard;
