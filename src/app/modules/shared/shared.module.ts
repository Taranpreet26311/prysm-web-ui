import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {ComponentFrameworkModule} from '../component-framework/component-framework.module';

import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxEchartsModule } from 'ngx-echarts';
import { MomentModule } from 'ngx-moment';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { CreateAccountsFormComponent } from './components/create-accounts-form/create-accounts-form.component';
import { LoadingComponent } from './loading/loading.component';
import { ImportAccountsFormComponent } from './components/import-accounts-form/import-accounts-form.component';
import { ImportDropzoneComponent } from './components/import-dropzone/import-dropzone.component';
import { ImportProtectionComponent } from './components/import-protection/import-protection.component';

import { Base64ToHexPipe } from './pipes/base64-to-hex.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { PrettyjsonPipe } from './pipes/pretty-json.pipe';
import { EpochPipe } from './pipes/format-epoch.pipe';
import { SlotPipe } from './pipes/format-slot.pipe';
import { BalancePipe } from './pipes/balance.pipe';
import { FileNamePipe } from './pipes/filename.pipe';

import {ExternalLinkDirective} from './directives/external-link.directive';

import { BreadcrumbService } from './services/breadcrumb.service';
import { ToastrModule } from 'ngx-toastr';

const thirdPartyModules = [
  MomentModule,
  NgxFileDropModule,
  NgxSkeletonLoaderModule,
  NgxEchartsModule,
  ToastrModule,
];

const components = [
  BreadcrumbComponent,
  PasswordFormComponent,
  LoadingComponent,
  ImportAccountsFormComponent,
  CreateAccountsFormComponent,
  ImportDropzoneComponent,
  ImportProtectionComponent
];

const pipes = [
  Base64ToHexPipe,
  OrdinalPipe,
  PrettyjsonPipe,
  BalancePipe,
  EpochPipe,
  SlotPipe,
  FileNamePipe
];

const directives = [
  ExternalLinkDirective
];

const services = [BreadcrumbService];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  providers: [
    ...services
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...thirdPartyModules,
    ComponentFrameworkModule
  ],
  exports: [
    ...thirdPartyModules,
    ...components,
    ...pipes,
    ...directives,
    ComponentFrameworkModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule>[] {
    return [
      {
        ngModule: SharedModule,
        providers: [...services]
      },
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      }),
      ToastrModule.forRoot(),
    ];
  }
}
