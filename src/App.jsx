import { useEffect, useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const maxCredits = 15;

function App() {
  const [courses, setCourses] = useState([])

  // For Carts
  const [carts, setCarts] = useState([])

  // For Fetching all the data
  useEffect(() => {
    fetch('/course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  // Carat adding 
  const handleCarts = (course) => {
    const credits = carts.reduce((p,c)=>p+c.credit,0)
    if((credits+course.credit) > maxCredits){
      toast.warning('You can not take more course !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }

    const alreadyExist = carts.find((c) => c.id === course.id);
    if (!alreadyExist) {
      const newCartStorage = [...carts, course]
      setCarts(newCartStorage)
      toast.success('Course Added!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      toast.error('Course Already Added!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  // console.log(carts)
  // console.log(courses)
  return (
    <>
      <div className='container mx-auto mt-10'>
        <h1 className='text-6xl font-bold text-center'>Course Registration</h1>
        {/* Main div */}
        <div className='mt-6 md:flex gap-4'>
          <div className='md:w-[75%]'>
            <Courses courses={courses} handleCarts={handleCarts}></Courses>
          </div>
          <div className='md:w-[25%] shadow-xl rounded-xl p-4'>
            <Carts carts={carts} ></Carts>
          </div>
        </div><ToastContainer />
      </div>
    </>
  )
}

export default App
