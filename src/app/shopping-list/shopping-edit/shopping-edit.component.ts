import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true })
  nameInputRef!: ElementRef;
  @ViewChild('amountInput',{static: true}) 
  amountInputRef!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdding(){
    const newIngredient =  new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientAdded.emit(newIngredient)
  }

}
