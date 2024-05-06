interface WorkoutInterface {
    id: string;
    date: string;
    distance: string;
}

interface TrainingTableInterface {
    workouts: WorkoutInterface[]
    onDeleteClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
    onEditClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}
