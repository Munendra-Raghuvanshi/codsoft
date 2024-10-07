import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
const Verification = () => {
    const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/Certificate');
  };
  return (
    <div>
      <Navbar/>
      <div className='flix text-left text-xl py-10'>
           <p>CERTIFICATE VERIFICATION SYSTEM</p>
      </div>
      <div className="flex justify-center py-10">
      <div className="w-8/12  bg-gray-100 border-3 border-gray-300 rounded-lg shadow-md" style={{
          background: '#f7f8fd',
          border: '3px solid #eceefb',
          padding: '30px',
          borderRadius: '10px',
        }}>
       
        <form className="  items-center w-">
          <input
            type="text"
            placeholder='Enter the code'

            className="cf-field border border-black p-3 rounded-md   w-3/5 "
          />
          <button  onClick={handleSearch} className='cf-field border border-black p-2 rounded-md  bg-black w-40  text-white text-xl '>
              
              search
          </button>
         
        </form>
      </div>
    </div>
    <div className=' py-10'>
    <p>© 2024 • Built with</p>
    <div>
        <p>
            codsoft
        </p>
    </div>
    </div>

    </div>
    
    
  )
}

export default Verification
