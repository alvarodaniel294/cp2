import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router ,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [PeticionesService]
  
})
export class EditEventComponent implements OnInit {

  public eventId;
  public model;
  public programs;
  public sucursales;
  public page_event;
  public id;
  public nuevoFacilitador;
  public listaFacilitadores;
  public listaFacilitadoresEvento=[];
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
    
  
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      this._peticionesService.getInicio().subscribe(res => {
        console.log(res[0]);
        this.page_event = res[0].home.events;
        this.id = res[0]._id;
        this.queryPrograms();
          this.querySucursal();
          this.queryFacilitadores();
          this.queryEvento();
      });

    
   });
  }
  queryEvento(){
    this.listaFacilitadoresEvento=[];
    this._peticionesService.getEventOnly(this.eventId).subscribe(
      result => {
        console.log(result);
        this.model = result;
        
        for(let f of this.model.facilitators){
          this._peticionesService.getFacilitador(f).subscribe(res=>{
            this.listaFacilitadoresEvento.push(res);
          })
        }
        console.log(this.listaFacilitadoresEvento)
     },
     error => {
        console.log(<any>error);
     })
    
  }
  queryPrograms() {
    this._peticionesService.getPrograms().subscribe(response => {
       this.programs = response;
       //console.log(this.programs);
    },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
 }
 querySucursal(){
   this._peticionesService.getSucursales().subscribe(
    response => {
      this.sucursales= response;
      // console.log(this.sucursales);
    },
    error => {
      var errorMessage = <any>error;
      console.log(errorMessage);
    }
   );
 }
 queryFacilitadores(){
   this._peticionesService.getFacilitadores().subscribe(response=>{
     this.listaFacilitadores=response;
   },error=>{
    var errorMessage = <any>error;
    console.log(errorMessage);
   })
 }
 addFacilitadorButton(){
   if(this.nuevoFacilitador!=null){
     let fac={facilitadorId:this.nuevoFacilitador};
    this._peticionesService.addFacilitatorToEvent(fac,this.eventId).subscribe(res=>{
      this.queryEvento();
     })
   }
  
 }
 deleteFacilitador(facilitador_id){
    let fac={facilitadorId:facilitador_id};
   this._peticionesService.deleteFacilitador(fac,this.eventId).subscribe(res=>{
     this.queryEvento();
   })
 }
  save(){

  }
  cancelar(){
    window.history.back();
  }

  saveEventTop(){
    this._peticionesService.updateInicio_event(this.page_event,this.id).subscribe(
      res=>{
        alert("Guardado Exitosamente");
      },err=>{
        var errorMessage=<any>err;
        console.log(errorMessage);
      }
    )
  }
}
