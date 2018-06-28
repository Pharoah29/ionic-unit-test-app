import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule} from '@ionic/storage'
import { MyApp } from './app.component';
import { MyServiceProvider } from '../providers/my-service/my-service';
import { HttpClientModule } from '@angular/common/http';
import { AppProvider } from '../providers/app/app';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp) ,
    IonicStorageModule.forRoot({

      name: '__tempdb',
  
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MyServiceProvider,
    AppProvider,
  
  ]
})
export class AppModule { }
