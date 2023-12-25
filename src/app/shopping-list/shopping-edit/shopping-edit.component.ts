import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() onAddedShoppingList = new EventEmitter<IngredientModel>();
  name: string;
  amount: number;

  onAddShoppingList():void{
    this.onAddedShoppingList.emit({
      name: this.name,
      amount: this.amount
    });
    this.name = '';
    this.amount = 0;
  }

  onClearInPuts():void{
    this.name = '';
    this.amount = 0;
  }
}
