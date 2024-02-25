"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
};

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title
}:ActionsProps) => {
    return (
        <div className="absolute z-50 top-1 right-1">
            Actions
        </div>
    )
}