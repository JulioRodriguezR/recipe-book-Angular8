import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '../../../models/ingredient.model';
import * as ShoppingListActions from '../../pages/shopping-list/store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
    // Equal type data of store
    public ingredients: Observable<{ ingredients: Ingredient[] }>;

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit() {
        // Get ingredients and react (observer) to changes
        this.ingredients = this.store.select('shoppingList');

        // this.store.select('shoppingList').subscribe();
    }

    /**
     * Issue new value.
     *
     * @param {number} index
     * @memberof ShoppingListComponent
     */
    onEditItem(index: number) {
        this.store.dispatch(new ShoppingListActions.StartEditIngrediet(index));
    }
}
