function DashboardHeader({studentName}) {
    return (
        <header className="dashboard-header">
            <h1>Student Progress Dashboard</h1>
            <h1>Welcome, {studentName}!</h1>
        </header>
    )
}

export default DashboardHeader;