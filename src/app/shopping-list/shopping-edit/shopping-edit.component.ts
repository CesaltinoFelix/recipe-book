import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientModel } from '../../shared/models/ingredient.model';
import { IngredientsService } from '../../shared/services/ingredients.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  name: string;
  amount: number;

  constructor(private ingredientService: IngredientsService) {}
  onAddShoppingList(): void {
    const newIngredient = new IngredientModel(this.name, this.amount);
    this.ingredientService.onAddIngredient(newIngredient);
    this.name = '';
    this.amount = 0;
  }
  onClearInPuts(): void {
    this.name = '';
    this.amount = 0;
  }
}
