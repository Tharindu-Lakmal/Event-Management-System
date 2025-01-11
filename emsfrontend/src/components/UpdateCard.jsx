import React, { useEffect, useState } from 'react'
import './UpdateCard.css'
import { listEvents, deleteEvent } from '../services/EventService'
import Btn from './Btn'
import { useNavigate } from 'react-router-dom'

const UpdateCard = () => {

    const navigator = useNavigate();

    const [events, setEvents] = useState([])

    useEffect(() => {
        getAllEvents();
    })

    const getAllEvents = () => {
        listEvents().then((response) => {
            setEvents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }


    const updateEvent = (id) => {
        navigator(`/edit-event/${id}`);
    }

    const deleteEvents = (id) => {

        deleteEvent(id).then((response) => {
            getAllEvents();
        }).catch(error => {
            console.error(error);
        })

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

                        <div className="update-btn">
                            <Btn 
                                value='Update' 
                                type = "submit" 
                                style={{padding: "14px 24px", backgroundColor: "rgb(22, 26, 32)"}}
                                onClick={() => updateEvent(item.id)} 
                            />

                            <Btn 
                                value='Delete' 
                                type = "submit" 
                                style={{padding: "14px 24px", color: "rgb(22, 26, 32)", backgroundColor: "transparent"}}
                                onClick={() => deleteEvents(item.id)}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UpdateCard