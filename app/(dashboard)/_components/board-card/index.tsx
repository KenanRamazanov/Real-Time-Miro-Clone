"use client";


interface BoardCardProps {
    id: string;
    title: string;
}

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title
}) => {
    return (
        <div>
            Board Card
        </div>
    );
};