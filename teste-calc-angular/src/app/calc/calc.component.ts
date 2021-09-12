import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit  {
  public calcForm: FormGroup = new FormGroup({
    'visor': new FormControl(''),
    'clear': new FormControl(''),
    'divide': new FormControl('/'),
    'button7': new FormControl('7'),
    'button8': new FormControl('8'),
    'button9': new FormControl('9'),
    'times': new FormControl('*'),
    'button4': new FormControl('4'),
    'button5': new FormControl('5'),
    'button6': new FormControl('6'),
    'minus': new FormControl('-'),
    'button1': new FormControl('1'),
    'button2': new FormControl('2'),
    'button3': new FormControl('3'),
    'plus': new FormControl('+'),
    'button0': new FormControl('0'),
    'iquals': new FormControl('=')
  })
  constructor() { }
  
  ngOnInit(): void {
  }
  addButtonValue(value: any){
    if(String(this.calcForm.value.visor).length<17){
      this.calcForm.get('visor')?.setValue(this.calcForm.value.visor += value)
    }
  }
  clear(){
    this.calcForm.get('visor')?.setValue("")
  }
  equals(){
    try {
      let result = eval(this.calcForm.value.visor)
      if(String(result).length>13){
        this.calcForm.get('visor')?.setValue(`${String(result).substring(0, 13)}e+${String(result).length - 13}`)
      }else{
        this.calcForm.get('visor')?.setValue(result)
      }
    } catch (error) {
      this.calcForm.get('visor')?.setValue('error')
    }
  }

}
