import { API_URL } from "../../constants/constanst";
import { SignInType } from "../../types/authType";

export async function login(params: SignInType) {
    try {
      const url = API_URL + 'Auth/Login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          UsernameorEmail: params.UsernameorEmail,
          Password: params.Password
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }
      const userData = await response.json();
      console.log("response ekrana yazdırıldı ", userData);
      return userData;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred during login');
    }
  }