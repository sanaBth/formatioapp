import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'app/model/formation';
import { FormationDbService } from 'app/service/formation-db.service';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  img:any
  id:string;
  actionPage:String = 'Ajouter formation';
  currentformation : any;

  videos:any[]
  constructor( private router: Router ,   private route: ActivatedRoute
    ,private formationService : FormationDbService) { }
  postForm : FormGroup;
  ngOnInit(): void {
    this.id =  this.route.snapshot.params.id;
    console.log(this.id);
     if (this.id)
    {
      this.actionPage = 'Modifier une formation';
      this.formationService.getOneformation(this.id).subscribe((data:any) => {
        this.currentformation = data;
        //this.list = data.listVideo
      console.log(this.currentformation);
        
      });
    /*    this.currentformation =this._formationService.getOneformation(this.id)
   console.log(this.currentformation);  */
    }


    this.postForm = new FormGroup
    ({
      nom: new FormControl(this.currentformation.nom,Validators.required),
      dure: new FormControl(this.currentformation.dure,Validators.required),
      nomformateur: new FormControl(this.currentformation.nomformateur,Validators.required),
      description: new FormControl(this.currentformation.description,Validators.required),
      prix: new FormControl(this.currentformation.prix,Validators.required),

    })
  }
  selectFile(e:any){
  this.img = e.target.files[0]
  console.log(this.img);
}
selectVideos(e:any){
  this.videos = e.target.files
}



newFormation(){
 
  let formData = new FormData()
  formData.append('nom',this.postForm.controls.nom.value)
  formData.append('image',this.img)
  formData.append('description',this.postForm.controls.description.value)
  formData.append('dure',this.postForm.controls.dure.value)
  formData.append('nomformateur',this.postForm.controls.nomformateur.value)
  formData.append('prix',this.postForm.controls.prix.value)
  console.log(formData)
  /* if(this.actionPage == 'Ecrivez un article')
    { */
  this.formationService.addFormation(formData).subscribe(
    (res)=>{console.log(res);
      this.router.navigate(['/formation']);
    },
    (err)=>{console.log(err);
    //notification error
  
  }
  ); 
/* }
else
{
  this._articleservice.updateItem(this.i,this.currentarticle )
} */
}
}
