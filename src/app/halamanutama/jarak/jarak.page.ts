import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jarak',
  templateUrl: './jarak.page.html',
  styleUrls: ['./jarak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JarakPage implements OnInit {

   kilometer: number = 0;
   mil: number = 0;

   constructor() { }
   
   convertToMil() {
      this.mil = this.kilometer * 0.621371;
    }
  
    convertToKilometer() {
      this.kilometer = this.mil * 1.60934;
    }

  ngOnInit() {
  }
}

