import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    DragDropModule,
    MatStepperModule
  ],
  exports: [
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    DragDropModule,
    MatStepperModule
  ]
})
export class MaterialModelModule { }
