import React, { useState } from 'react'

function Dropdown() {

    const [value, setValue] = useState('')

    const options = [
        {label : "1", value: 1},
        {label : "2", value: 2},
        {label : "3", value: 3},
        {label : "4", value: 4},
        {label : "5", value: 5},
        {label : "6", value: 6},
    ]

    function handleSelect(event){
        setValue(event.target.value)
    }



  return (
    <div className='  mt-2'>
        <div className="h-12  md:w-[600px]  p-3 rounded-xl border border-[#07363e]  text-white ">
            <select className=' w-full ' onChange={handleSelect}>
                {options.map(option =>(
                    <option className='outline-none text-white bg-[#0E464F]' value={option.value}>{option.label}</option>
                ))}
            </select>
    {/* {value} */}
        </div>

        

 




    </div>
  )
}

export default Dropdown