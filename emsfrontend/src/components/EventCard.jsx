import React from 'react'
import './EventCard.css'
import { cardData } from '../assets'

const EventCard = () => {
  return (

            <div className="card-container">
                {cardData.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="img-wrapper">
                                <img src={item.image} alt="" />
                            </div>
            
                            <div className="card-details">
                                <div className="details-top">
                                    <h3 className="name">{item.name}</h3>
                                    <p>{item.description}</p>
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
                                        <p className="ldo-title">{item.created_by}</p>
                                    </div>
                                    <div className="ldo">
                                        <p className="label">Fill:</p>
                                        <p className="ldo-title">{item.remaining_capacity}/{item.capacity}</p>
                                    </div>
                                </div>
                                
                                <div className="tag-container">
                                    {item.tags.map((tag, tagindex) => {
                                        return (
                                            <p className="tags" key={tagindex}>{tag}</p>
                                        )
                                    })}
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
  )
}

export default EventCard