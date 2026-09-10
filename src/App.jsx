import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import { student, courses } from "./data.js";
import "./styles.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const adviserName = "Dr. Santos"; // App owns this value

  function handleCourseSelect(course) {
    setSelectedCourse(course);
  }

  return (
    <div className="app">
      <DashboardHeader studentName={student.name} />
      <StudentDashboard
        student={student}
        courses={courses}
        adviserName={adviserName}
        onCourseSelect={handleCourseSelect}
      />
      {selectedCourse && (
        <p className="selected-course">Selected course: {selectedCourse.title}</p>
      )}
    </div>
  );
}

export default App;