import { Component } from '@angular/core';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
	private title: string = "Made it"
  /*items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }*/
}