import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() selectedItem = new EventEmitter<RecipeModel>();
   recipes : RecipeModel[] = this.recipeService.recipes;

   constructor(private recipeService : RecipeService){

   }
}
