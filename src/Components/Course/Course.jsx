import { LuDollarSign } from "react-icons/lu";
import { GoBook } from "react-icons/go";
import PropTypes from 'prop-types';

const Course = ({ course,handleCarts }) => {
    // console.log(course)
    const {name,description,photo,price,credit} = course
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center pt-4 space-y-2">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex justify-center items-center gap-4">
                        <LuDollarSign />
                        <p>Price :{price}</p>
                        <GoBook />
                        <p>Credit : {credit} hr</p>

                    </div>
                    <div className="card-actions w-full">
                        <button onClick={()=>handleCarts(course)} className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleCarts :PropTypes.func
}
export default Course;

