import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'app/model/commande';
import { Formation } from 'app/model/formation';
import { Panier } from 'app/model/panier';
import { User } from 'app/model/user';
import { Video } from 'app/model/video';
import { CartService } from 'app/service/cart.service';
import { FormationDbService } from 'app/service/formation-db.service';
import { LocalstorageService } from 'app/service/localstorage.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation : []
  newformation : []
  filterargs:string
  detailsformation : any
  filtredInput: String="";
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  userconnected : User;
  userId:string
  commande:Commande
  panier:any
  oneformation : []
      listpanier :Panier[]
  constructor(private formationservice :FormationDbService ,
    private storageService :LocalstorageService ,
    private cartService:  CartService, 
    

    private router: Router)
   { }

  ngOnInit(): void
   {
    this.refresh();
    this.userconnected = JSON.parse(localStorage.getItem('userconnected') || 'null')
    this.userId = JSON.parse(localStorage.getItem('userid') || 'null')
    if (this.userconnected )
    {
      console.log(this.userconnected);
    }
  }

  addtoCart(oneformation : Formation,idformation:string)
   {
    //this.storageService.storeOnpanier(oneformation);
    //this.storageService.storeOnpanier(oneformation);
    this.panier = this.storageService.getPanier();
    console.log(this.panier);
    if  (this.panier.length !=0 )
    {
      console.log("panier plein");
     console.log(this.panier.find(item => item._id === idformation))

         if((this.panier.find(item => item._id === idformation)) === undefined)
        {
          this.storageService.storeOnpanier(oneformation)
         // console.log("bonjour");
        }
        else
        {

          console.log("vous avez déga commandé cet formation");
        }  
     }
    else
    {
     console.log("panier vide");
     this.storageService.storeOnpanier(oneformation);
    } 
  }
  popToast()
  {
   // this.toastr.warning('veuillez remplir ce champs');
    
  }
  refresh()
  {
    return this.formationservice.getFormations().subscribe((data:any) => {
      this.formation = data;
      console.log(this.formation);
 
    });
  }
  detailFormation(id:string)
  {
  
   this.router.navigate(['/formation',id]);
  }
  
  delformation(id:string)
  {
   // console.log(id);
    this.formationservice.delFormation(id);
    this.refresh();
  }
  upformation(id:string)
  {
   this.router.navigate(['/addformation',id]);
  }
}
/* this.cartService.addTocommande(this.userId,this.commande).subscribe(
  (res)=>{console.log(res);
  //  this.router.navigate(['/formation']);
  },
  (err)=>{console.log(err);
  //notification error

}
);  */