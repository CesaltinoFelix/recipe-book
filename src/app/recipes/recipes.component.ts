import { Component } from '@angular/core';
import { RecipeModel } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipe: RecipeModel;
  constructor(private recipeService: RecipeService) {
    this.recipeService.onShowItemDetail.subscribe((item: RecipeModel) => {
      this.recipe = item;
    });
  }
}
