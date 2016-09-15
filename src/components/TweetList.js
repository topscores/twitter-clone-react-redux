import React from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  render() {
    const tweets = this.props.tweets.map(tweet =>
      <Tweet key={tweet.id} {...tweet} />
    )

    return (
      <div className="tweet-list">
        {tweets}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default TweetList
