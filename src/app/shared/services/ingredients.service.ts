import { EventEmitter, Injectable, Output } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  ingredientChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Rice', 1),
    new IngredientModel('Beans', 12),
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  constructor() {}

  @Output()
  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }

  onRemoveIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onAddShoppingListIngredient(ingredients: IngredientModel[]): void {
    for (let newIngredient of ingredients) {
      const existingIngredientIndex = this.ingredients.findIndex(
        (ingredient) => ingredient.name === newIngredient.name
      );

      if (existingIngredientIndex === -1) this.ingredients.push(newIngredient);
      else
        this.ingredients[existingIngredientIndex].amount +=
          newIngredient.amount;
    }

    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
