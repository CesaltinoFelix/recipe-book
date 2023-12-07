import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel('Arroz com feijao', 'Essa e a descricao da minha receita','https://www.bing.com/ck/a?!&&p=debabc9e71b7a991JmltdHM9MTcwMTkwNzIwMCZpZ3VpZD0yN2MwYjgyNS03ODRkLTY4YWUtM2MwNy1hYmY1NzlhZDY5ZTgmaW5zaWQ9NTU1NQ&ptn=3&ver=2&hsh=3&fclid=27c0b825-784d-68ae-3c07-abf579ad69e8&u=a1L2ltYWdlcy9zZWFyY2g_cT1mb29kIGltYWdlJkZPUk09SVFGUkJBJmlkPTIzRTA1RjgzQjlGREM2OTJGRkYzRDM1NTFGNTE5NTdCRDQ0MTNCMDI&ntb=1'),
  ];



}
