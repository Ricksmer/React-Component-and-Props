import ProgressCard from "./ProgressCard";

function CourseList({ courses , adviserName, onCourseSelect }) {
    return (
        <div className="course-list">
            {courses.map((course) => (
                <ProgressCard 
                    key={course.id}
                    title={course.title}
                    score={course.score}
                    passingScore={course.passingScore}
                    units={course.units}
                    adviserName={adviserName}
                    onSelect={() => onCourseSelect(course)}
                >
                    {course.score < course.passingScore && (
                        <small>Adviser note: Schedule a consultation for {course.title}.</small>
                    )}
                </ProgressCard>
            ))}
        </div>
    );
}

export default CourseList;