import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';
import { ToastService } from './../../services/toast/toast.service';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	shoppingList$: Observable<Item[]>;
  constructor(public navCtrl: NavController, private shopping: ShoppingListService, 
    private toast: ToastService, private afAuth: AngularFireAuth ) {
  	this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes => {
  		return changes.map(c => ({
  			key: c.payload.key, ...c.payload.val() 
  		}))
  	});
  }

  removeItem(item: Item){
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.name} removed!`);
      this.navCtrl.setRoot('HomePage');
    })
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => console.log(data))
  }
}
