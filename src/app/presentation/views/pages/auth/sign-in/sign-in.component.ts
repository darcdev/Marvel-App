import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { LogoMarvelFansComponent } from '../../../shared/components/logo-marvel-fans/logo-marvel-fans.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { StatesRequest } from '@app/presentation/constants/statesRequest';
import { CreateSimpleAccountUserUseCaseService } from '@app/domain/usecases/user/create-simple-account-use-case.service';
import { SimpleUserLoginUseCaseService } from '@app/domain/usecases/user/simple-login-use-case.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    Toast,
    LogoMarvelFansComponent,
    FloatLabelModule,
    PasswordModule,
    RouterModule,
  ],
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  loginRequestStates: StatesRequest = StatesRequest.IDLE;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private _simpleUserLoginUseCase: SimpleUserLoginUseCaseService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmitLogin(): Promise<void> {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginRequestStates = StatesRequest.LOADING;

    try {
      await this._simpleUserLoginUseCase.execute(this.loginForm.value);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Has iniciado sesión correctamente!',
      });
      this.loginRequestStates = StatesRequest.SUCCESS;
      this.router.navigate(['/user-dashboard']);
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Credenciales incorrectas, intente nuevamente!',
      });
      this.loginRequestStates = StatesRequest.ERROR;
    }
  }
}
