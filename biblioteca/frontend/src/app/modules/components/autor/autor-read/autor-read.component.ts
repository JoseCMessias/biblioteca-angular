import { AutorService } from 'src/app/modules/services/autor.service';
import { Component, OnInit } from '@angular/core';
import { IAutor } from 'src/app/modules/interfaces/IAutor.interfaces';

@Component({
  selector: 'app-autor-read',
  templateUrl: './autor-read.component.html',
  styleUrls: ['./autor-read.component.css']
})    
export class AutorReadComponent implements OnInit{

  autores: IAutor[] = [];
  
  displayedColumns: (number | string)[] = ['id', 'name', 'action'];

  constructor(private autorService: AutorService){}

  ngOnInit(): void {
    this.autorService.read().subscribe(autores => {
      this.autores = autores;
    })
  }
}
