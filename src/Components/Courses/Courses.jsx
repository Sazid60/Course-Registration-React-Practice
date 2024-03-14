import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ courses, handleCarts }) => {
    // console.log(courses)
    return (
        <div className="md:grid md:grid-cols-3 md:gap-4">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course} 
                    handleCarts={handleCarts}>
                    </Course>)
            }

        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array,
    handleCarts: PropTypes.func
}
export default Courses;