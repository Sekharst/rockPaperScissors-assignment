import './index.css'

const Buttons = props => {
  const {buttonDetails, onGetId} = props
  const {id, imageUrl} = buttonDetails

  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetId(id, imageUrl)
  }

  return (
    <div className="ButtonLiContainer">
      <button
        className="ButtonImage"
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <img className="ImageItem" src={imageUrl} alt={id} />
      </button>
    </div>
  )
}

export default Buttons
