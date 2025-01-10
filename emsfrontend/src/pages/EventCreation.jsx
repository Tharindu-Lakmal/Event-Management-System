import React, { useState } from 'react'
import '../components/InputEvent.css'
import InputEvent from '../components/InputEvent';
import InputTextarea from '../components/InputTextarea';
import Btn from '../components/Btn';
import { createEvent } from '../services/EventService';

const EventCreation = () => {

    // input control
  
    const [inputValue, setInputValues] = useState({
      event_name: "",
      event_description: "",
      date: "",
      location: "",
      organizer: "",
      capacity: "",
      tags: ""
    });

    const [errorMessage, setErrorMessage] = useState(""); // State for the error message

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValues({
        ...inputValue,
        [name]: value
      });

      setErrorMessage(""); // Clear the error message when the user starts typing
    };

    const validateForm = () => {
      // Check if any field is empty
      for (const key in inputValue) {
        if (!inputValue[key].trim()) {
          return false;
        }
      }
      return true;
    };


    const addEvent = (e) => {
      e.preventDefault();

      // Validate the form
      if (!validateForm()) {
        setErrorMessage("Please fill in all fields before submitting.");
        return; // Stop the API call if form is invalid
      }
      
      setErrorMessage("");

      const { event_name, event_description, location, date, organizer, capacity, tags } = inputValue;

      const event = {
        event_name, 
        event_description, 
        date,  
        location,
        organizer, 
        capacity: parseInt(inputValue.capacity, 10), 
        tags
      }

      console.log(event);

      createEvent(event).then((response) => {
        console.log(response.data);

        setInputValues({
          event_name: "",
          event_description: "",
          date: "",
          location: "",
          organizer: "",
          capacity: "",
          tags: ""
        });

      }).catch((error) => {
        console.error("Error adding event:", error);
      });

    }


  return (
    <div className='container'>
      <div className="inner-container">

        <div className="contact-content">
          <div className="contact-header">
            <h3>
              <span>Add New Events to the List</span>
            </h3>
          </div>

          <div className="contact-form">

            {/* Display error message at the top if any field is empty */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <form  autoComplete="off" onSubmit={addEvent}>
                    
              <InputEvent handleInputChange={handleInputChange} value={inputValue.event_name} hoder='Art & Craft Fair' name='event_name' type='text' label='Event name' number='01' />
              <InputEvent handleInputChange={handleInputChange} value={inputValue.location} hoder='Downtown Arts Park' name='location' type='text' label='Location' number='02' />
              <InputEvent handleInputChange={handleInputChange} value={inputValue.date} hoder='2025-04-10' name='date' type='text' label='Date' number='03' />
              <InputEvent handleInputChange={handleInputChange} value={inputValue.organizer} hoder='Artisan Society' name='organizer' type='text' label='Organized by' number='04' />
              <InputEvent handleInputChange={handleInputChange} value={inputValue.capacity} hoder='300' name='capacity' type='text' label='Capacity' number='05' />
              <InputEvent handleInputChange={handleInputChange} value={inputValue.tags} hoder='#Art #Craft' name='tags' type='text' label='Tags' number='06' />
              <InputTextarea handleInputChange={handleInputChange} value={inputValue.event_description} hoder='Discover the creative talents of local artisans...' name='event_description' type='textbox' label='Event description' number='07' />

              <div className="input-tbn">
                <Btn value='Add event' type = "submit" />
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default EventCreation