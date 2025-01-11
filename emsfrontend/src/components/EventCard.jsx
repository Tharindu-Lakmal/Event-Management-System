import React, { useEffect, useState } from 'react'
import './EventCard.css'
import { listEvents } from '../services/EventService'
import { NavLink } from 'react-router-dom'

const EventCard = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        listEvents().then((response) => {
            setEvents(response.data);
        }).catch(error => {
            console.error(error);
            alert("Data is not loading...")
        })
    })

  return (

    <div className="card-container">
        {events.map((item, index) => {
            return (
                <NavLink to={`/event-detail/${item?.id}`}>
                <div className="card" key={index}>
                    <div className="img-wrapper">
                        <img src={item.imagePath} alt="image is not loaded!" />
                    </div>
    
                    <div className="card-details">
                        <div className="details-top">
                            <h3 className="name">{item.event_name}</h3>
                            <p>{item.event_description}</p>
                        </div>
    
                        <div className="details-middle">
                            <div className="ldo">
                                <p className="label">Location:</p>
                                <p className="ldo-title">{item.location}</p>
                            </div>
                            <div className="ldo">
                                <p className="label">Date:</p>
                                <p className="ldo-title">{item.date}</p>
                            </div>
                            <div className="ldo">
                                <p className="label">Organized by:</p>
                                <p className="ldo-title">{item.organizer}</p>
                            </div>
                            <div className="ldo">
                                <p className="label">Capacity:</p>
                                <p className="ldo-title">{item.capacity}</p>
                            </div>
                        </div>
                        
                        <div className="tag-container">
                            <p className="tags" key={index}>{item.tags}</p>
                        </div>
                        
                    </div>
                </div>
                </NavLink>
            )
        })}
    </div>
  )
}

export default EventCard