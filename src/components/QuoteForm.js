import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '', author: ''
  }

  handleOnAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  }
  handleOnContentChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const id = uuid();
    const quote = {
      id: id,
      content: this.state.content,
      author: this.state.author,
      votes: 0
    };
    this.props.addQuote(quote);
    this.setState({
      content: '', author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        onChange={(event) => this.handleOnContentChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        onChange={(event) => this.handleOnAuthorChange(event)}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quote) => {
      dispatch(addQuote(quote))
    }
  }
}


//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
