interface TrainingTableRowInterface {
    id: string;
    date: string;
    distance: string;
    onDeleteClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onEditClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}