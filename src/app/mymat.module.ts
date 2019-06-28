import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
    ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
    ]
})
export class MyMatModule { }
