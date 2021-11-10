import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", {static: false}) slForm : NgForm | undefined
  subscription: Subscription | undefined
  editMode = false
  editItemIndex!: number;
  editedItem: Ingredient | undefined
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=>{
        this.editItemIndex = index
        this.editMode = true
        this.editedItem = this.slService.getIngredient(index)
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onAdding(form: NgForm){
    const value = form.value;
    const newIngredient =  new Ingredient(value.name, value.amount)
    if(this.editMode) this.slService.updateIngredient(this.editItemIndex, newIngredient)
    else
    this.slService.addedIngredients(newIngredient)
    this.editMode= false
    form.reset()
  }

  onClear(){
    this.slForm?.reset()
    this.editMode=false
  }

  onDelete(){
    this.slService.removeIngredient(this.editItemIndex);
    this.onClear()
    
  }
 
  ngOnDestroy(){
    this.subscription?.unsubscribe()
  }

}
