import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Keto Chicken Enchilada','The other day I was thinking about what kind of Mexican style food I could make that would not only LOOK the part, but taste satisfying too. The idea hit me that if I melted cheese to JUST the right consistency I could roll it around some stuffing to make an Enchilada type of dish. Usually when it comes to traditional enchiladas I prefer cheese enchiladas with red sauce, but I thought that stuffing Cheese with Cheese might be overkill. (Feel free to knock yourself out though if you want to try that cheese inception)', 'https://keto-daily.com/wp-content/uploads/2018/07/Keto-Chicken-Enchilada-Recipe-Wide.jpg'),
    new Recipe('Lidia Bastianich\'s Stuffed Peppers','Heat a dutch oven large enough to hold the peppers upright in one layer over medium heat. Add the olive oil. When the oil is hot, add the onion, and cook until softened, about 10 minutes. Spoon about  half the onion into a large bowl to cool. ','https://www.cbc.ca/food/content/images/recipes/StuffedPeppers1.png')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
