import { Component } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: IngredientModel[] = [
    new IngredientModel('Rice', 1),
    new IngredientModel('Beans', 12),
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

   onRemoveItem(index : number): void{
      this.ingredients.splice(index, 1);
  }
  addShoppingList($event: IngredientModel):void{
     this.ingredients.push($event);
  }
}