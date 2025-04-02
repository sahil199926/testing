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
  const [loading, setLoading] = useState(false);
  const refresh = async () => {
    setLoading(true);
    const data = await fetchData();
    setQlist(data.quotes);
    setLoading(false);
  };
  return (
    <>
      <div className="grid grid-cols-3">
        {loading && <div>Loading...</div>}
        {!loading &&
          qList.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
      </div>
      <button onClick={() => refresh()}>Refresh</button>
    </>
  );
}

export default Grid;
