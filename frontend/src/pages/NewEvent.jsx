// import React from 'react'

import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

function NewEvent() {

  

  const[event, setEvent] = useState({"name":"", "organized":"", "date":"", "time":"", "place":"", "img":""})

  const handlechange = (e) => {
    e.preventDefault();
    setEvent({...event, [e.target.name]:e.target.value});
  }
  // console.log(event);

  const handleSubmit = async() => {
    try {
      // Creating a copy of the event data
    const eventData = { ...event };

    // Removing img field if it is an empty
    if (eventData.img === "") {
      delete eventData.img;
    }
      const response = await axios.post('http://localhost:8080/event/post',event);
      console.log(response);
    } catch (error) {
      console.log(error);
      
    }
    
  }
  

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" w-2/5  border-[1px] border-black shadow-lg shadow-black rounded-lg">
      <h1 className=" text-center py-10 text-2xl font-bold ">New Event</h1>
        <form className=" flex flex-col justify-center items-center">

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Name</label>
            <input name="name" value={event.name} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="text"></input>
          </div>

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Organizer</label>
            <input name="organized" value={event.organized} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="text"></input>
          </div>

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Date</label>
            <input name="date" value={event.date} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="date"></input>
          </div>

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Time</label>
            <input name="time" value={event.time} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="time"></input>
          </div>

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Place</label>
            <input name="place" value={event.place} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="text"></input>
          </div>

          <div className=" flex flex-col pb-8">
            <label className=" text-md font-semibold text-gray-700">Event Banner URL</label>
            <input name="img" value={event.img} onChange = { (e) => {handlechange(e)}} className=" border-[1px] border-black outline-none w-80 rounded-md px-2" type="text"></input>
          </div>
          <Link onClick={handleSubmit} to={'/home'} className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl m-4 cursor-pointer hover:bg-[#102C57] hover:text-white">Done</Link>
          
        </form>
      </div>
    </div>
  )
}

export default NewEvent