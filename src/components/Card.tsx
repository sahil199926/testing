import React from "react";
interface cardProp {
  item: { id: number; quote: string; author: string };
}
function Card({ item }: cardProp) {
  return (
    <div className="h-[200px] w-[190px] border gap-2 flex flex-col p-1 ">
      <div>{item.author}</div>
      <p className="text-ellipsis ">{item.quote}</p>
    </div>
  );
}

export default Card;
