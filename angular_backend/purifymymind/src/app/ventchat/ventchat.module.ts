import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentchatRoutingModule } from './ventchat-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { AnonymousChatComponent } from './components/anonymous-chat/anonymous-chat.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, GuidelinesComponent, RoleSelectionComponent, AnonymousChatComponent],
  imports: [
    CommonModule,
    SharedModule,
    VentchatRoutingModule
  ]
})
export class VentchatModule { }
