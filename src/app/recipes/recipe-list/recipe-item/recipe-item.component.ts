import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;
  @Output() onSelectedItem = new EventEmitter<RecipeModel>();
  onSelect(): void{
    this.onSelectedItem.emit();
  }
}
