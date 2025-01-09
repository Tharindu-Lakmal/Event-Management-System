import React from 'react'
import { cardData } from '../assets/index'
import EventCard from '../components/EventCard'
import ListEventMain from '../components/ListEventMain'

const ListEvent = () => {
  return (
    <div className='container'>

      <ListEventMain />
      
      <div className="inner-container">
          <EventCard />
      </div>
    </div>
  )
}

export default ListEvent