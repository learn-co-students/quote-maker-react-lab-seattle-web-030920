export default (state = [], action) => {
  let idx
  let newState

  switch(action.type){
    case "ADD_QUOTE":
      return [...state,action.quote]
      case "REMOVE_QUOTE":
        return state.filter(quote => quote.id !== action.quoteId)
      case "UPVOTE_QUOTE":
         newState = [...state]
         idx = state.findIndex(quote => quote.id === action.quoteId)
        newState[idx].votes+=1
        return newState
      case "DOWNVOTE_QUOTE":
        newState = [...state]
        idx = state.findIndex(quote => quote.id === action.quoteId)
        if(newState[idx].votes>0){
          newState[idx].votes -=1}
        return newState

  default:
  return state;
  }
}
