import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

//array of quotes
const quotes = [
  [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Nelson Mandela",
  ],
  ["The way to get started is to quit talking and begin doing.", "Walt Disney"],
  [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    "Steve Jobs",
  ],
  [
    "If life were predictable it would cease to be life, and be without flavor.",
    "Eleanor Roosevelt",
  ],
  [
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "Oprah Winfrey",
  ],
  [
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "James Cameron",
  ],
  ["Life is what happens when you're busy making other plans.", "John Lennon"],
];
//sorte a random quote/author
const randomQuote = () => {
  let index = Math.floor(Math.random() * quotes.length);
  return {
    text: quotes[index][0],
    author: quotes[index][1],
  };
};
let quote = randomQuote();

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: quote.text,
      author: quote.author,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    let newQuote = randomQuote();
    this.setState({
      text: newQuote.text,
      author: newQuote.author,
    });
  }
  render() {
    return (
      <div id="quote-box" className="container-fluid p-0 m-0">
        <div className="border-square">
          <div className="main-square">
            <TopContainer text={this.state.text} />
            <MidContainer author={this.state.author} />
            <div className="separator"></div>
            <BottomContainer
              changeQuote={this.changeQuote}
              text={this.state.text}
              author={this.state.author}
            />
          </div>
          <span className="credit">by risaddex</span>
        </div>
      </div>
    );
  }
}
class TopContainer extends React.Component {
  render() {
    return (
      <>
        <div id="text">
          <p className="quote-font">
            <i className="bi bi-chat-right-quote"> </i>
            {this.props.text}
          </p>
        </div>
      </>
    );
  }
}

class MidContainer extends React.Component {
  render() {
    return (
      <div id="author">
        <p className="author-font">-{this.props.author}</p>
      </div>
    );
  }
}

class BottomContainer extends React.Component {
  render() {
    return (
      <div className="row bottom-container">
        <div className="col-6 d-flex justify-content-left">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=randomquotemachine&related=freecodecamp&text="${this.props.text}" ${this.props.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-link bi bi-twitter"></button>
          </a>
          <a
            href="https://github.com/risaddex"
            alt="my github"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-link bi bi-github"></button>
          </a>
        </div>

        <div className="col-6">
          <button
            id="new-quote"
            className="btn btn-quote"
            onClick={this.props.changeQuote}
          >
            new quote
          </button>
        </div>
      </div>
    );
  }
}

// ===================  =====================

ReactDOM.render(<QuoteBox />, document.getElementById("app"));

export default QuoteBox;