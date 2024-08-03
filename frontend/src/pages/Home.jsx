// import React from 'react'
import { useUser, SignedIn, UserButton } from "@clerk/clerk-react"
// import event from "../assets/event.jpeg"
import { useEffect, useState } from "react";
import axios from 'axios';
import icon from '../assets/add.png'
import { Link, useNavigate } from "react-router-dom";
function Home() {
    const{user} = useUser();

    const[eventData, seteventData] = useState([]);

    const getEventDetail = async() => {
        try {
            const response = await axios.get('http://localhost:8080/event/get');
            const data = response.data.data;
            seteventData(data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getEventDetail();
    }, []);

    const Navigate = useNavigate()

  return (
    <div>
        <div className=" flex justify-between items-center px-14 py-4 mb-8" >
            <p>Welcome {user?.firstName}!</p>
            <div className=" flex gap-2">
            <img className=" hover:cursor-pointer" onClick={() => Navigate('/newEvent')} src={icon} alt="icon" width={25} />
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
            
        </div>

        <div className=" m-5 overflow-auto flex flex-wrap">
        {
                eventData?.map((item, index) => {
                    return(
                        <div key={index} className=" m-5 border-[1px] border-black w-80 rounded-lg flex flex-col overflow-auto ">
                            <div className=" flex items-center justify-center">
                                <img src={item.img} alt="image" className="p-1 rounded-lg" />
                            </div>
                            <div className=" p-2">
                                <h1 className=" text-base font-bold">{item.name}</h1>
                                <p className=" text-gray-600">Organized by: <span className=" text-gray-600">{item.organized}</span></p>
                                <p className=" text-gray-600">Date: <span className=" text-gray-600"></span>{item.date}</p>
                                <p className=" text-gray-600">time: <span className=" text-gray-600"></span>{item.time}</p>
                                <p className=" text-gray-600">place: <span className=" text-gray-600"></span>{item.place}</p>
                            </div>

                            <Link to={`/book/${item._id}`} className=" border-[2px] border-[#102C57] px-4 py-1 rounded-2xl m-4 cursor-pointer hover:bg-[#102C57] hover:text-white text-center">Report</Link>
                            
                        </div>
                    );
                })
            }
            
        </div>
    </div>
    
  )
}

export default Home