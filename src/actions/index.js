import jsonplaceholder from '../apis/jsonplaceholder';



export const fetchPostsAndUsers = ()=>{
    return async (dispatch,getState) =>{
        await dispatch(fetchPosts());
        const posts = getState().posts; 
        const users = new Set();
        posts.forEach(post => {
            users.add(post.userId);
            
        });
        users.forEach(user=>{
            dispatch(fetchUser(user));
        })


    }
}
const fetchPosts = () => {

    return async (dispatch,getState) => {
        try{const response = await jsonplaceholder.get('/posts', {});
         //console.log(response);
        dispatch({type:"FETCH_POSTS",payload:response.data})}
        catch(e){
            console.log(e);
        };
    }
}

const fetchUser = (id)=>{
    return async (dispatch,getState) =>{
        try{
            const response = await jsonplaceholder.get('/users/'+id);
           // console.log(response.data);
            dispatch({type:"FETCH_USER",payload:response.data});
        }
        catch(e)
        {
            console.log(e);
        }
    }
}