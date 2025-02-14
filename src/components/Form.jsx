

// import React, { useState, useRef } from 'react';
// import './Form.css';
// import { useNavigate } from 'react-router-dom';
// import { addFormData } from './db';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// // import React, { useState } from 'react';
// // import './Form.css';
// // import { useNavigate } from 'react-router-dom';
// // import { addFormData } from './db';
// // import axios from 'axios'


// function Form() {

//     // const navigate = useNavigate();


// //   const [imageFile, setImageFile] = useState(null);
// //   const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
// //   const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;


// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     setImageFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!imageFile) {
// //         console.error('No image file selected');
// //         return;
// //       }

// //       const formDataImage = new FormData();
// //       formDataImage.append('file', imageFile);
// //       formDataImage.append('upload_preset', preset_key);

// //       const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
// //       const imageUrl = response.data.secure_url;

// //       await addFormData({ ...formData, imageUrl });
// //       console.log('Form data saved to IndexedDB:', { ...formData, imageUrl });
// //     } catch (error) {
// //       console.error('Error saving form data:', error);
// //     }
// //   };



//     // const handleBack = () => {
//     //     navigate(-1); 
//     //   };
    
//     //  const handleNext = () => {
//     //     navigate(+1)
//     //    };
    



// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         textarea: '',
// //         imageUrl: ''
// //     });

// //     const [errors, setErrors] = useState({});

// //     // const handleChange = (e) => {
// //     //     const { name, value } = e.target;
// //     //     setFormData({
// //     //         ...formData,
// //     //         [name]: value,
// //     //     });
// //     // };

   

// //     // const handleSubmit = async (e) => {
// //     //     e.preventDefault();
// //     //     const newErrors = validateForm(formData);
// //     //     setErrors(newErrors);
   
// //     //     if (Object.keys(newErrors).length === 0) {
// //     //         try {
// //     //             await addFormData(formData);
// //     //             console.log('Form data saved to IndexedDB');
// //     //             navigate('/ticketCard');  
// //     //         } catch (error) {
// //     //             console.error('Failed to save form data:', error);
// //     //         }
// //     //     } else {
// //     //         console.log('Form submission failed due to validation errors.');
// //     //     }
// //     // };
   



// //     const validateForm = (data) => {
// //         const errors = {};

// //         if (!data.name.trim()) {
// //             errors.name = 'Name is required';
// //         } else if (data.name.length < 4) {
// //             errors.name = 'name must be at least 4 characters long';
// //         }

// //         if (!data.email.trim()) {
// //             errors.email = 'Email is required';
// //         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
// //             errors.email = 'Email is invalid';
// //         }


// //         return errors;
// //     };





//     // upload

//         const [file, setFile] = useState(null);
//         const [progress, setProgress] = useState(0);
//         const [status, setStatus] = useState('idle');
//         const [res, setRes] = useState(null);
//         const [imageUrl, setImageUrl] = useState(null);
    
//         const fileRef = useRef(null);
//         const allowedFileSize = 1000 * 1024;




//         // const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
//         // const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;
    







    
//         const handleFileChange = ({e, dropped=false}) =>{
//             const tempFile = dropped === true ? e : e.target.files[0]
//             if(!dropped && (!e.target.files || !e.target.files.length > 0)){
//                 return toast.error('Please select a single file')
//             }
    
    
    
    
//             try {
//                 setStatus('Uploading')
//                 setFile(tempFile);
//                 const formData = new FormData();
//                 formData.append('file', tempFile);
//                 formData.append('upload_preset', preset_key)
//                 formData.append('cloud_name', cloud_name)
    
//                 axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data'
//                     },
//                     onUploadProgress: (progressEvent) => {
//                         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
//                         setProgress(percentCompleted)
//                     }
//                 }).then(res => {
//                     setStatus("done");
//                     setRes(res?.data);
//                     console.log({res});
//                     setImageUrl(res.data.secure_url);
    
//                     toast.success('File uploaded successfully')
//                 }).catch(error=>{
//                     fileRef.current.value = ''
//                     setProgress(0);
//                     setStatus("failed");
//                     toast.error("Failed to upload")
//                 })
//             } catch (err) {
//                 fileRef.current.value = ''
//                 setProgress(0);
//                 setStatus("failed");
//                 toast.error("Failed to upload")
//             }
//         }
//         const handleDrop = e =>{
//             e.preventDefault();
    
//             const droppedFile = e.dataTransfer.files[0];
//             setFile(droppedFile)
//             handleFileChange({e: droppedFile, dropped: true})
//         }
//         const handleDragOver = e =>{
//             e.preventDefault();
//         }



























































// // formmmmm okay


