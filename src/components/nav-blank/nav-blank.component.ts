import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/shared/services/products.service';
import { AllProducts } from 'src/shared/interfaces/products';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{

  constructor(private _ProductsService:ProductsService){}
  numberOfProductsInCard:number=0


  ngOnInit(): void {
    this._ProductsService.addToCard.subscribe({
      next:(res)=>{
        this.numberOfProductsInCard=res

      }
    })
  }
  onSearch(event: any) {
    this._ProductsService.updateSearchQuery(event.target.value);
  }

  

  }
  


