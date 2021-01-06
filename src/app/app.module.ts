import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailComponentComponent } from './emp-detail-component/emp-detail-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { AppendPipe } from './append.pipe';
import { TestCountComponent } from './test-count/test-count.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailComponentComponent,
    EmployeeListComponent,
    TestComponent,
    AppendPipe,
    TestCountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
