import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormationDbService } from 'app/service/formation-db.service';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  img:any
  videos:any[]
  constructor(private _formationService : FormationDbService) { }
  postForm : FormGroup;
  ngOnInit(): void {
    this.postForm = new FormGroup
    ({
      nom: new FormControl('',Validators.required),
      dure: new FormControl('',Validators.required),
      nomformateur: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      prix: new FormControl('',Validators.required),

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
  this._formationService.addFormation(formData).subscribe(
    (res)=>{console.log(res);
      //this.router.navigate(['/home']);
    },
    (err)=>{console.log(err);
    //notification error
  
  }
  ); 
}
}
