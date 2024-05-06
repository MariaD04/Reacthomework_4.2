interface TrainingFormInterface {
    onSubmit: (form: { date: string, distance: string }) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    form: {
        date: string;
        distance: string;
    }
}

