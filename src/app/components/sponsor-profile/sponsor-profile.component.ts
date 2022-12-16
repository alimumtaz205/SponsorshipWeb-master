import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { TimerService } from '../../services/timer.service';
import { OrphanService } from '../../services/orphan.service';


@Component({
  selector: 'Sponsorship-sponsor-profile',
  templateUrl: './sponsor-profile.component.html',
  styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {
//orphanForm!:  FormGroup;
submitted = false;
isUpdateOrphan = false
userList:any = [];
filterTerm!: string;
motherImage:any; 
attachments: any[] = [];

sponsorForm = new FormGroup({
  familyName: new FormControl('', Validators.required),
  motherFirstName: new FormControl('', Validators.required),
  motherName: new FormControl('', Validators.required),
  maternalHealthStatus: new FormControl('', Validators.required),
  personalId: new FormControl('', Validators.required),
  numberOfOrphans: new FormControl('', Validators.required),
  spouseDeathDate: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required)
})

constructor(
  public fb: FormBuilder,
  private orphanService: OrphanService,
  private timer:TimerService
  ) { }

  // orphanForm = this.fb.group({
  //   familyName: [null],
  //   MotherFirstName:[''],
  //   MotherlastName:[''],
  //   maternalHealthStatus:[''],
  //   personalIdCard:[''],
  //   numberOfOrphans:[''],
  //   spouseDeathDate:[''],
  //   address:['']
  // })

ngOnInit() {
  debugger

  this.getUsrs();   
  // await this.httpClient.get("assets/usersData.json").subscribe(data =>{
  //   console.log(data);  
  //   debugger;
  //   this.userList = data;
  // })
}

get familyName() 
{ 
  return this.sponsorForm.get('familyName'); 
}
get motherFirstName() { return this.sponsorForm.get('motherFirstName'); }
get motherName() { return this.sponsorForm.get('motherName'); }
get maternalHealthStatus() { return this.sponsorForm.get('maternalHealthStatus'); }
get personalId() { return this.sponsorForm.get('personalId'); }
get numberOfOrphans() { return this.sponsorForm.get('numberOfOrphans'); }
get spouseDeathDate() { return this.sponsorForm.get('spouseDeathDate'); }
get address() { return this.sponsorForm.get('address'); }

get f() { return this.sponsorForm.controls; }


public validate(): void {
  if (this.sponsorForm.invalid) {
    for (const control of Object.keys(this.sponsorForm.controls)) {
      this.sponsorForm.controls[control].markAsTouched();
    }
    return;
  }
}

async getUsrs(){
  await this.orphanService.getOrphanData().subscribe(data =>{
    console.log(data);  
    debugger;
    this.userList = data;
  })
}

onSubmit() {
  // this.submitted = true;
  // if (this.orphanForm.valid) {
  //   alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //   console.table(this.orphanForm.value);
  // }
}

addOrphan(){
  debugger;
  this.sponsorForm = new FormGroup({
    familyName: new FormControl('', Validators.required),
    motherFirstName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    maternalHealthStatus: new FormControl('', Validators.required),
    personalId: new FormControl('', Validators.required),
    numberOfOrphans: new FormControl('', Validators.required),
    spouseDeathDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
}

openUpdateOrphanMoal(orphan:any){
  debugger;
  this.isUpdateOrphan = true
  this.sponsorForm.patchValue({ 
    ...orphan
  })
}

async closeUpdateOrphanMoal(){
  this.timer.onTimerStart();
  this.isUpdateOrphan = false
 // Object.values(this.orphanForm.controls).forEach(control => {
  //  control.reset()
 // });
  
  this.timer.onTimerStop();
}

onSelectImage(event:any){
  let newFile: any = {
    fileBytes: null,
    extension: null
  }
}

removeAttachment(){
  this.attachments.splice(this.attachments.findIndex(x => x.fileBytes),1)
}

 //push selected file to files list
onSelectFile(event: any) {
  let newFile: any = {
    fileBytes: null,
    extension: null
    }
}

getFormProperty(property:any){
  //return this.orphanForm.get(property);
}
onSubmitOrphanForm(){
  this.sponsorForm = new FormGroup({
    familyName: new FormControl('', Validators.required),
    MotherFirstName: new FormControl('', Validators.required),
    MotherlastName: new FormControl('', Validators.required),
    maternalHealthStatus: new FormControl('', Validators.required),
    personalIdCard: new FormControl('', Validators.required),
    numberOfOrphans: new FormControl('', Validators.required),
    spouseDeathDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });
}

delOrphan(){
  this.userList.pop()
}
}



//   sponsorDetails = 
//   {
//     firstName: "Al Nora",
//     lastName: 'Mobatach',
//     address: 'JLT DMCC Dubai',
//     personalIdCard: '329023',
//     telephoneNumber: '39239923',
//     email: "aln@gmail.com",
//     nameOfFamilyAssisted: 'Jumairah Katey',
//     NrOfFamilyHelped: 4,
//     helpType: 'Sponsored',
//     contributedAmount: "50K DHM",
//     paid: true
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
