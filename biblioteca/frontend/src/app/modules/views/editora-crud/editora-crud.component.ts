import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-editora-crud',
  templateUrl: './editora-crud.component.html',
  styleUrls: ['./editora-crud.component.css']
})
export class EditoraCrudComponent{
  constructor(private router: Router) {}

  navigateToEditorasCreate(): void {
    this.router.navigate(['editoras/create']);
  }
}
