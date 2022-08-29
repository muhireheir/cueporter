import axios from 'axios';

export const  getAllItems = async(dispatch)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
    dispatch({
        type:'GET_ALL_ITEMS',
        payload:response.data
    });
    

}
