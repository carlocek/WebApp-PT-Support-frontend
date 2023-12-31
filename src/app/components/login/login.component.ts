import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from 'src/app/services/login.service'
import { LoginForm } from 'src/app/model/login-form'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

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
    const loginObservable: Observable<any> = this.loginService.login(lf)
    
    loginObservable.subscribe({
      next: (response: any) => {
        this.authToken = response.token;
        localStorage.setItem('token', this.authToken);
        console.log('Token JWT ricevuto:', this.authToken);
        localStorage.setItem("ptEmail", this.loginForm.value.email)
        this.router.navigate(['pt']);
        this.openSnackBar('Login riuscito', 'Ok');
      },
      error: (error: any) => {
        this.openSnackBar('Login non riuscito, riprova', 'Ok');
      }
    });
    // this.router.navigate(['pt']);
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }
  
}
