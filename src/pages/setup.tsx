import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SchemaCard, { ISchema, roomTypes } from "../components/SchemaCard";

// list of ISchema
const rooms: ISchema[] = [
  {
    id: "1",
    name: "Kitchen",
    type: roomTypes.Kitchen,
  },
  {
    id: "2",
    name: "Living Room",
    type: roomTypes.LivingRoom,
  },
  {
    id: "3",
    name: "Bedroom Big",
    type: roomTypes.Bedroom,
  },
  {
    id: "4",
    name: "Bedroom Blue",
    type: roomTypes.Bedroom,
  },
  {
    id: "5",
    name: "Bedroom Green",
    type: roomTypes.Bedroom,
  },
  {
    id: "6",
    name: "Bathroom",
    type: roomTypes.Bathroom,
  },
  {
    id: "8",
    name: "Other",
    type: roomTypes.Other,
  },
];

// function that groups the rooms by type
function groupByType(rooms: ISchema[]) {
  const groupedRooms = rooms.reduce((acc, room) => {
    const { type } = room;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(room);
    return acc;
  }, {} as { [key: string]: ISchema[] });
  return groupedRooms;
}

const Setup: NextPage = () => {
  const groupedRooms = groupByType(rooms);
  //console.log(groupedRooms)

  const roomTypeArray = Object.values(roomTypes)
  //console.log(roomTypeArray)

  return (
    <>
      <div className="flex flex-col mb-28">
        <Header title="Setup Home" goBack="/" />

        <section className="bg-secondary text-black p-6 rounded-xl flex-grow -mb-12">
          <div className="grid gap-3 grid-cols-1">
            {
              // map through colorValueArray and create a SchemaCard for each
              roomTypeArray.map((roomType) => {
                return (
                  <SchemaCard
                    key={roomType}
                    type={roomType}
                    schema={groupedRooms[roomType]}
                  />
                );
              }
        
              )
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default Setup;
