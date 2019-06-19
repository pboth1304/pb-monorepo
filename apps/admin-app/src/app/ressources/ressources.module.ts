import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesViewComponent } from './components/ressources-view/ressources-view.component';
import { RouterModule } from '@angular/router';
import { ressourcesRoutes } from './ressources.routes';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RessourceCreateComponent } from './components/ressource-create/ressource-create.component';
import { SharedAngularMaterialModule } from '@pb-monorepo/shared/angular-material';
import { DialogService } from '@pb-monorepo/shared/angular-material';

const ENTRY_COMPONENTS = [RessourceCreateComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ressourcesRoutes),
    SharedAngularMaterialModule
  ],
  declarations: [...ENTRY_COMPONENTS, RessourcesViewComponent],
  providers: [DialogService],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class RessourcesModule {}