//         const navigate = useNavigate();
//         const [formData, setFormData] = useState({ name: '', email: '', textarea: '' });
//         const [imageFile, setImageFile] = useState(null);
//         const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
//         const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;
      
//         const handleChange = (e) => {
//           const { name, value } = e.target;
//           setFormData({ ...formData, [name]: value });
//         };
      
//         const handleImageChange = (e) => {
//           setImageFile(e.target.files[0]);
//         };
      
//         const handleSubmit = async (e) => {
//           e.preventDefault();
//           try {
//             if (!imageFile) {
//               toast.error('No image file selected');
//               return;
//             }
      
//             const formDataImage = new FormData();
//             formDataImage.append('file', imageFile);
//             formDataImage.append('upload_preset', preset_key);
      
//             const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
//             const imageUrl = response.data.secure_url;
      
//             await addFormData({ ...formData, imageUrl });
//             toast.success('Form data saved successfully');
//             navigate('/ticketCard');
//           } catch (error) {
//             console.error('Error saving form data:', error);
//             toast.error('Failed to save form data');
//           }
//         };





















//     return (
//         <div className="form-container">


//              {/* upload */}





//             <div>
//           {/* {status !== 'done' && 
//          <>
//          <input ref={fileRef} id="file_upload_btn" type="file" onChange={(e)=> handleFileChange({e})} hidden />
//          <label htmlFor='file_upload_btn' className='cursor-pointer'>

// <div className="md:w-[556px] w-[310px] h-[328px] px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 inline-flex md:ml-10 ml-5">
//                <div className="text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">Upload Profile Photo</div>
//                   <div className="self-stretch h-[200px] rounded-[20px] bg-black/20 justify-center items-center gap-2.5 inline-flex">
//                     <div className="md:w-60 w-[300px] h-[240px] md:h-60 p-6 bg-[#0e464e] rounded-[32px] border-3 border-[#23a0b5]/50 flex-col  justify-center items-center gap-4 inline-flex">

//              <div data-svg-wrapper className="relative  ">
//              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <path d="M25.2639 14.8158C24.6812 10.2265 20.7505 6.6665 16.0052 6.6665C12.3305 6.6665 9.13854 8.8145 7.68121 12.1998C4.81721 13.0558 2.67188 15.7598 2.67188 18.6665C2.67188 22.3425 5.66254 25.3332 9.33854 25.3332H10.6719V22.6665H9.33854C7.13321 22.6665 5.33854 20.8718 5.33854 18.6665C5.33854 16.7945 6.93721 14.9905 8.90254 14.6452L9.67721 14.5092L9.93321 13.7652C10.8705 11.0305 13.1972 9.33317 16.0052 9.33317C19.6812 9.33317 22.6719 12.3238 22.6719 15.9998V17.3332H24.0052C25.4759 17.3332 26.6719 18.5292 26.6719 19.9998C26.6719 21.4705 25.4759 22.6665 24.0052 22.6665H21.3385V25.3332H24.0052C26.9465 25.3332 29.3385 22.9412 29.3385 19.9998C29.337 18.8045 28.9347 17.6443 28.196 16.7045C27.4574 15.7647 26.425 15.0998 25.2639 14.8158Z" fill="#FAFAFA"/>
//              <path d="M17.3385 18.6665V13.3332H14.6719V18.6665H10.6719L16.0052 25.3332L21.3385 18.6665H17.3385Z" fill="#FAFAFA"/>
//              </svg>
//              </div>


//              <div className="self-stretch text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">Drag & drop or click to upload</div>
//          </div>
//     </div>
//  </div>


//          </label>


//          </>
//          } */}
// {/*       




//       {status === 'done' && imageUrl && (


//  <div>
//      <div className="md:w-[556px] w-[310px] h-[328px] px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-start items-start gap-8 inline-flex md:ml-10 ml-5">
//     <div className="self-stretch h-[200px] rounded-[20px] bg-black/20 justify-center items-center gap-2.5 inline-flex mt-10">
//    <img src={imageUrl} alt="Uploaded" className=" w-[300px] h-[240px] md:h-60  object-cover rounded-[32px] border-3 border-[#23a0b5]/50 flex-col  justify-center items-center gap-4 inline-flex " />
//  </div>
//  </div>
//  </div>


//  )}   */}

//      </div>










































































// {/* thissssss */}

//  <form onSubmit={handleSubmit}>
//   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//   <textarea name="textarea" value={formData.textarea} onChange={handleChange} placeholder="Special Request" />
//         <input type="file" onChange={handleImageChange} accept="image/*" required />


//         {/* done */}
//         {/* <button type="submit">Submit</button> */}
 


    


