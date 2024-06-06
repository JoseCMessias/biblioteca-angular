import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-crud',
  templateUrl: './livro-crud.component.html',
  styleUrls: ['./livro-crud.component.css']
})
export class LivroCrudComponent {
  constructor(private router: Router){}

  navigateTolivrosCreate(): void {
    this.router.navigate(['livros/create']);
  }
}
