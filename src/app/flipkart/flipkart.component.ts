import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
 products:any= [
  { name:'pen', price:10, rating:4, freedelivery:"true" },
  { name:'pencil', price:5, rating:3, freedelivery:"true"},
  { name:'mobile', price:1500, rating:5, freedelivery:"false"},
  { name:'cap', price:200, rating:4, freedelivery:"true"},
  { name:'notebook', price:20, rating:4, freedelivery:"true" },
  { name:'book', price:50, rating:5, freedelivery:"false"},

 ]
 term:string="";
 search(){
   this.products=this.products.filter((product:any)=>product.name.includes(this.term))
 }
 free(){
   this.products=this.products.filter((product:any)=>product.freedelivery=="true")
 }
 

 delete(i:Number){
   this.products.splice(i,1);

 }

 price1h(){
  this.products.sort((a:any,b:any)=>a.price-b.price);
 }

 priceh1(){
  this.products.sort((a:any,b:any)=>b.price-a.price);
 }

 rating1h(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating);
 }

 ratingh1(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating);
 }

 discount(){
  this.products=this.products.map((product:any)=>{
    product.price = product.price*0.5
    return product;
  })

 }


 delivery(){ this.products=this.products.map((product:any)=>{
  product.price = product.price+15
  return product;
})
  
 }

 total(){

  let total=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert(total);
 }
 
 cart(){
  alert(this.products.length);
  // let cart=this.products.length(());
  


 }

 name:string="";
 price:number=0;
 rating:number=0;
 fd:boolean=false;

 add(){
  let product={
    name:this.name,
    price:this.price,
    rating:this.rating,
    freedelivery:this.fd,
  }
 this.products.unshift(product);

 }
 
 
  
  

}
