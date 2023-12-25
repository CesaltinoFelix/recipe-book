import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
@Input() recipe : RecipeModel;

}
