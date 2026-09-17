import CourseSection from "./CourseSection.jsx";

export function StudentProfile({student}) {
    return (
        <section className="student-profile">
            <h2>{student.name}</h2>
            <p>Program: {student.program}</p>
            <p>Year Level: {student.yearLevel}</p>
            <p>Student ID: {student.id}</p>
        </section>
    );
}

function StudentDashboard({student, courses, adviserName, onCourseSelect, selectedCourse}) {
    return (
        <main className="student-dashboard">
            <StudentProfile student={student} />
            <CourseSection 
                courses={courses}   
                adviserName={adviserName}
                onCourseSelect={onCourseSelect}
                selectedCourse={selectedCourse}
            />
        </main>
    );
}

export default StudentDashboard;