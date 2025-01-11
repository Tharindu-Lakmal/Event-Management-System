import React, { useEffect, useState } from 'react'
import '../components/EventDetails.css'
import { listEvents } from '../services/EventService'
import { useParams } from 'react-router-dom';

const EventDetail = () => {

  const [events, setEvents] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
      listEvents().then((response) => {
          setEvents(response.data);
      }).catch(error => {
          console.error(error);
      })
  }, [])

  const selectEvent = events.find((item) => item.id === parseInt(id, 10));


  // Show a loading state or fallback content
  if (!selectEvent) {
    return (
      <div>
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="inner-container">

          <div className="detail-container">
            <div className="detail-header">

              <h2>{selectEvent.event_name}</h2>

              <div className="detail-data">
                <div className="ldo">
                    <p className="label">Location:</p>
                    <p className="ldo-title">{selectEvent.location}</p>
                </div>
                <div className="ldo">
                    <p className="label">Date:</p>
                    <p className="ldo-title">{selectEvent.date}</p>
                </div>
                <div className="ldo">
                    <p className="label">Organized by:</p>
                    <p className="ldo-title">{selectEvent.organizer}</p>
                </div>
                <div className="ldo">
                    <p className="label">Capacity:</p>
                    <p className="ldo-title">{selectEvent.capacity}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="eventimg">
              <img src="" alt="" />
            </div>

            <div className="info">
              <h3>Description</h3>
              <p>{selectEvent.event_description}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail