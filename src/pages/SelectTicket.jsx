import Navbar from "../components/Navbar";

function SelectTicket() {
    return (
      <div className="w-full h-[1000] md:h-[1126px] flex flex-col bg-[#02191D] bg-opacity-40 items-center overflow-hidden ">
        <div className="max-w-full w-[900px] px-5">



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

               <p className="text-white  font-mono  text-[16px] font-[400px] pt-[12px] pl-[20px] md:pl-[0px]">Step1/3</p>      
            </div>

            {/* progress bar */}




                        <div data-svg-wrapper className="relative mt-[30px]">
            <svg width="1000" height="8" viewBox="1 1 1000 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="620" height="3.0001" fill="#07373F"/>
            </svg>
            </div>


            {/* <div className="w-[604px] text-[#0E464F] pr-[372] rounded-[5px]">

            </div> */}


            {/* <div className="w-[604px] h-[682px] rounded-[32px] border-1 p-[24px] gap-[32px] border-[#0E464F] mt-[25px] ">

            </div> */}




<div className="w-[305px] md:w-full  h-[200px] mt-[30px] md:p-6 p-[0px] rounded-3xl border-1  border-[#07363e] backdrop-blur-[14px] flex-col   md:justify-start md:items-center justify-between gap-2 inline-flex  bg-linear-to-t from-[#0a0c11]/10 to-[#07363e]/80 mx-4">




  <div className="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
    <div className="self-stretch text-center text-neutral-50 md:text-[62px] text-[28px] font-normal font-['Road Rage'] leading-[62px]">Techember Fest ”25</div>
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
    

{/* <div className="h-12 w-full  p-3 rounded-xl border border-[#07363e] justify-start items-center gap-2 inline-flex"> */}

<div className="h-12 md:w-full w-[289px] justify-center m-auto p-3 rounded-xl border border-[#07363e] md:justify-start items-center gap-2 inline-flex">


  <div className="grow shrink basis-0 text-white text-base font-normal font-['Roboto'] leading-normal">1</div>
  <div data-svg-wrapper className="relative">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z" fill="white"/>
  </svg>
  </div>
</div>



</div>




{/* here */}

<div className="h-12 w-full mt-[48px] md:justify-end justify-center items-center md:items-end gap-6  flex flex-col md:flex-row ">

  <div className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[287px] h-[48px] ">
    <div className=" text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal  ">Cancel</div>
  </div>

  <div className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[287px] h-[48px] bg-[#23a0b5] ">
    <div className=" text-base font-normal font-['JejuMyeongjo'] leading-normal text-white  ">Next</div>
  </div>



















</div>










        </div>
      </div>
    );
  }
  
  export default SelectTicket;