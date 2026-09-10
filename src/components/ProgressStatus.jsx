export function ProgressStatus({ score, passingScore, adviserName }) {
  const status = score >= passingScore ? "Passing" : "At Risk";
  return (
    <div className="progress-status">
      <StatusLabel status={status} />
      <p>{score} / {passingScore}</p>
      <p>Adviser: {adviserName}</p>
    </div>
  );
}

export function StatusLabel({ status }) {
  return (
    <span className={`status-label ${status === "Passing" ? "passing" : "at-risk"}`}>
      {status}
    </span>
  );
}

export default ProgressStatus;