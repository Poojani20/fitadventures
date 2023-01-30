import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { BmiComponent } from './Pages/bmi/bmi.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { HeaderComponent } from './Pages/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { TaskComponent } from './Pages/task/task.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { WorkoutComponent } from './Pages/workout/workout.component';
import { DietplanComponent } from './Pages/dietplan/dietplan.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ChatComponent } from './Pages/chat/chat.component';
import { ChattwoComponent } from './Pages/chattwo/chattwo.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"bmi",component:BmiComponent},
  {path:"workout",component:WorkoutComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"task",component:TaskComponent},
  {path:"dietplan",component:DietplanComponent},
  {path:"profile",component:ProfileComponent},
  {path:"chat",component:ChatComponent},
  {path:"chattwo",component:ChattwoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
