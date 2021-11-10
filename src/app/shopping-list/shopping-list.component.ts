import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingredientChangeSubscription: Subscription | undefined
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients()
    this.ingredientChangeSubscription =this.slService.ingredientChanged
    .subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients
    })
  }

  onEditItem(index : number){
    this. slService.startedEditing.next(index)
  }
  ngOnDestroy(): void{
    this.ingredientChangeSubscription?.unsubscribe()
  }

}
