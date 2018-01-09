import {NgModule} from '@angular/core';
import {MatGridListModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule} from '@angular/material';

@NgModule({
  imports: [MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule],
  exports: [MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule],
})
export class MaterialModule { }