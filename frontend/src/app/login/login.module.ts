import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, TuiInputModule, TuiButtonModule, ReactiveFormsModule],
})
export class LoginModule {}
