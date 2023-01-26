import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  title = 'BMIWebApp'
  name:string = '';
  height:number =0 ;
  weight : number=0;
  bmi: number =0;
  result:string = '';
  

 

  constructor() { }

  ngOnInit(): void {
  }
  calcBMI() {

   // console.log("name" + this.name);

    //this.bmi = Math.round((this.weight) / (this.height * this.height) * 0.01)

    //this.bmi = Math.round((this.weight / this.height / this.height) * 703)
    //this.bmi = (this.weight + this.height)
    this.bmi = Math.round((this.weight / this.height / this.height) *10000)
    
    /*let bmiresult = this.bmi;
    let bmiresultfixed = parseFloat(bmiresult.toFixed(2));

    this.bmi = this.bmiresultfixed;*/

    //When the BMI is less than 18.5, you can see the text below
    if(this.bmi < 18.5){
      this.result = "Underweight 😒";
     // result.style.color = "#ffc44d";
  }

//If BMI is >=18.5 and <=24.9
  else if( this.bmi >= 18.5 && this.bmi <= 24.9 ){
      this.result = "Normal Weight 😍";
      //result.style.color = "#0be881";
  }

//If BMI is >= 25 and <= 29.9 
  else if( this.bmi >= 25 && this.bmi <= 29.9 ){
      this.result = "Overweight 😮";
      //result.style.color = "#ff884d";
  }

//If BMI is <= 30
  else{
      this.result = "Obese 😱";
     // result.style.color = "#ff5e57";
  }
   

    

 


  }
}



