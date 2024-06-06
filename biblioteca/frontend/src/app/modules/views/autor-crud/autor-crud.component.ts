import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-autor-crud",
  templateUrl: "./autor-crud.component.html",
  styleUrls: ["./autor-crud.component.css"],
})
export class AutorCrudComponent {
  constructor(private router: Router) {}

  navigateToAutoresCreate(): void {
    this.router.navigate(['autores/create']);
  }
}
