"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: string;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
}

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title,
    authorName,
    authorId,
    createdAt,
    imageUrl,
    orgId,
    isFavorite
}) => {
    return (
      <Link href={ `/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
         <div className="relative flex-1 bg-amber-50">
             <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-fit"
             />
             <Overlay/>
         </div>
       </div>
      </Link>
    );
};