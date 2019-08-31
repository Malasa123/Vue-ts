import { UserSubmit, UserResponse } from './modules.d';
import axios from 'axios';

export const conduitApi = axios.create({
    baseURL:'https://conduit.productionready.io/api/'
})

export function setJWT(jwt:string){
    conduitApi.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}
export function clearJWT(jwt:string){
   delete conduitApi.defaults.headers.common['Authorization'];
}
export async function loginUser(userSubmission:UserSubmit){
    debugger
     const response =  await axios.post<UserResponse>('users/login' , {
        userSubmission
    })
    return response.data.user;
}