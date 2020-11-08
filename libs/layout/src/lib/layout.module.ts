import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@demo-app/material';

import { LayoutComponent } from './containers/layout/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent, ToolbarComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
