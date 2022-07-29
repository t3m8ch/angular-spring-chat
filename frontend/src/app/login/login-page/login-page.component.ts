import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  formGroup = new FormGroup({
    nickname: new FormControl('', Validators.required),
  })

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const nickname = this.formGroup.controls['nickname'].value
    this.router.navigate(['/chat'], {
      queryParams: { nickname }
    }).then()
  }
}
