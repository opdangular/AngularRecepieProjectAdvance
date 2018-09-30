import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Keto Chicken Enchilada','The other day I was thinking about what kind of Mexican style food I could make that would not only LOOK the part, but taste satisfying too. The idea hit me that if I melted cheese to JUST the right consistency I could roll it around some stuffing to make an Enchilada type of dish. Usually when it comes to traditional enchiladas I prefer cheese enchiladas with red sauce, but I thought that stuffing Cheese with Cheese might be overkill. (Feel free to knock yourself out though if you want to try that cheese inception)', 'https://keto-daily.com/wp-content/uploads/2018/07/Keto-Chicken-Enchilada-Recipe-Wide.jpg'),
    new Recipe('Lidia Bastianich\'s Stuffed Peppers','Heat a dutch oven large enough to hold the peppers upright in one layer over medium heat. Add the olive oil. When the oil is hot, add the onion, and cook until softened, about 10 minutes. Spoon about  half the onion into a large bowl to cool. ','https://www.cbc.ca/food/content/images/recipes/StuffedPeppers1.png')
  ];

  @Output() recipeSelectedFromList = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe){
    this.recipeSelectedFromList.emit(selectedRecipe)
  }

}
