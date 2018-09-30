import { Component, OnInit } from '@angular/core';
//import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipelistComponent implements OnInit {

  // no longer needed as we are now using recipe service
  //@Output() recipeSelectedFromList = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
