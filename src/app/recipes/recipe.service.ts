import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'chicken schnitzel',
      'Chicken Schnitzel is a popular and tasty treat served throughout Israel. Schnitzel is Austrian in origin; it was traditionally made with veal (known as Wiener Schnitzel) or pork. The dish later found its way to Israel with European Jewish immigrants. Like many Jewish foods, immigrants adapted this regional dish to suit their unique dietary kosher laws. In the case of schnitzel, pork (which is treif) and veal (which was expensive and difficult to obtain) was replaced by chicken and turkey. The result is a tasty treat that can be found in nearly every restaurant in Israel.', 
      'https://toriavey.com/images/2011/02/IMG_1544.jpg',
      [
        new Ingredient('Chicken',1),
        new Ingredient('French Fries', 10)
      ]),
      
    new Recipe('Matar Paneer',
    'An everyday dish of cottage cheese and peas mingled in a rich, tomato gravy. Matar Paneer is a dish from India, made more often in North Indian homes in dinner menu or even for lunch. You can have it with chapati or naan and even mix with rice.',
    'https://www.ndtv.com/cooks/images/matar.paneer.2.jpg',
    [
      new Ingredient('Cottage Cheese',1),
      new Ingredient('Sweet Pea', 100)
    ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { 

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
