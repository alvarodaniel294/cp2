import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-mas-informacion',
  templateUrl: './mas-informacion.component.html',
  styleUrls: ['./mas-informacion.component.css'],
  providers: [PeticionesService]

})
export class MasInformacionComponent implements OnInit {

  public first_name;
  public last_name;
  public cellphone;
  public email;
  public city;
  // public consults;
  public programs;
  // public events;
  // public workshops;
  // public home;
  public program_selected;
  public interes_selected;
  constructor(
    private _peticionesService: PeticionesService,

  ) { }

  ngOnInit() {
    // this._peticionesService.getConsults().subscribe(res => {
    // this.consults = res;
      this._peticionesService.getPrograms().subscribe(res => {
      this.programs = res;
      console.log(this.programs)
        // this._peticionesService.getEvents().subscribe(res => {
        // this.events = res
        //   this._peticionesService.getWorkshops().subscribe(res => {
        //   this.workshops = res
        //     this._peticionesService.getPage().subscribe(res => { this.home = res[0] })
        //   })
        // })
      })
    // })
  }

  sendPerson(){
    let persona={} as Persona;
    persona.first_name=this.first_name;
    persona.last_name=this.last_name;
    persona.cellphone=this.cellphone;
    persona.email=this.email;
    persona.programId=this.program_selected;
    persona.interes_value=this.interes_selected;
    persona.city=this.city;
    console.log(persona);
    this._peticionesService.sendPerson(persona).subscribe(res=>{
      console.log(res);
      this.first_name=undefined;
      this.last_name=undefined;
      this.cellphone=undefined;
      this.email=undefined;
      
    })
  }
  selectingProgram(programSelected){
    this.program_selected=programSelected.value;
  }
  selectingInteres(interes){
    this.interes_selected=interes.value;
  }
}

export interface Persona{
  first_name:string,
  last_name:string,
  cellphone:number,
  email:number,
  city:string,
  programId:string,
  interes_value:string,

}
