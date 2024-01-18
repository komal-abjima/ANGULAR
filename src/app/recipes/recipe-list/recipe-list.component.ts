import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_640.jpg'),
  new Recipe('A two Test', 'Second test', 'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg')

];
constructor(){

}
ngOnInit(): void {
  
}

onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
