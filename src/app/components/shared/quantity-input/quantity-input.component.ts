import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // https://stackoverflow.com/questions/54133019/typescript-stepup-method-throws-an-error-on-an-input-type-number
  public quantityIncrement():void {
    const box = document.getElementById('quantity-input__container');
    const inputNode = box.querySelectorAll('.quantity-input__field');
    const htmlInputElement = inputNode[0] as HTMLInputElement;
    htmlInputElement.stepUp();
  }

  public quantityDecrement():void {
    const box = document.getElementById('quantity-input__container');
    const inputNode = box.querySelectorAll('.quantity-input__field');
    const htmlInputElement = inputNode[0] as HTMLInputElement;
    htmlInputElement.stepDown();
  }
}
