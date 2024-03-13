import { useEffect, useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'

function App() {
  const [courses, setCourses] = useState([])
  useEffect(()=>{
    fetch('../public/course.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
// console.log(courses)
  return (
    <>
      <div className='container mx-auto mt-10'>
        <h1 className='text-6xl font-bold text-center'>Course Registration</h1>
        {/* Main div */}
        <div className='mt-6 md:flex gap-4'>
          <div className='md:w-[75%]'>
            <Courses courses={courses}></Courses>
          </div>
          <div className='md:w-[25%] shadow-xl rounded-xl p-4 h-80'>
            <Carts></Carts>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
