import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
   imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  
})
export class HomePage {
   constructor(private alertController: AlertController) { }
   
   ngOnInit() {
      // Tampilkan splash screen
      this.showSplash();
    }
  
    showSplash() {
      setTimeout(() => {
        // Deteksi koneksi internet
        if (navigator.onLine) {
          // Jika koneksi internet tersedia, buka halaman login
          console.log('Internet connection is available');
          // Tambahkan navigasi ke halaman login di sini
           window.location.href = '/login';
           
        } else {
          // Jika koneksi internet tidak tersedia, tampilkan pesan kesalahan
          this.showAlert('Bad Connection', 'Please check your internet connection.');
        }
      }, 2000); // Waktu tampilan splash screen
    }
  
    async showAlert(header: string, message: string) {
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }