import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-suhu',
  templateUrl: './suhu.page.html',
  styleUrls: ['./suhu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuhuPage implements OnInit {

   celciusValue!: number;
  kelvinValue!: number;
  fahrenheitValue!: number;
   reamurValue!: number;

  constructor() { }

   convertToKelvin() {
      this.reamurValue = (this.celciusValue * 5 / 4);
      this.kelvinValue = this.celciusValue + 273.15;
      this.fahrenheitValue = (this.celciusValue * 9 / 5) + 32;
   }
   convertToFahrenheit() {
      this.reamurValue = (this.celciusValue * 5 / 4);
      this.fahrenheitValue = (this.celciusValue * 9 / 5) + 32;
      this.kelvinValue = this.celciusValue + 273.15;
   }

   convertToReamur() {
      this.reamurValue = (this.celciusValue * 5 / 4);
      this.fahrenheitValue = (this.celciusValue * 9 / 5) + 32;
      this.kelvinValue = this.celciusValue + 273.15;
   }
   
  ngOnInit() {
  }

}
