import CourseList from "./CourseList";

function CourseSection({ courses, adviserName, onCourseSelect }) {
    return (
        <section className="course-section">
            <h2>Courses</h2>
            <CourseList 
                courses={courses}
                adviserName={adviserName} 
                onCourseSelect={onCourseSelect} />
        </section>
    );
}

export default CourseSection;