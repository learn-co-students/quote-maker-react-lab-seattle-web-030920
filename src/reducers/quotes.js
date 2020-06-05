import uuid from 'uuid';
 
const id = uuid();

const quotesReducer = (state = [], action) => {
  let idx 
  let quote
  switch(action.type){
    case 'ADD_QUOTE':
      console.log(action.quote)
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      console.log(action)  
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0,idx), ...state.slice(idx+1)]  
    case 'UPVOTE_QUOTE':
      console.log(action)
      
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      // quote.votes += 1
      return [
        ...state.slice(0,idx),
        {...quote, votes: quote.votes += 1}, 
        ...state.slice(idx+1)
      ]
      
    case 'DOWNVOTE_QUOTE':
      console.log(action)  
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      // quote.votes -= 1
      if (quote.votes != 0){
        return [
          ...state.slice(0,idx),
          {...quote, votes: quote.votes -= 1}, 
          ...state.slice(idx+1)
        ]  
      } else {
        return state
      }
      
    default:
      return state
  }
}
 
export default quotesReducer

