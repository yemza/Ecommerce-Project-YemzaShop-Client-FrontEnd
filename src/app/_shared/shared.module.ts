import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { KeysPipe } from './pipes/keys.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationsComponent } from './components/paginations/paginations.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesShortcutComponent } from './components/categories-shortcut/categories-shortcut.component';
import { ProductsShortcutComponent } from './components/products-shortcut/products-shortcut.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LayoutComponent,
    KeysPipe,
    MobileMenuComponent,
    SideMenuComponent,
    TopBarComponent,
    PaginationsComponent,
    AboutComponent,
    ContactComponent,
    CategoriesShortcutComponent,
    ProductsShortcutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    KeysPipe,
    NgxPaginationModule,
    PaginationsComponent,
    Ng2SearchPipeModule,
    NgSelectModule,
    AboutComponent,
    ContactComponent,
    CategoriesShortcutComponent,
    ProductsShortcutComponent,
  ],
})
export class SharedModule {}
