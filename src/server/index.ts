"use server";
import { randomGen } from "@/utils";
import axios from "axios";

export const quotesFetch = async (skip: number) => {
  const data = await axios.get(
    `https://dummyjson.com/quotes/?limit=9&skip=${skip}`
  );
  return data;
};

export const fetchData = async () => {
  const skip = randomGen();
  const data = await quotesFetch(skip);
  console.log(data.data);
  return data.data;
};
