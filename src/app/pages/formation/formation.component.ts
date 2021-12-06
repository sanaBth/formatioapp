import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'app/model/video';
import { FormationDbService } from 'app/service/formation-db.service';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation : []
  detailsformation : any
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor( private formationservice :FormationDbService , private router: Router) { }

  ngOnInit(): void {
  this.refresh();

  }
  detailFormation(id:string)
  {
  
   this.router.navigate(['/formation',id]);
  }
  refresh()
  {
    return this.formationservice.getFormations().subscribe((data:any) => {
      this.formation = data;
      console.log(this.formation);
 
    });
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
