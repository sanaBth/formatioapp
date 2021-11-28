import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Video } from 'app/model/video';
import { FormationDbService } from 'app/service/formation-db.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation : Video[]
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor( private _formationservice :FormationDbService ) { }

  ngOnInit(): void {
    this._formationservice.getFormations().subscribe((data:any) => {
      this.formation = data;
      console.log(this.formation);
 
    });

  }
 
}
