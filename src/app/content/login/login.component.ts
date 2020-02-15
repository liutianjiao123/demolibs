import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{
  username = false;
  pwd = false;

  onFocus() {
    this.username = true;
  }

  onBlur(e) {
    if(e.target.value) {return false;}
    this.pwd = false;
    this.username = false;
  }

}
