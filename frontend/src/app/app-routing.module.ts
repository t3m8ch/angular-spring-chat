import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { NicknameInQueryParamsGuard } from './chat/guards/nickname-in-query-params.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'chat', component: ChatPageComponent, canActivate: [NicknameInQueryParamsGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
