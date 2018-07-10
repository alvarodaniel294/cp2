import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
//import { UserService } from '../services/user.service';
import { Identity,Roles } from '../services/global';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
   selector: 'app-events',
   templateUrl: './events.component.html',
   styleUrls: ['./events.component.css'],
   providers: [ PeticionesService]

})
export class EventsComponent implements OnInit {
   
   public events;
   public role;
   public page_event;
   public id;
   
   constructor(
      private router: Router,
      private _peticionesService: PeticionesService
      //,private _userService: UserService
   ) { }
   ngOnInit() {

    this._peticionesService.getInicio().subscribe(res => {
        console.log(res[0]);
        this.page_event = res[0].home.events;
        this.id = res[0]._id;
        this.queryRol();
        
      });

    //    this.queryEvents(); 
    //    this.role=Roles.name;
    }
    
    edit(event_id){
        this.router.navigate(['home/eventos/edit',event_id]);
    }
    addPerson(){
     this.router.navigate(['home/event/persons/add']);
    }
    viewPrint(_id: string) {
        this.router.navigate(['home/listPrint', _id]);
    }
    viewRequirements(_id: string) {
        this.router.navigate(['home/listRequeriments', _id]);
    }
    accountsRec(_id: string) {
        this.router.navigate(['home/accountsReceivable', _id]);
    }
    send(_id: string) {
      this.router.navigate(['home/event', _id]);
    }
    sendTaller(_id:string){
      this.router.navigate(['home/workshopListP', _id]);
        
    }
   queryEventsSucursalActive(){
    //    this._peticionesService.getEventsActiveOfSucursal(Identity._id).subscribe(
    //     result => {
    //         this.events = result;
    //        console.log(this.events)
    //         this.events.map(event => {
    //            var sum = 0;
    //            event.inscriptions.forEach(e => {
    //               if (e.state == 1) sum++;
    //            });
    //            event.cupos = event.total - sum;
    //         });
    //      },
    //      error => {
    //         var errorMessage = <any>error;
    //         console.log(errorMessage);
    //      }
    //   );
   }
   queryEvents() {
      this._peticionesService.getEvents().subscribe(
         result => {
            this.events = result;
           console.log(this.events)
            this.events.map(event => {
               var sum = 0;
               event.inscriptions.forEach(e => {
                  if (e.state == 1) sum++;
               });
               event.cupos = event.total - sum;
            });
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
         }
      );
   }
   queryRol(){
       console.log(Identity.rol)
    this._peticionesService.getRole(Identity.rol).subscribe(
        result => {
         this.role = result;

            if(this.role.name=='Admin'){
                this.queryEvents();
            }else{
                this.queryEventsSucursalActive();
            }

        },
        error=>{
         var errorMessage = <any>error;
         console.log(errorMessage);
        }
    );
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


