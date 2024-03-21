import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-waktu',
  templateUrl: './waktu.page.html',
  styleUrls: ['./waktu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WaktuPage implements OnInit {

   jam: number = 0;
   menit: number = 0;

   constructor() { }
   
   convertToMinute() {
      this.menit = this.jam * 60;
    }
  
    convertToHour() {
      this.jam = this.menit / 60;
    }

  ngOnInit() {
  }
}

