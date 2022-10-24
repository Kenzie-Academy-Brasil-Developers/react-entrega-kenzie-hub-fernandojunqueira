import api from "./api"

export interface iProfile{
  
  id: string; 
  name: string;
  email: string;
  course_module:string;
  bio: string;
  contact: string;
  techs: 
    {
    id: string ; 
    title: string ; 
    status: string ; 
    created_at: string ; 
    updated_at: string ; 
  }
,
  works: [],
  created_at: string;
  updated_at: string;
  avatar_url: null;
  
}

export async function getProfile(token:string): Promise<iProfile> {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  
    const {data} = await api.get<iProfile>('/profile')

    return data
}