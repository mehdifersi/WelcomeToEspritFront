import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './frontOffice/nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './frontOffice/home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './frontOffice/not-found/not-found.component';
import { FaqComponent } from './frontOffice/faq/faq.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { BackHomeComponent } from './dashboard/back-home/back-home.component';
import { PlusEspritComponent } from './frontOffice/plus-esprit/plus-esprit.component';
import { AboutUsComponent } from './frontOffice/about-us/about-us.component';
import { OffreEmploisComponent } from './frontOffice/offre-emplois/offre-emplois.component';

// import { authInterceptorProviders } from './Services/auth.Interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    NotFoundComponent,
    FaqComponent,
    SidebarComponent,
    TablesComponent,
    FooterComponent,
    BackHomeComponent,
    PlusEspritComponent,
    AboutUsComponent,
    OffreEmploisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
