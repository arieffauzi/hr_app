import axios from "axios";
import { apiErrorHandler } from "../apiErrorHandler";
import { IBaseApiResponse } from "../interface";
import { BASE_URL } from "../urlApi";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  accessToken: string;
}

export const fetchLogin = async (
  request: IRequest
): Promise<IBaseApiResponse<IResponse | null>> => {
  const url = `${BASE_URL}/auth/login`;

  try {
    const { data } = await axios.post(url, request);
    console.log('data',data)

    return data;
  } catch (error) {
    console.log('error',error)
    return apiErrorHandler(error);
  }
};
