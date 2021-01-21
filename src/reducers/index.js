import {combineReducers} from "redux";

const postsReducer = (posts=[],action)=>{
    if(action.type==="FETCH_POSTS")
    return action.payload;
    return posts;
}

const userReducer = (users=[],action)=>{
          if(action.type==="FETCH_USER")
          {
              return [...users,action.payload];
          }
          return users;
}


export default combineReducers({
    posts:postsReducer,
    users:userReducer
})