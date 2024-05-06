import { useState } from 'react'
import { TrainingForm } from './components/TrainingForm'
import { TrainingTable } from './components/TrainingTable'
import workoutsData from './data/workouts'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState(workoutsData)
  const [form, setForm] = useState({ date: '', distance: '' })
  const [edit, setEdit] = useState({state: false, index: ''})

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
  }

  const getTime = (value: string) => {
    const arrayValue = value.split('.')
    let dateString = ''
    for (let index = arrayValue.length - 1; index >= 0 ; index--) {
        dateString += `${arrayValue[index]}.`
    }
    const dateValue = '20' + dateString.slice(0, dateString.length-1)
    const date = new Date(dateValue)
    const time = date.getTime()
    return time 
  }

  const getId = (index: number) => {
    const randomNumber = Math.floor(Math.random()*(100 - 0 + 1)) + 0;
    const id = String(index + randomNumber)
    return id
  }

  const toggleEdit = (index: string) => {
    if (edit.state) {
      setEdit({ state: false, index: '' })
    } else {
      setEdit({ state: true, index: index })
    }
  }

  const handleFormSubmit = (form: { date: string, distance: string }) => {
    let updateWorkoutList

    if (edit.state) {
      const {index} = edit
      updateWorkoutList = [
        ...workouts.slice(0, parseInt(index)), 
        {id: workouts[parseInt(index)].id, date: form.date, distance: form.distance},
        ...workouts.slice(parseInt(index) + 1)
      ]
      toggleEdit(index)
      
    } else {
        const index = workouts.findIndex((workout) => getDate(workout.date) === getDate(form.date))
        
        if (index === -1) {
          updateWorkoutList = [
            ...workouts.slice(0, workouts.length),
            {id: getId(index), date: form.date, distance: form.distance}
          ].sort((a, b) => getTime(b.date) - getTime(a.date));
        } else if (getDate(workouts[index].date) == getDate(form.date)) {
          updateWorkoutList = [
            ...workouts.slice(0, index),
            { id: workouts[index].id, date: workouts[index].date, distance: String(+workouts[index].distance + +form.distance)},
            ...workouts.slice(index + 1),
          ]
        } else {
          updateWorkoutList = [
            ...workouts.slice(0, index),
            { id: getId(index), date: form.date, distance: form.distance },
            ...workouts.slice(index),
          ].sort((a, b) => getTime(b.date) - getTime(a.date));
        }
    }
    setWorkouts(updateWorkoutList);
  }

  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  const getIndex = (target: EventTarget) => {
    const closestRow = (target as HTMLElement).closest('.trainingtablerow');
    if (!closestRow) {
      return -1; 
    }
    const id = closestRow.id;
    const index = workouts.findIndex((workout) => workout.id === id);
    return index;

  };

  const handleDeleteClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    const index = getIndex(target);
    setWorkouts([...workouts.slice(0, index), ...workouts.slice(index + 1)]);
  }

  const handleEditClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    const index = getIndex(target);
    setForm({ date: workouts[index].date, distance: workouts[index].distance });
    toggleEdit(String(index))
  }

  return (
    <>
      <div className='training-records'>
        <TrainingForm onSubmit={handleFormSubmit} onChange={handleFormChange} form={form} />
        <TrainingTable workouts={workouts} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} />
      </div>
    </>
  )
}

export default App

