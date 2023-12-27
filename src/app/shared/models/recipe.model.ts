import { IngredientModel } from "./ingredient.model";

export class RecipeModel{

public name: string;
public description: string;
public imagePath: string;
public ingridients: IngredientModel[]

    constructor(name: string, description: string, imagePath: string, ingredients: IngredientModel[]){
            this.name = name;
            this.description = description;
            this.imagePath = imagePath;
            this.ingridients = ingredients;
    }

}