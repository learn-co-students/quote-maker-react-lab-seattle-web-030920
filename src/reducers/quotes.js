export default (state = [], action) => {
  let ind
  let quote
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      ind = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, ind), ...state.slice(ind + 1)]

    case "UPVOTE_QUOTE":
      ind = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[ind]
      return [...state.slice(0, ind), {...quote, votes: quote.votes + 1}, ...state.slice(ind + 1)]

    case "DOWNVOTE_QUOTE":
      ind = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[ind]
      return quote.votes < 1 ? state :
      [...state.slice(0, ind), {...state[ind], votes: state[ind].votes - 1}, ...state.slice(ind + 1)]

    default:
      return state;
  }
}
