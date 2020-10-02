import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CreativityComponent } from './creativity/creativity.component';
import { SynIntroduceComponent } from './syn-introduce/syn-introduce.component';
import { SynWithcreComponent } from './syn-withcre/syn-withcre.component';
import { SynWithproblemComponent } from './syn-withproblem/syn-withproblem.component';
import { LearningClipComponent } from './learning-clip/learning-clip.component';
import { EctPortfolioComponent } from './ect-portfolio/ect-portfolio.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'creativity', component: CreativityComponent },
  {path: 'synIntroduce', component: SynIntroduceComponent },
  {path: 'synWithcre', component: SynWithcreComponent },
  {path: 'synWithproblem', component: SynWithproblemComponent },
  {path: 'learningClip', component: LearningClipComponent },
  {path: 'ectPortfolio', component: EctPortfolioComponent },
  {path: 'aboutUs', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
