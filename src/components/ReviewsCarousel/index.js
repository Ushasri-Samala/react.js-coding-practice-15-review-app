// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeCarousel: 0}

  getReview = reviewsList => {
    const {activeCarousel} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeCarousel
    ]

    return (
      <div className="profile-container">
        <h1 className="header">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-pic" />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickingLeftArrow = () => {
    const {activeCarousel} = this.state

    if (activeCarousel > 0) {
      this.setState(prevState => ({
        activeCarousel: prevState.activeCarousel - 1,
      }))
    }
    console.log('clicked left')
  }

  onClickingRightArrow = () => {
    const {reviewsList} = this.props

    const {activeCarousel} = this.state

    if (activeCarousel < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeCarousel: prevState.activeCarousel + 1,
      }))
    }
    console.log('clicked right')
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <div className="carousel-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onClickingLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getReview(reviewsList)}
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onClickingRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
