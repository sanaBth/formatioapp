import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationDbService } from 'app/service/formation-db.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
video:any
id:string
formation:any
  postForm : FormGroup;
  constructor(private router: Router,private formationservice : FormationDbService) { }

  ngOnInit(): void {
    this.formationservice.getFormations().subscribe((data:any) => {
      this.formation = data;
     /// let id = this.formation._id;
      console.log(this.formation);
 
    });

    this.postForm = new FormGroup
    ({
      nom: new FormControl('',Validators.required),
      dure: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    })
  }

  selectFile(e:any)
  {
  this.video = e.target.files[0]
  console.log(this.video);
}

selectId(e:any)
{
 this.id=e.target.value;
 console.log(this.id);
}
newVideo(){
 
  let formData = new FormData()
  formData.append('name',this.postForm.controls.nom.value)
  formData.append('video',this.video)
  formData.append('description',this.postForm.controls.description.value)

  formData.append('dure',this.postForm.controls.dure.value)

  console.log(formData)
  console.log(this.id)
   this.formationservice.addVideo(formData,this.id).subscribe(
    (res)=>{console.log(res);
      
      this.router.navigate(['/formation']);
    },
    (err)=>{console.log(err);
    //notification error
  
  }
  ); 
}
}
