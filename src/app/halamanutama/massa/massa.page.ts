import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-massa',
  templateUrl: './massa.page.html',
  styleUrls: ['./massa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MassaPage implements OnInit {

   kilogram: number = 0;
   pound: number = 0;

   constructor() { }
   
   convertToPound() {
      this.pound = this.kilogram * 2.20462;
    }
  
    convertToKilogram() {
      this.kilogram = this.pound * 0.453592;
    }

  ngOnInit() {
  }
}
