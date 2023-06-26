import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TabelaExtratoComponent } from "./tabela-extrato-component/tabela-extrato-component.component";
import { AgendarTransaferenciaComponent } from "./agendar-transaferencia/agendar-transferencia.component";


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        MatNativeDateModule,
        MatIconModule,
        TabelaExtratoComponent,
        AgendarTransaferenciaComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
