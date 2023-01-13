import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  id = "hola";

  constructor(private router:Router, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  gotoUser (id:number){
    this.router.navigate(['/detalles',id])
  }
}
