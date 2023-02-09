import './index.css'

const Tasks = props => {
  const {taskDetails, toggleIsStarred} = props
  const {id, email,name, date, isStarred} = taskDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (

    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{name}</p>
        <button
          type="button"
          testid="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
      <p>{email}</p>

    </li>
  )
}

export default Tasks