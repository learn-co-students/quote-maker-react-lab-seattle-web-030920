import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {this.props.quotes.map(quote => (
      <QuoteCard key={quote.id} quote={quote} upVote={this.props.upVote} downVote={this.props.downVote} removeQuote={this.props.removeQuote}/>
    ))}            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes}
}

const mapDispatchToProps = dispatch => {
  return {
    upVote: (quoteId) => { 
    dispatch(upvoteQuote(quoteId))},
    downVote: (quoteId) => { 
      dispatch(downvoteQuote(quoteId))},
    removeQuote: (quoteId) => { 
      dispatch(removeQuote(quoteId))},
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
