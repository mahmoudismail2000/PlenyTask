import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('Token')){
    return true;

  }else{
  return false;

  }
  
};
