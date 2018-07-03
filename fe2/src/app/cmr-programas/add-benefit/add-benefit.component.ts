import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-add-benefit',
  templateUrl: './add-benefit.component.html',
  styleUrls: ['./add-benefit.component.css'],
  providers: [PeticionesService],
  
})
export class AddBenefitComponent implements OnInit {
  public newBenefit;
  public programId;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
 ) { }

 ngOnInit() {
    this.queryProgramId();
 }
 queryProgramId() {
    this.route.params.subscribe(params => {
       this.programId = params.id;
    });
 }

  onSubmit(){
    let benefitObject={} as Benefit;
    benefitObject.name=this.newBenefit;
    benefitObject.photo='';
    this._peticionesService.addBenefitToProgram(this.programId,benefitObject).subscribe(
      res=>{
        alert('Guardado Exitosamente')
        window.history.back();
      },err=>{
        var errorMessage = <any>err;
        console.log(errorMessage);
      })

  }
  cancel(){
    window.history.back();
  }

}

export interface Benefit{
  photo:string,
  name:string,
}
