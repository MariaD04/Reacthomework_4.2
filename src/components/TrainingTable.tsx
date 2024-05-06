import TrainingTableRow from "./TrainingTableRow"

export const TrainingTable: React.FC<TrainingTableInterface> = ({ workouts, onDeleteClick: handleDeleteClick, onEditClick: handleEditClick}) => {
    
    const getDate = (value: string) => {

        const arrayValue = value.split('.')
        let dateString = ''
        for (let index = arrayValue.length - 1; index >= 0 ; index--) {
            dateString += `${arrayValue[index]}.`
        }
        const dateValue = '20' + dateString.slice(0, dateString.length-1)
        const date = new Date(dateValue);
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = String(date.getFullYear()).slice(-2)
        return `${day}.${month}.${year}`
    };
    
    return (
        <table className="table">
            <thead className="table-columns-titles">
                <tr>
                    <th>Дата (ДД.ММ.ГГ)</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {workouts.map(workout => {
                    return (
                        <TrainingTableRow key={workout.id} id={workout.id} date={getDate(workout.date)} distance={workout.distance} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} />
                    )
                })}
            </tbody>
        </table>
    )
}


