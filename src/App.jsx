import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import Register from "./pages/Register";
import { AdminEvents } from './pages/AdminEvents';
import { Dashboard } from './pages/Dashboard';
import { Tickets } from './pages/Tickets';
import { AdminEventDetails } from './pages/AdminEventDetails';
import { CreateEvent } from './pages/CreateEvent';
import { EditEvent } from './pages/EditEvent';
import { UserEventDetails } from './pages/UserEventDetails';
import { UserEvents } from './pages/UserEvents';
import { EventInsights } from './pages/EventInsights';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51S3PH8HKms9KZQ1uK7bOacNqVWFkPvSm87a4XHbtdzet6krdiluBKMXDitUvgg6grY5gRnjiZGuDRkJakUj9t0fs00ZiUxzZLl")

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/events' element={<AdminEvents />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Events' element={<AdminEvents />} />
        <Route path='/MyTickets' element={<Tickets />} />
        <Route path='/:id/EventDetails' element={<AdminEventDetails />} />
        <Route path='/Create' element={<CreateEvent />} />
        <Route path='/:id/Edit' element={<EditEvent />} />
        <Route path='/:id/Details' element={<Elements stripe={stripePromise}><UserEventDetails /></Elements> } />
        <Route path='/EventList' element={<UserEvents />} />
        <Route path='/:id/Insights' element={<EventInsights />} />
    </Routes>


    </>

  )
}
export default App
