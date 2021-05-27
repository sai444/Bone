import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ToDoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToDoRoutingModule,
    HttpClientModule
  ]
})
export class ToDoModule { }
