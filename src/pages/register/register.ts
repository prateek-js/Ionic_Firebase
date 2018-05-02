import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user/user.model';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	
	user = {} as User; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User) {
  	try{
  		const res = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  		console.log(res);
  	}
  	catch(err){
  		console.log(err)
  	}
  }
}
