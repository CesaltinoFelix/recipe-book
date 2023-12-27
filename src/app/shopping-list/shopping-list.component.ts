import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/models/ingredient.model';
import { IngredientsService } from '../shared/services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];
  constructor(private ingredientService: IngredientsService) {}

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();

    this.ingredientService.ingredientChanged.subscribe((value : IngredientModel[])=>{
      this.ingredients = value;
    })
  }
  onRemoveItem(index: number): void {
    this.ingredientService.onRemoveIngredient(index);
  }
}
