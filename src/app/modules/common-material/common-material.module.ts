import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule, MatDialogModule, MatTooltipModule,
  MatChipsModule
} from '@angular/material';
import { PilotByShipFilterPipe } from './pilot-by-ship-filter.pipe';
import { DialFilterPipe } from './dial-filter.pipe';


const materialModules = [
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatChipsModule,
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
  declarations: [PilotByShipFilterPipe, DialFilterPipe],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules,
    PilotByShipFilterPipe,
    DialFilterPipe
  ]
})
export class CommonMaterialModule { }
