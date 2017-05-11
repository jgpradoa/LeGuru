import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*//modules
import { AngularFireModule } from 'angularfire2';
*/
//components
import { AppComponent } from './app.component';

// Must export the config
/*export const firebaseConfig = {
    apiKey: "AIzaSyAaMk_HWUBrPfR-iVXoOoebn0toB-qn_W0",
    authDomain: "pineapples-222e8.firebaseapp.com",
    databaseURL: "https://pineapples-222e8.firebaseio.com",
    projectId: "pineapples-222e8",
    storageBucket: "pineapples-222e8.appspot.com",
    messagingSenderId: "565174161517"
  };*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule//,
//    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
