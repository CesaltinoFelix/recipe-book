import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';
import { IngredientsService } from '../../shared/services/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe: RecipeModel;

  constructor(private ingredientService: IngredientsService ){}
  addToShoppingList(){
    this.ingredientService.onAddShoppingListIngredient(this.recipe.ingridients);
  }
}
