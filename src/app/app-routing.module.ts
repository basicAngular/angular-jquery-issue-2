import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './items/item-list/item-list.component';
import { AppComponent } from './app.component';
import { AddItemComponent } from './items/add-item/add-item.component';


import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MessageBoxComponent } from './layouts/message-box/message-box.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './admin/profile/profile/profile.component';

import { AppintmentComponent } from './user/appointment/appintment/appintment.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './admin/login/login.component';
import { CanActivateGuard as AuthGuard } from './can-activate.guard';
// import { AnonymousGuard as AnonymousGuardService } from './anonymous.guard';
import { OfficersListComponent } from './admin/officers/officers-list/officers-list.component';
import { OfficersDetailsComponent } from './admin/officers/officers-details/officers-details.component';
import { UsersListComponent } from './admin/users/users-list/users-list.component';
import { UsersDetailsComponent } from './admin/users/users-details/users-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetPasswordComponent } from './admin/forget-password/forget-password.component';
import { HomeComponent } from './admin/users/home/home.component';
import { CreateBlogComponent } from './admin/blogs/create-blog/create-blog.component';
import { BlogDetailsComponent } from './admin/blogs/blog-details/blog-details.component';
import { BlogListComponent } from './admin/blogs/blog-list/blog-list.component';

import { ConferenceComponent } from './admin/conference/conference/conference.component';
import { ConferenceSettingComponent } from './admin/conference/conference-setting/conference-setting.component';
import { AlertNotificationComponent } from './admin/settings/alert-notification/alert-notification.component';
import { BookingSettingComponent } from './admin/settings/booking-setting/booking-setting.component';
import { MonthlyReportComponent } from './admin/reports/monthly-report/monthly-report.component';
import { YearlyReportComponent } from './admin/reports/yearly-report/yearly-report.component';
import { WeeklyReportComponent } from './admin/reports/weekly-report/weekly-report.component';
import { EnterprisesComponent } from './admin/enterprises/enterprises/enterprises.component';
import { EnterprisesDetailsComponent } from './admin/enterprises/enterprises-details/enterprises-details.component';


const routes: Routes = [

  /* =========================== Default Path =========================================== */
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

  /* =========================== Admin Section=========================================== */
  { path: 'admin', component: LoginComponent},
  { path: 'item-list', component: ItemListComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'item-add', component: AddItemComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },

  { path: 'users', component: UsersListComponent},
  { path: 'users-details', component: UsersDetailsComponent},

  { path: 'officers', component: OfficersListComponent},
  { path: 'officers-details', component: OfficersListComponent},

  { path: 'enterprises', component: EnterprisesComponent},
  { path: 'enterprises-details', component: EnterprisesDetailsComponent},

  { path: 'dashboard/conference', component: ConferenceComponent},
  { path: 'dashboard/conference-setting', component: ConferenceSettingComponent},

  /* =========================== User Section=========================================== */
  { path: 'user-login', component: UserLoginComponent },
  { path: 'home', component: HomeComponent },


  /* =========================== Blogs =========================================== */

  { path: 'news-list', component: BlogListComponent },
  { path: 'create-news', component: CreateBlogComponent },
  { path: 'news-details', component: BlogDetailsComponent },

  /* =========================== Not Found =========================================== */
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ItemListComponent,
  AddItemComponent,
  AuthComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  MessageBoxComponent,
  DashboardComponent,
  ProfileComponent,
  AppintmentComponent,
  LoginComponent,
  OfficersListComponent,
  OfficersDetailsComponent,
  UsersListComponent,
  UsersDetailsComponent,
  UserLoginComponent,
  NotFoundComponent,
  ForgetPasswordComponent,
  HomeComponent,
  CreateBlogComponent,
  BlogDetailsComponent,
  BlogListComponent,
  ConferenceComponent,
  ConferenceSettingComponent,
  AlertNotificationComponent,
  BookingSettingComponent,
  MonthlyReportComponent,
  YearlyReportComponent,
  WeeklyReportComponent,
  WeeklyReportComponent,
  EnterprisesComponent,
  EnterprisesDetailsComponent
];
