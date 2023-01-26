import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  title = 'BMIWebApp'
  name:string = ''
  height!: number;
  weight!: number;
  bmi!: number;

  constructor() { }

  ngOnInit(): void {
  }
  calcBMI() {

    this.bmi = Math.round((this.weight) / (this.height * this.height) * 0.01)

    //this.bmi = Math.round((this.weight / this.height / this.height) * 703)
  }


}
