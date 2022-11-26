import { emailProps, userAuth, userService } from "../../interfaces/userServiceProps";
import { api } from "../API/apiConfig";
import { ErrorExeption } from "../API/ErrorExecpition";


const login = async (dados: userService): Promise<userAuth | ErrorExeption> => {
  try {
    const {data} = await api().post('auth/login', dados);

    localStorage.setItem('token', data.token)

    return data;
  } catch (error) {
    return new ErrorExeption('Deu erro')
  }
}

const register = async (dados: userService): Promise<userAuth | ErrorExeption> => {
  try {
    const token = localStorage.getItem('token')
    const {data} = await api().post('/users', dados, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return data;
  } catch (error: any) {
    return new ErrorExeption(error.msg || 'i')
  }
}

const sendMail = async (email: emailProps): Promise<void> => {
  try {
    await api().post('email/send', email);
  } catch (error) {
    
  }
}

const getAll = async (): Promise<userService[]> => {
  try {
    const token = localStorage.getItem('token')
    const { data } = await api().get('/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    return data;
  } catch (error: any) {
    throw new Error()
  }
}

export const services = {
  getAll,
  login,
  register,
  sendMail,
}