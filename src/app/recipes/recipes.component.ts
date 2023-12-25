import { Component } from '@angular/core';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  recipe: RecipeModel;
  
}
