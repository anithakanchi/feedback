import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    comments: 0,
    name: '',
    comment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomColor = Math.floor(
      Math.random(0, initialContainerBackgroundClassNames.length) *
        initialContainerBackgroundClassNames.length,
    )
    const randomClass = initialContainerBackgroundClassNames[randomColor]
    const newComment = {
      name,
      comment,
      alt: 'not-liked',
      isLiked: false,
      id: uuidv4(),
      randomClass,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      comments: prevState.comments + 1,
      name: '',
      comment: '',
    }))
  }

  onInputChange = event => {
    this.setState(prevState => ({name: event.target.value}))
  }

  onCommentChange = event => {
    this.setState(prevState => ({comment: event.target.value}))
  }

  onLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      comments: prevState.comments - 1,
    }))
  }

  render() {
    const {name, comment, comments, commentsList} = this.state

    return (
      <div className="bg-container">
        <h1>Comments</h1>
        <div className="top-portion">
          <form className="left-container">
            <p>Say Something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              onChange={this.onInputChange}
              value={name}
            />
            <br />
            <textarea
              rows="10"
              placeholder="Your Comment"
              onChange={this.onCommentChange}
              value={comment}
            />
            <br />
            <button
              type="submit"
              className="button"
              onClick={this.onAddComment}
            >
              Add Comment
            </button>
          </form>
          <div className="right-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <p>
          <span className="comments">{comments}</span>Comments
        </p>
        <ul>
          {commentsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              onLikeButton={this.onLikeButton}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
