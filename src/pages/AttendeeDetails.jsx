import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
//  import Upload1 from '../components/Upload1';
import { Bounce, ToastContainer } from 'react-toastify';
import Form1 from '../components/form1';
// import FileUpload from '../components/FileUpload';





function AttendeeDetails() {


  const navigate = useNavigate();


  // const handleNext = () => {
  //   navigate('/ticketCard');
  // };


  // const handleBack = () => {
  //   navigate(-1); 
  // };

  return (
 
        <div className="w-full h-[1210px] md:h-[1350px] flex flex-col bg-opacity-40 bg-[#02191D]  items-center overflow-hidden px-[16px] "> 
        <div className="">



            <Navbar/>

<ToastContainer
position='top-right'
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
pauseOnFocusLoss
theme='light'
rtl={false}
transition={Bounce}
/> 







<div className="md:w-[700px]  p    w-[350px] h-[1200px] md:h-[1150px]  rounded-[40px] border-1 pt-[20px] md:pt-[64px] md:p-[40px]   gap-[32px] bg-[#041E23] border-[#0E464F] md:mt-[50px] mt-[20px] md:mx-[120px]  pb-[100px] ">
            <div className="md:flex block justify-center pb-[20px]  ">    
               <p className="md:text-[30px] text-[25px] md:pl-[0px] pl-[15px]   text-white w-[531px] h-[32px]  ">Attendee Details</p> 
               

               <p className="text-white  font-mono  text-[16px] font-[400px] pt-[12px] pl-[20px] md:pl-[0px]">Step 2/3</p>
               </div>



               {/* progress bar */}


               <div data-svg-wrapper className='pb-[25px]'>


<svg width="304" class='md:w-[604px] ml-[20px]' height="5" viewBox="0 0 604 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4002_115)">
<path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.15 604 1.39543 604 2.5C604 3.60457 903.105 4.5 702 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="#0E464F"/>


{/* <path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H230C231.105 0.5 232 1.39543 232 2.5C232 3.60457 231.105 4.5 230 4.5H2C0.895428 4.5 0 3.60457 0 2.5Z" fill="#24A0B5 " /> */}

<path d="M0 2.5C0 .39543 0.895431 0.5 2 0.5H230C231.105 0.5 532 1.39543 242 2.5C232 0.560457 631.105 0.5 337 4.7H2C0.89428 4.5 0 3.60457 0 2.5Z" fill="#24A0B5 " />


</g>
<defs>
<clipPath id="clip0_4002_115">
<path d="M0 2.5C0 1.39543 0.895431 0.5 2 0.5H602C603.105 0.5 604 1.39543 604 2.5C604 3.60457 603.105 4.5 602 4.5H2.00001C0.895441 4.5 0 3.60457 0 2.5Z" fill="white"/>
</clipPath>
</defs>
</svg>

</div>














{/* file upload */}
{/* 
<Upload1/> */}

<Form1/>




    </div> 
    </div>
    </div>
  )
}

export default AttendeeDetails;