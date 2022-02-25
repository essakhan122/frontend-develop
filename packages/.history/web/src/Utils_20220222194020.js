import {useNavigate} from 'react-router-dom'
import { CREATE_ACCOUNT,SIGN_IN } from './Constants';

export const handleClick = (type) => {
    if (type === CREATE_ACCOUNT) {
        let path = '/create-account';
        window.location.href = path;
    } else if (type === SIGN_IN) {
      let path = '/';
      window.location.href = path;
    } 
    else {
  console.log("test")
  }
  }
  



  