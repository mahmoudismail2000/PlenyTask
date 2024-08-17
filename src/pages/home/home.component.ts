import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/shared/services/products.service';
import { Category } from 'src/shared/interfaces/category';
import { AllProducts } from 'src/shared/interfaces/products';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { NavBlankComponent } from 'src/components/nav-blank/nav-blank.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,NavBlankComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService:ProductsService){}
  
  allCategories:Category[]=[]
  numberOfProducts!:number
  allProducts:AllProducts={} as AllProducts
  currentCategory:string="All"
  @Input() searchWord:string=''
  productsInCard:number=0
  categories:AllProducts[]=[]
  numberOfAllProducts!:number


  ngOnInit(): void {
    this.getAllProducts()
    this._ProductsService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.allCategories=res
        for(let i=0;i<res.length;i++){
          this._ProductsService.getProductsByCategory(this.allCategories[i].slug).subscribe({
            next:(res)=>{
              this.categories.push(res)
              
              
            }
          })
          
          
          
          
          

        }
        
        
        

      },
      error:(err)=>{
        console.log(err);
        

      }
    })
    this._ProductsService.currentSearchQuery.subscribe(query => {
      this._ProductsService.searchProducts(query).subscribe({
        next:(res)=>{
          this.allProducts=res
          

        }
      })
    });
   
    

    


    
  }

  
  
  getProductsByCategory(categoryName:string):any{
    this._ProductsService.getProductsByCategory(categoryName).subscribe({
      next:(res)=>{
        this.allProducts=res
        this.currentCategory=categoryName
        
        
      }
    })

  }
  getAllProducts(){
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.allProducts=res
        this.numberOfAllProducts=res.total
        

      },
      error:(err)=>{
        console.log(err);
        

      }
    })
  }
  pageChanged(event:any){
    this._ProductsService.homePagination(event).subscribe({
      next:(res)=>{
        console.log(res);
        this.allProducts=res
        

      },error:(err)=>{
        console.log(err);
        

      }
    })
    

  }
  addToCard():void
  {
    this.productsInCard+=1
    this._ProductsService.addToCard.next(this.productsInCard)


  }

  
 
  
 
    
    

  }


