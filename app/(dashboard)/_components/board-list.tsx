"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
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

    return (
        <div>
          {JSON.stringify(query)}
        </div>
    )
  }  