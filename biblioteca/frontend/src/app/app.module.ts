import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from "@angular/material/card";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./modules/components/template/header/header.component";
import { NavComponent } from "./modules/components/template/nav/nav.component";

import { HomeComponent } from "./modules/views/home/home.component";
import { AutorCrudComponent } from "./modules/views/autor-crud/autor-crud.component";
import { EditoraCrudComponent } from "./modules/views/editora-crud/editora-crud.component";
import { LivroCrudComponent } from "./modules/views/livro-crud/livro-crud.component";

import { AutorCreateComponent } from "./modules/components/autor/autor-create/autor-create.component";
import { EditoraCreateComponent } from "./modules/components/editora/editora-create/editora-create.component";
import { LivroCreateComponent } from "./modules/components/livro/livro-create/livro-create.component";
import { AutorReadComponent } from "./modules/components/autor/autor-read/autor-read.component";
import { EditoraReadComponent } from "./modules/components/editora/editora-read/editora-read.component";
import { LivroReadComponent } from "./modules/components/livro/livro-read/livro-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { AutorUpdateComponent } from "./modules/components/autor/autor-update/autor-update.component";
import { EditoraUpdateComponent } from "./modules/components/editora/editora-update/editora-update.component";
import { LivroUpdateComponent } from "./modules/components/livro/livro-update/livro-update.component";
import { AutorDeleteComponent } from "./modules/components/autor/autor-delete/autor-delete.component";
import { LivroDeleteComponent } from "./modules/components/livro/livro-delete/livro-delete.component";
import { EditoraDeleteComponent } from "./modules/components/editora/editora-delete/editora-delete.component";
import { MatSelectModule } from "@angular/material/select";
import { BuscarTodosReditrosComponent } from "./modules/components/buscar-todos-reditros/buscar-todos-reditros.component";
import { MatIconModule } from "@angular/material/icon";
import { LoginComponent } from "./modules/views/login/login.component";
import { CadastroComponent } from "./modules/views/cadastro/cadastro.component";
import { AuthGuard } from "./modules/guards/authGuard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AutorCrudComponent,
    AutorCreateComponent,
    EditoraCrudComponent,
    LivroCrudComponent,
    EditoraCreateComponent,
    LivroCreateComponent,
    AutorReadComponent,
    EditoraReadComponent,
    LivroReadComponent,
    AutorUpdateComponent,
    EditoraUpdateComponent,
    LivroUpdateComponent,
    AutorDeleteComponent,
    LivroDeleteComponent,
    EditoraDeleteComponent,
    BuscarTodosReditrosComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
