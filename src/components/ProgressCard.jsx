import ProgressStatus from "./ProgressStatus.jsx";

function ProgressCard({
  title,
  score,
  passingScore = 75,
  units,
  adviserName,
  onSelect,
  children
}) {
  const passing = score >= passingScore;
  return (
    <article
      className={passing ? "progress-card passing" : "progress-card at-risk"}
      onClick={onSelect}
    >
      <h3>{title}</h3>
      <p>{units} units</p>
      <ProgressStatus
        score={score}
        passingScore={passingScore}
        adviserName={adviserName}
      />
      {children}
    </article>
  );
}

export default ProgressCard;