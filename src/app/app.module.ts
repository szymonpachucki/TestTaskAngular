import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CampaignsModule } from './campaigns/campaigns.module';


@NgModule({
  declarations: [ AppComponent,
  ],
  imports: [
    CampaignsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
