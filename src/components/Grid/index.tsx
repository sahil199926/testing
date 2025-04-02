"use client";
import React, { useState } from "react";
import Card from "../Card";
import { randomGen } from "@/utils";
import { fetchData } from "@/server";

interface dataProp {
  data: {
    quotes: {
      id: number;
      quote: string;
      author: string;
    }[];
  };
}

function Grid({ data }: dataProp) {
  const [qList, setQlist] = useState<any[]>(data.quotes);

  const refresh = async () => {
    const data = await fetchData();
    setQlist(data.quotes);
  };
  return (
    <>
      <div className="grid grid-cols-3">
        {qList.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <button onClick={() => refresh()}>Refresh</button>
    </>
  );
}

export default Grid;
