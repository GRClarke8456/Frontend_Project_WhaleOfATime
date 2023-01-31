import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EventList from "../components/EventList";
import Event from "../components/Event";
import EventCard from "../components/EventCard";
import Spotlight from "../components/Spotlight";


const EventContainer = () => {

    const SERVER_URL = `http://localhost:8080`
    
    const [error, setError] = useState("");
    const [events, setEvents] =useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/events`)
        .then((response) => response.json())
        .then((response) => setEvents(response))
        .catch((err) => setError(err.message))
    }, [])

    return (
       <div className="carousel-events">
       {/* <EventList events={events} /> */}
       <Spotlight events={events}/>
       </div>
    )
    }  

export default EventContainer;