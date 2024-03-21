// authentication.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users: User[] = [
    { username: 'Arya1', password: 'password1' },
    { username: 'Arya2', password: 'password2' },
    // Tambahkan pengguna lain di sini sesuai kebutuhan
  ];

  private loginAttempts: number = 0;
  private maxLoginAttempts: number = 3;

  constructor() { }

  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // Autentikasi berhasil, reset jumlah percobaan login
      this.loginAttempts = 0;
      return true;
    } else {
      // Autentikasi gagal, tambahkan jumlah percobaan login
      this.loginAttempts++;
      if (this.loginAttempts >= this.maxLoginAttempts) {
        // Jika jumlah percobaan login melebihi batas, kunci akun
        this.lockAccount();
      }
      return false;
    }
  }

  private lockAccount() {
    console.log('Account locked');
    // Implementasi untuk menghentikan aplikasi di sini
    // Misalnya, menggunakan window.close() atau memunculkan dialog konfirmasi
  }
}
