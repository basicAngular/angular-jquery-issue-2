///<reference path="../../node_modules/angular-froala-wysiwyg/editor/editor.module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { Globals } from './globals';
import { CanActivateGuard as AuthGuard } from './can-activate.guard';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
//import { AnonymousGuard as AnonymousGuardService } from './anonymous.guard';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './shared/user.service';
import { ConferenceComponent } from './admin/conference/conference/conference.component';
import { ConferenceSettingComponent } from './admin/conference/conference-setting/conference-setting.component';
import { AlertNotificationComponent } from './admin/settings/alert-notification/alert-notification.component';
import { BookingSettingComponent } from './admin/settings/booking-setting/booking-setting.component';
import { TnToggleDirective } from './directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConferenceComponent,
    ConferenceSettingComponent,
    AlertNotificationComponent,
    BookingSettingComponent,
    TnToggleDirective,
  ],
  imports: [
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(), FormsModule, HttpClientModule, CommonModule,ReactiveFormsModule
  ],
  providers: [ 
    Globals , 
    UserService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
