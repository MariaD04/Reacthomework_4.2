export const TrainingTableRow: React.FC<TrainingTableRowInterface> = ({id, date, distance, onDeleteClick: handleDeleteClick, onEditClick: handleEditClick}) => {
  return (
    <tr className="trainingtablerow" id={id}>
        <td>{date}</td>
        <td>{distance}</td>
        <td>
            <a className="trainingtablerow-edit" href="#" onClick={handleEditClick}> ✎ </a>
            <a className="trainingtablerow-delete" href="#" onClick={handleDeleteClick}> ✘ </a>
        </td>
    </tr>
  )
}

export default TrainingTableRow