import './index.css'

const ResultCard = props => {
  const {finalScore, onRestartAgain} = props

  return (
    <div className="trophy-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-result">Your Score</p>
      <p className="score-desc">{finalScore}</p>
      <button type="button" className="play-button" onClick={onRestartAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-img"
        />{' '}
        Play Again
      </button>
    </div>
  )
}
export default ResultCard
