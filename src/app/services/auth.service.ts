import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email,password);
  }
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email,password);
  }
  logout({email,password}:any){
    return signOut(this.auth);
  }
}
