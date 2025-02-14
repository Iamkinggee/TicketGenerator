
// import './App.css'
// import TicketCard from './components/TicketCard'
// import AttendeeDetails from './pages/AttendeeDetails'
// import SelectTicket from './pages/SelectTicket'


//  function App() {


//    return (
// <>
//     <SelectTicket/> 


    
    
//      </>
   
      
//    )
 
//  }
//  export default App 







import './App.css'
import { Routes, Route } from 'react-router-dom';
import TicketCard from './components/TicketCard'
import AttendeeDetails from './pages/AttendeeDetails'
import SelectTicket1 from './pages/SelectTicket1'


 function App() {


   return (
    <Routes>
    <Route path="/" element={<SelectTicket1 />} />
    <Route path="/attendeeDetails" element={<AttendeeDetails />} />
    <Route path="/ticketCard" element={<TicketCard/>} />
  </Routes>
   
      
   )
 
 }
 export default App 

