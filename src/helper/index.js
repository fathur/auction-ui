
import Cookies from 'universal-cookie';

export const apiUrl = (path = null) => {
    let url = process.env.API_URL + '/' + path
    return url.replace(/([^:]\/)\/+/g, "$1");
}

export const jwtToken = () => {
  const cookies = new Cookies();
  return cookies.get('token');
}

export const isLoggedIn = () => {
    let token = jwtToken();

    if (token !== undefined) {
      // console.log('u', token !== undefined);
      return true;
    }

    // if (token !== '') {
    //   console.log('e', token !== '');

    //   return true;
    // }

    // if (token !== null) {
    //   console.log('n', token !== null);

    //   return true;
    // }

    return false;
}

export const isLoggedOut = () => !isLoggedIn()

export const setLoginCookie = (token) => {
    const cookies = new Cookies()
    cookies.set('token', token)
}

export const clearLoginCookie = (token) => {
    const cookies = new Cookies()
    cookies.remove('token', token)
}

export const timestampToDate = (timestamp) => {
  return new Date(timestamp * 1000)
}