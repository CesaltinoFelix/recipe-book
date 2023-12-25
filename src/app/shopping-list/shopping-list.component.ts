import { Component } from '@angular/core';
import { IngredientModel } from '../shared/models/ingredient.model';
import { IngredientsService } from '../shared/services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
 ingredients : IngredientModel[] = this.ingredientService.ingredients; 
  constructor(private ingredientService: IngredientsService){

  }

   onRemoveItem(index : number): void{
      this.ingredientService.onRemoveIngredient(index);
  }

}