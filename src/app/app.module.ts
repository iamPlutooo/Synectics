import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreativityComponent } from './creativity/creativity.component';
import { SynWithcreComponent } from './syn-withcre/syn-withcre.component';
import { SynIntroduceComponent } from './syn-introduce/syn-introduce.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SynWithproblemComponent } from './syn-withproblem/syn-withproblem.component';
import { LearningClipComponent } from './learning-clip/learning-clip.component';
import { EctPortfolioComponent } from './ect-portfolio/ect-portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    CreativityComponent,
    SynWithcreComponent,
    SynIntroduceComponent,
    SynWithproblemComponent,
    LearningClipComponent,
    EctPortfolioComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
