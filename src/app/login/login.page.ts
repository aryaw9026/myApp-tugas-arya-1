import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthenticationService) { }
   
  login() {
   if (this.authService.authenticate(this.username, this.password)) {
     // Jika autentikasi berhasil, arahkan pengguna ke halaman utama
     this.router.navigate(['/halamanutama']);
   }
 }

  ngOnInit() {
  }

}

