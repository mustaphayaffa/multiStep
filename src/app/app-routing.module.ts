import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component'; 
import { SelectplanComponent } from './selectplan/selectplan.component';



const routes: Routes = [
  { path: '', component : BlockComponent},
  { path: 'block', component : BlockComponent},
  { path: 'selectplan', component : SelectplanComponent},
  // { path: 'header', component : HeaderComponent},
  // { path: 'footer', component : FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
