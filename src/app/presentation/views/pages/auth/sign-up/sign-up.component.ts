import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { LogoMarvelFansComponent } from '../../../shared/components/logo-marvel-fans/logo-marvel-fans.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StatesRequest } from '@app/presentation/constants/statesRequest';
import { CreateSimpleAccountUserUseCaseService } from '@app/domain/usecases/user/create-simple-account-use-case.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    Toast,
    LogoMarvelFansComponent,
    FloatLabelModule,
    PasswordModule,
  ],
  providers: [MessageService],
})
export class SignUpComponent {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  registerRequestStates: StatesRequest = StatesRequest.IDLE;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private _createSimpleAccountUserUseCase: CreateSimpleAccountUserUseCaseService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identification: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmitRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.registerRequestStates = StatesRequest.LOADING;

    this._createSimpleAccountUserUseCase.execute(this.registerForm.value).then(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Registro exitoso!',
        });
        this.registerRequestStates = StatesRequest.SUCCESS;
        this.router.navigate(['/auth/sign-in']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al registrar usuario!',
        });
        this.registerRequestStates = StatesRequest.ERROR;
      }
    );
  }
}
