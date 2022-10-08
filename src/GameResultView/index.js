import './index.css'

const GameResultView = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div className="ShowResultContainer">
      <div className="ResultImagesContainer">
        <div className="ResultTextImgContainer">
          <p className="ResultText">YOU</p>
          <img
            className="ResultImageItem"
            src={myChoice[1]}
            alt="your choice"
          />
        </div>
        <div className="ResultTextImgContainer">
          <p className="ResultText">OPPONENT</p>
          <img
            className="ResultImageItem"
            src={imageUrl}
            alt="opponent choice"
          />
        </div>
      </div>
      <p className="ResultText">{resultMessage}</p>
      <div className="ResultButtonContainer">
        <button
          className="PlayAgainButton"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResultView
