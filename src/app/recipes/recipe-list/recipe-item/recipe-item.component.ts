import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  constructor(private recipeService: RecipeService){

  }
  onSelect(): void{
    this.recipeService.onShowItemDetail.emit(this.recipe); 
  }
}
