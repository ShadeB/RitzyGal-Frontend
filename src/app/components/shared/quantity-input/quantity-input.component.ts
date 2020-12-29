import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.scss']
})
export class QuantityInputComponent implements OnInit {
  quantity: number = 0;

  @Output() quantityChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // https://stackoverflow.com/questions/54133019/typescript-stepup-method-throws-an-error-on-an-input-type-number
  public quantityIncrement():void {
    const box = document.getElementById('quantity-input__container');
    const inputNode = box.querySelectorAll('.quantity-input__field');
    const htmlInputElement = inputNode[0] as HTMLInputElement;
    htmlInputElement.stepUp();
    this.quantity = parseInt(htmlInputElement.value, 10);
    this.quantityChange.emit(this.quantity);
  }

  public quantityDecrement():void {
    const box = document.getElementById('quantity-input__container');
    const inputNode = box.querySelectorAll('.quantity-input__field');
    const htmlInputElement = inputNode[0] as HTMLInputElement;
    htmlInputElement.stepDown();
    this.quantity = parseInt(htmlInputElement.value, 10);
    this.quantityChange.emit(this.quantity);
  }

  handleInputChange(value: string) {
    this.quantity = parseInt(value, 10);
    this.quantityChange.emit(this.quantity);
  }
}
