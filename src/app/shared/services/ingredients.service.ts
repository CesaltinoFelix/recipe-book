import { Injectable } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  ingredients: IngredientModel[] = [
    new IngredientModel('Rice', 1),
    new IngredientModel('Beans', 12),
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  constructor() {}

  onAddIngredient(ingredient: IngredientModel): void {
    this.ingredients.push(ingredient);
  }

  onRemoveIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  onAddShoppingListIngredient(ingredients: IngredientModel[]):void{
    this.ingredients.push(...ingredients);
  }
}
