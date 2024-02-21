"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";
interface BoardListProps {
 orgId: string;
 query: {
    search?: string;
    favorites?: string;
 };
};

export const BoardList = ({
    orgId,
    query,
  }: BoardListProps) => {
    const data = useQuery(api.boards.get, { 
      orgId,
      ...query,
    });

if (data === undefined) {
  return (
    <div>
      Loading...x
    </div>
  )
}


    if (!data?.length && query.search) {
        return <EmptySearch/>;

      }
    
      if (!data?.length && query.favorites) {
        return <EmptyFavorites/>
      }
    
      if (!data?.length) {
        return <EmptyBoards/>
      }
    return (
        <div>
      <h2 className="text-3xl">
      {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
        </div>
    )
  }  