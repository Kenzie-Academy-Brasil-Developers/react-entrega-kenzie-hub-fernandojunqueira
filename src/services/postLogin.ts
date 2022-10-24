import api from "./api";
import { iProfile } from "./getProfiles";

export interface iData{
    user: iProfile;
    token: string;
  }

export interface iLoginBody{
    email: string;
    password: string;
  }

export async function postLogin(body:iLoginBody):Promise<iData>{

    const {data} = await api.post<iData>('sessions',body)

    return data

}