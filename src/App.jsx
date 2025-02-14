
import './App.css'
import { Routes, Route } from 'react-router-dom';
import TicketCard from './pages/TicketCard'
import AttendeeDetails from './pages/AttendeeDetails'
import SelectTicket from './pages/SelectTicket'


 function App() {


   return (
    <Routes>
    <Route path="/" element={<SelectTicket />} />
    <Route path="/attendeeDetails" element={<AttendeeDetails />} />
    <Route path="/ticketCard" element={<TicketCard/>} />
  </Routes>
   
      
   )
 
 }
 export default App 

