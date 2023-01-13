import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  id = "hola";

  constructor(private router:Router, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }
}
