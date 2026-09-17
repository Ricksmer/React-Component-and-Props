import CourseList from "./CourseList";

function CourseSection({ courses, adviserName, onCourseSelect, selectedCourse }) {
    return (
        <section className="course-section">
            <h2>Courses</h2>
            {selectedCourse && (
                <p className="selected-course">Selected course: {selectedCourse.title}</p>
            )}
            <CourseList 
                courses={courses}
                adviserName={adviserName} 
                onCourseSelect={onCourseSelect} />
        </section>
    );
}

export default CourseSection;