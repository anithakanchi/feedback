// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment, onLikeButton, onDeleteComment} = props
  const {id, name, alt, comment, isLiked, randomClass} = eachComment
  console.log(randomClass)

  const Like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const onClickLike = () => {
    onLikeButton(id)
  }
  const onDelete = () => {
    onDeleteComment(id)
  }
  const color = isLiked ? 'blue-color' : ''
  return (
    <li className="bottom-portion">
      <div className="profile-container">
        <p className={`logo ${randomClass}`}>{name[0]}</p>
        <p className="name">{name}</p>
        <p className="time">less than a minute ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={Like} className="thumb" alt={alt} />
          <button className="like-button" type="button" onClick={onClickLike}>
            <p className={color}>Like</p>
          </button>
        </div>
        <button className="delete" type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            data-testid="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
