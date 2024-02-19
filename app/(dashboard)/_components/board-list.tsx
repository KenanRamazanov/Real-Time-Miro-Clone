"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
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
    const data = []

    if (!data?.length && query.search) {
        return <EmptySearch/>;

      }
    
      if (!data?.length && query.favorites) {
        return <EmptyFavorites/>
      }
    
      if (!data?.length) {
        return (
            <div>
                No boards at all
            </div>
        )
      }
    return (
        <div>
          {JSON.stringify(query)}
        </div>
    )
  }  