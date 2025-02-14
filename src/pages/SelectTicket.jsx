import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { addFormData } from '../components/db'; 



function SelectTicket() {
  const navigate = useNavigate();
  
  const [selectedTicket, setSelectedTicket] = useState(null);  
  const [ticketQuantity, setTicketQuantity] = useState(1); 
  const [errors, setErrors] = useState({}); 

  
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  
  const handleQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!selectedTicket) {
      setErrors({ ticket: 'Please select a ticket option.' });
      return;
    }

    
    try {
      const formData = {
        selectedTicket,
        ticketQuantity,
      };

      await addFormData(formData);  
      console.log('Data saved:', formData);
      navigate('/attendeeDetails');  
    } catch (error) {
      console.error('Failed to save to IndexedDB:', error);
    }
  };

  
  const handleNext = () => navigate('/attendeeDetails');
  const handleBack = () => navigate('/');

  return (
    <div className="w-full md:h-[1150px] h-[1350px] flex flex-col bg-[#02191D] bg-opacity-40 items-center overflow-hidden px-[10px]">
      <Navbar />

      <div className="md:w-[700px] w-[350px] h-[1200px] mb-[10px] md:h-[958px] rounded-[40px] border-1 pt-[20px] md:pt-[64px] md:p-[40px] gap-[32px] bg-[#041E23] border-[#0E464F] md:mt-[50px] mt-[20px]">
        <div className="md:flex block justify-center pb-[10px]">
          <p className="md:text-[30px] text-[25px] md:pl-[0px] pl-[15px] text-white w-[531px] h-[32px]">Ticket Selection</p>
          <p className="text-white font-mono text-[16px] font-[400px] pt-[12px] pl-[20px] md:pl-[0px]">Step 1/3</p>
        </div>

        {/* Progress bar */}
        <div data-svg-wrapper className="pt-[15px]">
          <svg width="304" className='md:w-[604px]' height="5" viewBox="0 0 604 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4002_115)">
              <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="#0E464F" />
              <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H230C231.105 0.5 232 1.39543 232 2.5C232 3.60457 231.105 4.5 230 4.5H2C0.895428 4.5 0 3.60457 0 2.5Z" fill="#24A0B5" />
            </g>
            <defs>
              <clipPath id="clip0_4002_115">
                <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>












<div className="w-[305px] md:w-full  h-[200px] mt-[30px] md:p-6 p-[0px] rounded-3xl border-1  border-[#07363e] backdrop-blur-[14px] flex-col   md:justify-start md:items-center justify-between gap-2 inline-flex  bg-linear-to-t from-[#0a0c11]/10 to-[#07363e]/80 mx-4">

<div className="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
  <div className="self-stretch text-center text-neutral-50 md:text-[62px] text-[28px] font-normal font-heading leading-[62px]">Techember Fest ”25</div>
  <div className="md:w-[340px] w-[200px] text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal text-[12px] mt-[-15px] md:mt-[0px] ">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</div>
</div>

<div className="justify-start items-start gap-4 inline-flex">

  <div className="md:flex block justify-center mx-[55px] md:mx-[0px] md:mt-[0px] mt-[-70px]">
      <div className="">
      <div className=" text-neutral-50 text-base font-normal font-['Roboto'] leading-normal text-center md:text-start ">📍 [Event Location]</div>

      <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal hidden">| |</div>
      </div>


  <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal text-center md:text-start">March 15, 2025 | 7:00 PM</div>
  </div>




</div>
</div>


<div data-svg-wrapper className="relative mt-[30px] px-[10px]">
          <svg width="1000" height="8" viewBox="1 1 1000 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className='' width="320" height="3.0001" fill="#07373F"/>
          </svg>
          </div>





      
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal mt-[30px] pl-[15px]">Select Ticket Type:</div>

        <div className="w-[305px] md:w-full mx-[20px] md:mx-[0px] md:h-[142px] p-4 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-center items-center gap-4 mt-[11px] inline-flex">
          <div className="self-stretch justify-between items-start gap-10 flex flex-col md:flex-row">
            <div className="cursor-pointer active:bg-[#2d7885] hover:scale-95   w-[270px] h-[110px] p-3 bg-[#12464e] rounded-xl border border-[#197686] flex-col justify-start items-start inline-flex overflow-hidden md:w-1/3">
              <div className={`card ${selectedTicket === 'Free' ? 'selected' : ''}`} onClick={() => handleTicketSelect('Free')}>
                <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">Free</div>
                <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">Regular Access</div>
                  <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
                </div>
              </div>
            </div>

            <div className="cursor-pointer active:bg-[#2d7885] hover:scale-95     w-[270px]  h-[110px] p-3 rounded-xl border-2 border-[#197686] flex-col justify-start items-start inline-flex overflow-hidden md:w-1/3">
              <div className={`card ${selectedTicket === 'VIP' ? 'selected' : ''}`} onClick={() => handleTicketSelect('VIP')}>
                <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">$150</div>
                <div className=" self-stretch h-[45px] flex-col justify-center items-start flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">VIP Access</div>
                  <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
                </div>
              </div>
            </div>

            <div className="cursor-pointer active:bg-[#2d7885] hover:scale-95   w-[270px] h-[110px] p-3 rounded-xl border-2 border-[#197686] flex-col justify-start items-start inline-flex overflow-hidden md:w-1/3">
              <div className={`card ${selectedTicket === 'VVIP' ? 'selected' : ''}`} onClick={() => handleTicketSelect('VVIP')}>
                <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">$250</div>
                <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">VVIP Access</div>
                  <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal mt-[30px] pl-[30px] md:pl-[0px]">Number of Tickets</div>
        <input
          type="number"
          min="1"
          value={ticketQuantity}
          onChange={handleQuantityChange}
          className="mt-5 md:w-[600px] w-[280px] md:mx-[20px] mx-[30px]  p-3  rounded-xl border-2 border-[#197686] bg-[#042127] text-white"
        />

        {/* Navigation Buttons */}
        <div className="h-12 w-full md:w-[600px] mt-[88px] md:justify-end justify-center items-center md:items-end gap-6 flex flex-col md:flex-row">
          <div className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex w-[287px] h-[48px] cursor-pointer active:bg-[#2d7885] hover:scale-95  active:text-white">
            <button className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal w-[270px]   " onClick={handleBack}>Back</button>
          </div>


          <button onClick={handleSubmit} className="md:h-12 md:w-[280px] w-[280px] h-[48px] px-4 py-3 bg-[#23a0b5] text-white rounded-lg    cursor-pointer active:bg-[#2d7885] hover:scale-95  ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTicket;
