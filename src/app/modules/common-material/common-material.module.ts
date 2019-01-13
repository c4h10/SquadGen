import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule, MatDialogModule, MatTooltipModule
} from '@angular/material';
import { PilotByShipFilterPipe } from './pilot-by-ship-filter.pipe';
import { FilterPipe } from './filter.pipe';


const materialModules = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule,
  MatListModule,
  MatTabsModule
];

@NgModule({
  declarations: [PilotByShipFilterPipe, FilterPipe],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules,
    PilotByShipFilterPipe,
    FilterPipe
  ]
})
export class CommonMaterialModule { }
