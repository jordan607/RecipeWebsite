import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id: number | undefined;
  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) =>{
        this.id= +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
  }

  onAddToShoppingList(){
    console.log(1)
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient)
  }

}
