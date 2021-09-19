import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('TestRecipe0', 'Test0','https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
    new Recipe('TestRecipe1', 'Test1','https://media.self.com/photos/5dfd3e9ba357eb0008ca5352/master/w_1280,h_960,c_limit/green%20chef%20two.png'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
