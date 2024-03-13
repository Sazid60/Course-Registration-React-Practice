import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({courses}) => {
    // console.log(courses)
    return (
        <div className="md:grid md:grid-cols-3 md:gap-4">
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
            
        </div>
    );
};

Courses.propTypes = {
    courses: PropTypes.array
}
export default Courses;