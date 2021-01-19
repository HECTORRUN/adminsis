import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{
  SettingsService,
  SiderbarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SiderbarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
