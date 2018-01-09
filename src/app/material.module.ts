import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule],
})
export class MaterialModule { }