import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-benefit-taller',
  templateUrl: './add-benefit-taller.component.html',
  styleUrls: ['./add-benefit-taller.component.css'],
  providers:[PeticionesService]
})
export class AddBenefitTallerComponent implements OnInit {
  public newBenefit;
  public tallerId;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
 ) { }

 ngOnInit() {
    this.queryTallerId();
 }
 queryTallerId() {
    this.route.params.subscribe(params => {
       this.tallerId = params.id;
    });
 }

  onSubmit(){
    let benefitObject={} as Benefit;
    benefitObject.name=this.newBenefit;
    benefitObject.photo='';
    this._peticionesService.addBenefitToTaller(this.tallerId,benefitObject).subscribe(
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
