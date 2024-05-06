export const TrainingForm: React.FC<TrainingFormInterface> = ({ onSubmit, onChange, form }) => {
    return (
      <form className='form' onSubmit={(e) => {
        e.preventDefault()
        onSubmit(form)
      }}>
        <div className='form-control'>
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input className='form-date' id='date' type="text" value={form.date} onChange={onChange} name="date" />
        </div>
        <div className='form-control'>
          <label htmlFor="distance">Пройдено км</label>
          <input className='form-distance' id='distance' type="text" value={form.distance} onChange={onChange} name="distance" />
        </div>
        <button className='form-button' type='submit'>ОК</button>
      </form>
    )
  }

    