// {/*


//  //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label className="form-label">
// //                         Enter your name:
// //                     </label>
// //                     <input
// //                         className="form-input"
// //                         type="text"
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                     {errors.name && (
// //                         <span className="error-message">
// //                             {errors.name}
// //                         </span>
// //                     )}
// //                 </div>
// //                 <div>
// //                     <label className="form-label">
// //                         Enter your Email:
// //                     </label>
// //                     <input
// //                         className="form-input"
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                     />
// //                     {errors.email && (
// //                         <span className="error-message">
// //                             {errors.email}
// //                         </span>
// //                     )}
// //                 </div>
// //                 <div>
// //                     <label className="form-label">
// //                         Special request?
// //                     </label>
// //                                     <textarea
// //                     className="textarea-input"
// //                     name="textarea"
// //                     value={formData.textarea}
// //                     onChange={handleChange}
// //                     rows="5"
// //                     placeholder="Enter your text here..."
// //                 ></textarea>
// //                     {errors.textarea && (
// //                         <span className="error-message">
// //                             {errors.textarea}
// //                         </span>
// //                     )}
// //                 </div>





// // done
//                  <div className=" h-12 w-full mt-[48px] md:justify-end justify-center items-center md:items-end gap-6  flex flex-col md:flex-row ">

//                 <div onClick={handleBack}  className="grow shrink basis-0 md:h-12 md:px-6  py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[340px] h-[48px] ">                    
//                <button  className=" text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal  ">Cancel</button>
//                  </div>

// */}  
                
//                 <div className=" h-12 w-full mt-[48px] md:justify-end justify-center items-center md:items-end gap-6  flex flex-col md:flex-row ">

                     
//                  <div  >                    
//                  <button type="submit"   className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[340px] h-[48px] text-white "  >Cancel

//                 </button>
//                  </div>


//                  <div  >                    
//                  <button type="submit"   className="grow shrink basis-0 md:h-12 md:px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 flex  w-[340px] h-[48px] bg-[#23a0b5] text-white "  >Next

//                 </button>
//                  </div>



//                 </div>
             




//                   {/* </div> */}
         
//             </form>

//          </div>

         
//     );
//  }

// export default Form;















































































































// {/* // import React, { useState } from 'react';
// // import { addFormData } from './db';
// // import axios from 'axios'; 

// // function Form() {
// //   const [formData, setFormData] = useState({ name: '', email: '', textarea: '', imageUrl: '' });
// //   const [imageFile, setImageFile] = useState(null);
// //   const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
// //   const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;
  

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     setImageFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!imageFile) {
// //         console.error('No image file selected');
// //         return;
// //       }

// //       const formDataImage = new FormData();
// //       formDataImage.append('file', imageFile);
// //       formDataImage.append('upload_preset', preset_key);

// //       const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
// //       const imageUrl = response.data.secure_url;

// //       await addFormData({ ...formData, imageUrl });
// //       console.log('Form data saved to IndexedDB:', { ...formData, imageUrl });
// //     } catch (error) {
// //       console.error('Error saving form data:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
// //       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
// //       <textarea name="textarea" value={formData.textarea} onChange={handleChange} placeholder="Special Request" />
// //       <input type="file" onChange={handleImageChange} accept="image/*" required />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }

// // export default Form;






































































// // import React, { useState, useRef } from 'react';
// // import './Form.css';
// // import { useNavigate } from 'react-router-dom';
// // import { addFormData } from './db';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // function Form() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({ name: '', email: '', textarea: '' });
// //   const [imageFile, setImageFile] = useState(null);
// //   const cloud_name = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD;
// //   const preset_key = import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_KEY;

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     setImageFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!imageFile) {
// //         toast.error('No image file selected');
// //         return;
// //       }

// //       const formDataImage = new FormData();
// //       formDataImage.append('file', imageFile);
// //       formDataImage.append('upload_preset', preset_key);

// //       const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formDataImage);
// //       const imageUrl = response.data.secure_url;

// //       await addFormData({ ...formData, imageUrl });
// //       toast.success('Form data saved successfully');
// //       navigate('/ticketCard');
// //     } catch (error) {
// //       console.error('Error saving form data:', error);
// //       toast.error('Failed to save form data');
// //     }
// //   };

//   // return (
//   //   <div className="form-container">
//    <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /> */}

//         {/* <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /> 
//       <textarea name="textarea" value={formData.textarea} onChange={handleChange} placeholder="Special Request" />
//         <input type="file" onChange={handleImageChange} accept="image/*" required />
//         <button type="submit">Submit</button> 
//        </form>
//     </div> 
//  );
//  } 

//  export default Form; */}