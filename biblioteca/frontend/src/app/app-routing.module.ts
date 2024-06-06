import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./modules/views/home/home.component";
import { AutorCrudComponent } from "./modules/views/autor-crud/autor-crud.component";
import { LivroCrudComponent } from "./modules/views/livro-crud/livro-crud.component";
import { AutorCreateComponent } from "./modules/components/autor/autor-create/autor-create.component";
import { EditoraCrudComponent } from "./modules/views/editora-crud/editora-crud.component";
import { EditoraCreateComponent } from "./modules/components/editora/editora-create/editora-create.component";
import { LivroCreateComponent } from "./modules/components/livro/livro-create/livro-create.component";
import { AutorUpdateComponent } from "./modules/components/autor/autor-update/autor-update.component";
import { EditoraUpdateComponent } from "./modules/components/editora/editora-update/editora-update.component";
import { LivroUpdateComponent } from "./modules/components/livro/livro-update/livro-update.component";
import { AutorDeleteComponent } from "./modules/components/autor/autor-delete/autor-delete.component";
import { LivroDeleteComponent } from "./modules/components/livro/livro-delete/livro-delete.component";
import { EditoraDeleteComponent } from "./modules/components/editora/editora-delete/editora-delete.component";
import { LoginComponent } from "./modules/views/login/login.component";
import { CadastroComponent } from "./modules/views/cadastro/cadastro.component";
import { AuthGuard } from "./modules/guards/authGuard";

const routes: Routes = [

  { path: "", component: HomeComponent, canActivate: [AuthGuard]},

  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },

  { path: "autores", component: AutorCrudComponent, canActivate: [AuthGuard] },
  { path: "autores/create", component: AutorCreateComponent, canActivate: [AuthGuard] },
  { path: "autores/update/:id", component: AutorUpdateComponent, canActivate: [AuthGuard] },
  { path: "autores/delete/:id", component: AutorDeleteComponent, canActivate: [AuthGuard] },
  
  { path: "editoras", component: EditoraCrudComponent, canActivate: [AuthGuard] },
  { path: "editoras/create", component: EditoraCreateComponent, canActivate: [AuthGuard] },
  { path: "editoras/update/:id", component: EditoraUpdateComponent, canActivate: [AuthGuard] },
  { path: "editoras/delete/:id", component: EditoraDeleteComponent, canActivate: [AuthGuard] },
  
  { path: "livros", component: LivroCrudComponent, canActivate: [AuthGuard]  },
  { path: "livros/create", component: LivroCreateComponent, canActivate: [AuthGuard] },
  { path: "livros/update/:id", component: LivroUpdateComponent, canActivate: [AuthGuard] },
  { path: "livros/delete/:id", component: LivroDeleteComponent, canActivate: [AuthGuard] },

  {path: "**", component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
