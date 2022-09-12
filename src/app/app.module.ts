import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComboComponent } from './graficos/combo/combo.component';
import { LineComponent } from './graficos/line/line.component';
import { BarComponent } from './graficos/bar/bar.component';
import { CashtrackComponent } from './graficos/cashtrack/cashtrack.component';

@NgModule({
  declarations: [
    AppComponent,
    ComboComponent,
    LineComponent,
    BarComponent,
    CashtrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
