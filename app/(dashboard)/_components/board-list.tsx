"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
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
        return (
            <div>
               <EmptySearch/>
            </div>
        )
      }
    
      if (!data?.length && query.favorites) {
        return (
            <div>
                No favorites
            </div>
        )
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