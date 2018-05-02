import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { ToastService } from './../../services/toast/toast.service';
/**
 * Generated class for the EditShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {

	item: Item;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private shoppingListService: ShoppingListService, private toast: ToastService) {
  	this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log(this.item);
  }

  saveItem(item: Item){
  	this.shoppingListService.editItem(item).then(() => {
  		this.toast.show(`${item.name} saved!`);
  		this.navCtrl.setRoot('HomePage');
  	})
  }

  removeItem(item: Item){
    this.shoppingListService.removeItem(item).then(() => {
      this.toast.show(`${item.name} removed!`);
      this.navCtrl.setRoot('HomePage');
    })
  }
}
