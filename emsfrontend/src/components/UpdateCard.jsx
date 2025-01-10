import React, { useEffect, useState } from 'react'
import './UpdateCard.css'
import { listEvents } from '../services/EventService'
import Btn from './Btn'
import { useNavigate } from 'react-router-dom'

const UpdateCard = () => {

    const navigator = useNavigate();

    const [events, setEvents] = useState([])

    useEffect(() => {
        listEvents().then((response) => {
            setEvents(response.data);
        }).catch(error => {
            console.error(error);
        })
    })


    const updateEvent = (id) => {
        navigator(`/edit-event/${id}`)
    }

    

  return (
    <div className='updatecards'>
        {events.map((item, index) => {
            return (
                <div className="updatecard" key={index}>
                    <h3 className='updatecard-header'>{item.event_name}</h3>
                    <div className="middle">
                        <p className='date'>{item.organizer}</p>
                        <p className='date'>{item.date}</p>
                    </div>
                    <Btn 
                        value='Update' 
                        type = "submit" 
                        style={{padding: "14px 24px", backgroundColor: "rgb(22, 26, 32)"}}
                        onClick={() => updateEvent(item.id)} 
                    />
                </div>
            )
        })}
    </div>
  )
}

export default UpdateCard