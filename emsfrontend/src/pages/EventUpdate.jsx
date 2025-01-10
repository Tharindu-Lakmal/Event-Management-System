import React from 'react'
import '../components/InputEvent.css'
import '../components/UpdateCard.css'
import UpdateCard from '../components/updateCard'

const EventUpdate = () => {
  return (
    <div className='container'>
        <div className="inner-container">
          
          <div className="updatecard-content">
            <div className="contact-header">
              <h3>
                <span>Update Events</span>
              </h3>
            </div>

            <UpdateCard />
            
          </div>

        </div>
    </div>
  )
}

export default EventUpdate