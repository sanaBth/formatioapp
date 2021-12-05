import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationDbService } from 'app/service/formation-db.service';

@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.css']
})
export class DetailformationComponent implements OnInit {
  i : string ;
  detailsformation : []
  detailVideo: []
  listVideo: []
  nom : string
  id : string
  public list:[]
  lengthList:number
  public listlien : []
  constructor(private route: ActivatedRoute,private _formationservice :FormationDbService) { }

  ngOnInit(): void {
    this.i = this.route.snapshot.params.id;
    console.log(this.i);
    this._formationservice.getOneformation(this.i).subscribe((data:any) => {
      this.detailsformation = data;
      //this.list = data.listVideo
    console.log(this.detailsformation);
      
    });
   
   
  }

}
