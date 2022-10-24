import api from "./api";

export interface iRegisterBody{
  
    email: string ; 
    password: string ; 
    name: string ; 
    bio: string ; 
    contact: string ; 
    course_module: string ; 
    
  }

export async function postRegister(body:iRegisterBody): Promise<void>{

    await api.post('users',body)
}