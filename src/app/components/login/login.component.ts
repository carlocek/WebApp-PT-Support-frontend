import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from 'src/app/services/login.service'
import { LoginForm } from 'src/app/model/login-form'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  authToken: string

  constructor(private fb: FormBuilder, private loginService: LoginService, private _snackBar: MatSnackBar,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
    this.authToken = ""
  }

  onSubmit() {
    const lf = this.loginForm.value as LoginForm
    console.log(lf)

  //   const loginRequest: LoginForm = {
  //     email: this.loginForm.get('email')!.value,
  //     password: this.loginForm.get('password')!.value
  // };

    const response = this.loginService.login(lf).subscribe(
      (response: any) => {
        // Ricevi il token JWT dalla risposta HTTP
        this.authToken = response.token
        localStorage.setItem("token", this.authToken)
        console.log('Token JWT ricevuto:', this.authToken)
        this.router.navigate(['pt'])
        this.openSnackBar('Login riuscito', 'Ok')
      },
    );
    // localStorage.setItem("token", this.authToken);
    this.openSnackBar('Login non riuscito, riprova', 'Ok')
    console.log(localStorage.getItem('token'))
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }
  

}
