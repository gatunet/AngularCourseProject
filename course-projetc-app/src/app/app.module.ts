import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { RecipeDetailComponent } from './modules/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './modules/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './modules/recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './modules/recipe/recipe.component';
import { ShoppingEditComponent } from './modules/shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './modules/shopping/shopping-list/shopping-list.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
