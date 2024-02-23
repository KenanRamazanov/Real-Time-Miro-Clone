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

    return (
        <div>
            NewBoardButton
        </div>
    )
}