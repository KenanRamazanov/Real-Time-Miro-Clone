"use client"

import { toast } from "sonner"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
    orgId:string;
    disabled?:boolean;
}
export const NewBoardButton:React.FC<NewBoardButtonProps> = ({
    orgId,
    disabled
}) => {
    const router = useRouter();
    const { mutate, pending } = useApiMutation(api.board.create);
     const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        })
        .then ((id) => {
            toast.success("Board created");
            router.push(`/board/${id}`);
        })
        .catch(() => toast.error("Failed to create board"));
     }
    return (
        <div>
            NewBoardButton
        </div>
    )
}