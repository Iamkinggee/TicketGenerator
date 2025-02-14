// soughted

import React, { useState, useRef } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Form1() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', textarea: '' });
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
    const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle image change (drag and drop or file input)
    const handleImageChange = (e, dropped = false) => {
        const tempFile = dropped ? e : e.target.files[0];
        if (tempFile) {
            setImageFile(tempFile);
            const reader = new FileReader();
            reader.onloadend = () => setImageUrl(reader.result); 
            reader.readAsDataURL(tempFile);
        }
    };

    // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!imageFile) {
    //         toast.error('No image file selected');
    //         return;
    //     }
    //     try {
    //         const formDataImage = new FormData();
    //         formDataImage.append('file', imageFile);
    //         formDataImage.append('upload_preset', preset_key);

    //         const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
    //         const uploadedImageUrl = response.data.secure_url;

    //         // You can now save the form data along with the image URL to your database or IndexedDB
    //         // await addFormData({ ...formData, imageUrl: uploadedImageUrl });
    //         toast.success('Form data saved successfully');
    //         navigate('/ticketCard'); // Navigate to the next page
    //     } catch (error) {
    //         console.error('Error uploading image:', error);
    //         toast.error('Failed to upload image');
    //     }
    // };




    // new form submit


    // Form1 Component

const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation for image
    if (!imageFile) {
        toast.error('No image file selected');
        return;
    }

    try {
        // Cloudinary image upload
        const formDataImage = new FormData();
        formDataImage.append('file', imageFile);
        formDataImage.append('upload_preset', preset_key);

        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
        const uploadedImageUrl = response.data.secure_url;

        // Collecting all the form data to pass to the ticket page
        const formDetails = {
            name: formData.name,
            email: formData.email,
            textarea: formData.textarea,
            imageUrl: uploadedImageUrl,
            // Assuming you have ticket type and quantity fields in formData
            ticketType: formData.ticketType, 
            quantity: formData.quantity
        };

        // You can store the data in state, or pass via Navigate (using state)
        navigate('/ticketCard', { state: formDetails }); // Passing data to ticketCard component

        toast.success('Form data saved successfully');
    } catch (error) {
        console.error('Error uploading image:', error);
        toast.error('Failed to upload image');
    }
};






    // Handle drag over
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        handleImageChange(droppedFile, true);
    };










    return (
        
             <div data-layer="img" class="Img md:h-[340px] h-[401px] px-6 pt-6  bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 flex ">

             <div data-layer="Label" class="Label text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">Upload Profile Photo</div>

             <form onSubmit={handleSubmit}> 
             {/* <form onSubmit={handleSubmit}>     */}
             <div data-layer="Frame 1618871961" class="  Frame1618871961 md:w-[500px] w-[300px] h-[210px] bg-black/20 justify-center rounded-2xl  items-center gap-2.5 inline-flex">


             
             
           
{/* here */}
             <div data-layer="Section Title" class="SectionTitle cursor-pointer md:ml-[580px] ml-[550px] w-[220px] md:w-[300px] h-[250px] p-6 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50 flex-col justify-center items-center gap-4 inline-flex">

         <div data-svg-wrapper data-layer="Icon / cloud-download" class="IconCloudDownload relative">

         
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         
         <path d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA"/>
         <path d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z" fill="#FAFAFA"/>
         </svg>




         {/* here */}
         {imageUrl
                   && (
                        <div className="image-preview w-[280px]  h-[250px]">
                            <img src={imageUrl} alt="Uploaded" className="uploaded-image  rounded-2xl w-[200px] h-[250px] pt-2 mx-10  object-contain" />
                        </div>
                    )
                } 


         
         </div>

        
{/*   
             <div data-layer="Heading" class="Heading w-[250px] justify-center   self-stretch text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">Drag & drop or click to upload...</div>  */}


             
             <div data-layer="Heading" class="Heading w-[250px] justify-center   self-stretch text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">



                         {/*drag n drop  */}

             <div
                    className="upload-area"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >

                    <div className="upload-instructions text-center  md:w-full w-[150px]">
                        
                    Upload File
                     
                    </div>  

                  {/* here */}
                    {/* Display uploaded image */}
                   {/* {imageUrl
                   && (
                        <div className="image-preview w-[280px] pr-[40px] mb-[13px] h-[250px]">
                            <img src={imageUrl} alt="Uploaded" className="uploaded-image  rounded-2xl w-[200px] h-[250px] pb-[-50px]  object-fill" />
                        </div>
                    )
                } 
 */}

                    {/* Hidden file input */}


                   <input
                        type="file"
                        onChange={(e) => handleImageChange(e)}
                        accept="image/*"
                        style={{opacity: 0, position: "absolute"}}
                        
                    /> 

           


                </div>

             </div>
  </div>

   <div data-svg-wrapper data-layer="Progress container" class="ProgressContainer relative">
   <svg width="556" height="4" viewBox="0 0 556 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  
   </svg>
  
   </div>
             </div>



            {/* <form onSubmit={handleSubmit}> */}
                {/* Form fields */}

                <div className='flex flex-col text-white w-[310px]  md:w-[550px]' >
                <label  className='pb-3 pt-20'>Enter Your Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className='border-1 border-[#23a0b5]/50  w-full p-4 rounded-2xl '
                />

                </div>




                
                <div className='flex flex-col  w-[310px]  text-white  md:w-[550px]' >
                <label  className='pb-3 pt-5'>Enter Your Email: </label>
                <input
                      type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className='border-1 border-[#23a0b5]/50  w-full p-4 rounded-2xl '
                />

                </div>
                

                <div className='flex flex-col text-white  w-[310px]   md:w-[550px]' >
                <label  className='pb-3 pt-5'>Special Request? </label>
                <textarea
                    name="textarea"
                    value={formData.textarea}
                    onChange={handleChange}
                    placeholder="write here..."
                    className='border-1 border-[#23a0b5]/50  w-full p-4 h-[150px] rounded-2xl '
                />

                </div>




                {/* Submit Button */}
                {/* <div className="button-container">
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </div> */}




<div className=" h-12 md:w-[600px] mt-[48px] md:justify-end justify-center items-center md:items-end gap-6  flex flex-col md:flex-row w-[310px] ">

                     
<div  className=' justify-center w-full '>                    
<button type="submit"   className="grow  basis-0 md:h-12 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex w-[310px] md:w-[280px] h-[48px] text-white "  >Cancel

</button>
</div>


<div  className='w-full'>                    
<button type="submit"   className="grow shrink basis-0 md:h-12  py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex md:w-[280px] w-[310px] h-[48px] bg-[#23a0b5] text-white "  >Next

</button>
</div>



</div>


            </form>
        </div>
    );
}

export default Form1;








