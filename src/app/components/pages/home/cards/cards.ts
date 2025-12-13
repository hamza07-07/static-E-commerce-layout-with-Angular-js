
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
 
   searchText : String  = "";
 
  cards =  [
    {
      title : "Fragrance for Men by VERSACE",
      image : "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      price: "2499.00" 
    },


     {
      title : "Tom Ford Black Leather",
      image : "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tJTIwZm9yZCUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
      price: "3200.00" 
    },


     {
      title : "Channel",
      image : "https://images.unsplash.com/photo-1676305982764-0867908969b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "4800.00" 
    },
    
     {
      title : "Dior sauvage",
      image : "http://images.unsplash.com/photo-1759794108525-94ff060da692?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmQlMjBwZXJmdW1lc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "6800.00" 
    },

     {
      title : "a black rectangular object",
      image : "https://images.unsplash.com/photo-1664470740442-f5de3e512e8b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "7500.00" 
    },
     {
      title : "Jean Paul Gaultier",
      image : "https://images.unsplash.com/photo-1681935703733-5e9df028a318?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmVhbiUyMFBhdWwlMjBHYXVsdGllcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "5500.00" 
    },

  ]

  
  get filteredCards(){

    if(!this.searchText)
      return this.cards

    const txt = this.searchText.toLowerCase();

    return this.cards.filter( data =>{

     return (data.title || '').toLowerCase().includes(txt);

    })

  }
}





