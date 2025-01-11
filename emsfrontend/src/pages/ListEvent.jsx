import React from 'react' 
import EventCard from '../components/EventCard'
import ListEventMain from '../components/ListEventMain'

const ListEvent = () => {
  return (
    <div className='container'>

      <ListEventMain />

      <div className="inner-container">
        <h3 className="sub-header">
          Discover Events Tailored Just for You
        </h3>
      </div>
      
      <div className="inner-container">
          <EventCard />
      </div>
    </div>
  )
}

export default ListEvent