import { Component } from '@angular/core'
import { FormBuilder, FormGroup} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from 'src/app/services/login.service'
import { LoginForm } from 'src/app/model/login-form'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent {
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

    const response = this.loginService.loginCustomer(lf).subscribe(
      (response: any) => {
        // Ricevi il token JWT dalla risposta HTTP
        this.authToken = response.token
        console.log(response)
        localStorage.setItem("token", this.authToken)
        localStorage.setItem("customerEmail", this.loginForm.value.email)
        console.log('Token JWT ricevuto:', this.authToken)
        this.router.navigate(['customer'])
        this.openSnackBar('Login riuscito', 'Ok')
      },
    );
    // localStorage.setItem("token", this.authToken);
    this.openSnackBar('Login non riuscito, riprova', 'Ok')
    console.log(localStorage.getItem('token'))
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    })
  }
}
