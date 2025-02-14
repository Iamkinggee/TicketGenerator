import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import Dropdown from "../components/Dropdown";

function SelectTicket() {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/attendeeDetails');
  };
  const handleBack = () => {
    navigate('/');
  };



    return (
      // <div className="w-full h-[1000px] md:h-[1126px] flex flex-col bg-[#02191D] bg-opacity-40 items-center overflow-hidden "> 
      //   <div className="max-w-full w-[900px] px-5">

      <div className="w-full h-[1000px] md:h-[1080px] flex flex-col bg-[#02191D] bg-opacity-40 items-center overflow-hidden px-[10px] "> 
        <div className="">



       {/* <div  className="w-full h-[1000px] md:h-[1300px] flex flex-col bg-[#02191D] bg-opacity-40 items-center pb-[30px]  overflow-hidden px-[10px]"> */}


          {/* Navigation Bar */}


            <Navbar/>




  
          {/* Mobile Menu */}
          {/* <div id="mobile-menu" className="lg:hidden bg-blue-600 text-white p-4 hidden w-full">
          <a href="#" className="hover:text-gray-300">Events</a>
                  <a href="#" className="hover:text-gray-300">My Tickets</a>
                  <a href="#" className="hover:text-gray-300">About Project</a>
          </div> */}
        </div>



        <div className="md:w-[700px] w-[350px] h-[1200px] mb-[10px] md:h-[858px] rounded-[40px] border-1 pt-[20px] md:pt-[64px] md:p-[40px]   gap-[32px] bg-[#041E23] border-[#0E464F] md:mt-[50px] mt-[20px]">
            <div className="md:flex block justify-center pb-[10px] ">    
               <p className="md:text-[30px] text-[25px] md:pl-[0px] pl-[15px]   text-white w-[531px] h-[32px]  ">Ticket Selection</p> 

               <p className="text-white  font-mono  text-[16px] font-[400px] pt-[12px] pl-[20px] md:pl-[0px]">Step 1/3</p>      
            </div>

            {/* progress bar */}


             <div data-svg-wrapper className="pt-[15px]">


            <svg width="304" class='md:w-[604px]' height="5" viewBox="0 0 604 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4002_115)">
            <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="#0E464F"/>
            <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H230C231.105 0.5 232 1.39543 232 2.5C232 3.60457 231.105 4.5 230 4.5H2C0.895428 4.5 0 3.60457 0 2.5Z" fill="#24A0B5"/>
            </g>
            <defs>
            <clipPath id="clip0_4002_115">
            <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="white"/>
            </clipPath>
            </defs>
            </svg>



            </div>























{/* 
                        <div data-svg-wrapper className="relative mt-[30px]">
            <svg width="1000" height="8" viewBox="1 1 1000 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="620" height="3.0001" fill="#07373F"/>
            </svg>
            </div> */}


            {/* <div className="w-[604px] text-[#0E464F] pr-[372] rounded-[5px]">

            </div> */}


            {/* <div className="w-[604px] h-[682px] rounded-[32px] border-1 p-[24px] gap-[32px] border-[#0E464F] mt-[25px] ">

            </div> */}




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



{/* <div data-svg-wrapper className="relative mt-[30px]">
<svg width="556" height="4" viewBox="0 0 556 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="556" height="4.0001" fill="#07373F"/>
</svg>
</div> */}


<div data-svg-wrapper className="relative mt-[30px]">
            <svg width="1000" height="8" viewBox="1 1 1000 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="620" height="3.0001" fill="#07373F"/>
            </svg>
            </div>





<div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal mt-[30px] ml-[10px]  pl-[15px] ">Select Ticket Type:</div>




<div className=" w-[305px]  md:w-full mx-[20px] md:mx-[0px] md:h-[142px] p-4 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-center items-center gap-4 mt-[11px] inline-flex">

    {/* use col here */}
  <div className=" self-stretch justify-between items-start  gap-10  flex flex-col md:flex-row">
    {/* <div className="md:w-[158px]  h-[110px] p-3 bg-[#12464e] rounded-xl border border-[#197686] flex-col justify-start items-start  inline-flex overflow-hidden "> */}
        
    <div className="w-[270px] h-[110px] p-3 bg-[#12464e] rounded-xl border border-[#197686] flex-col justify-start items-start  inline-flex overflow-hidden md:w-1/3 ">
        
      <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">Free</div>
      <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">Regular Access</div>
        <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
      </div>
    </div>

    <div className="w-[270px] h-[110px] p-3 rounded-xl border-2 border-[#197686] flex-col justify-start items-start  inline-flex overflow-hidden md:w-1/3">
      <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">$150</div>
      <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">VIP Access </div>
        <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
      </div>
    </div>


    <div className="w-[270px] h-[110px] p-3 rounded-xl border-2 border-[#197686] flex-col justify-start items-start  inline-flex overflow-hidden md:w-1/3">
      <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed">$150</div>
      <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
        <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">VVIP Access</div>
        <div className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">20/52</div>
      </div>
    </div>
  </div>
</div>












<div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal mt-[30px] pl-[30px] md:pl-[0px]"> Number of Tickets




    
</div>






<div className="flex mt-[10px] ">

<Dropdown/>

</div>




{/* here */}

<div className="h-12 w-full mt-[48px] md:justify-end justify-center items-center md:items-end gap-6  flex flex-col md:flex-row ">

  <div Link='/' className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[287px] h-[48px] ">
    <div className=" text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal  ">Cancel</div>
  </div>

  <div onClick={handleNext}  className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[287px] h-[48px] bg-[#23a0b5] ">
    <div   className=" text-base font-normal font-['JejuMyeongjo'] leading-normal text-white  ">Next</div>
  </div>



















</div>










        </div>
      </div>
  
    );
  }
  
  export default SelectTicket;