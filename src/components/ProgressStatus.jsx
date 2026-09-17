export function ProgressStatus({ score, passingScore, adviserName }) {
  const status = score >= passingScore ? "Passing" : "At Risk";
  return (
    <div className="progress-status">
      <StatusLabel status={status} />
      <div className="score-details">
        <span>
          <small>Score</small>
          <strong>{score}</strong>
        </span>
        <span>
          <small>Passing score</small>
          <strong>{passingScore}</strong>
        </span>
      </div>
      <div className="score-meter" aria-label={`${score} percent score`}>
        <span style={{ width: `${score}%` }} />
      </div>
      <p className="adviser-detail">Adviser: {adviserName}</p>
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