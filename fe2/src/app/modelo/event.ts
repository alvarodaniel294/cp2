export class Event {
   constructor(
      public facilitators:{},
      public photo:string,
      public date_start: Date,
      public name: string,
      public description: string,
      public program_id: string,
    
      
      // public inscriptions: [{
        //   name: string,
      //    state: number,
      //    person: string,
      //    description: string
      // }],
      // public total: number,
      public offices: string,
      // public date_end:Date,
      // public active:boolean,
   ) { }
}