import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { TimerService } from '../../services/timer.service';
import { OrphanService } from '../../services/orphan.service';
import { SponsorService } from 'src/app/services/sponsor.service';


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
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  personalIdCard: new FormControl('', Validators.required),
  telephoneNumber: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  nameOfFamilyAssisted: new FormControl('', Validators.required),
  nrOfFamilyHelped: new FormControl('', Validators.required),
  helpType: new FormControl('', Validators.required),
  contributionAmount: new FormControl('', Validators.required),
  paid: new FormControl('', Validators.required)
})

constructor(
  public fb: FormBuilder,
  private sponsorService: SponsorService,
  private timer:TimerService
  ) { }
ngOnInit() {
  debugger
  this.getUsrs();   
}

get firstName() { return this.sponsorForm.get('firstName'); }
get lastName() { return this.sponsorForm.get('lastName'); }
get address() { return this.sponsorForm.get('lastName'); }
get personalIdCard() { return this.sponsorForm.get('personalIdCard'); }
get personalId() { return this.sponsorForm.get('personalIdCard'); }
get telephoneNumber() { return this.sponsorForm.get('telephoneNumber'); }
get email() { return this.sponsorForm.get('email'); }
get nameOfFamilyAssisted() { return this.sponsorForm.get('nameOfFamilyAssisted'); }
get nrOfFamilyHelped() { return this.sponsorForm.get('nrOfFamilyHelped'); }
get helpType() { return this.sponsorForm.get('helpType'); }
get contributionAmount() { return this.sponsorForm.get('contributionAmount'); }
get paid() { return this.sponsorForm.get('paid'); }

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
  await this.sponsorService.getSponsorData().subscribe(data =>{
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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    personalIdCard: new FormControl('', Validators.required),
    personalId: new FormControl('', Validators.required),
    telephoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nameOfFamilyAssisted: new FormControl('', Validators.required),
    nrOfFamilyHelped: new FormControl('', Validators.required),
    helpType: new FormControl('', Validators.required),
    contributionAmount: new FormControl('', Validators.required),
    paid: new FormControl('', Validators.required)
  })
}

openUpdateOrphanMoal(orphan:any){
  debugger;
  this.isUpdateOrphan = true
  this.sponsorForm.patchValue({ 
    ...orphan
  })
}

async closeUpdateSponsorModal(){
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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    personalIdCard: new FormControl('', Validators.required),
    telephoneNumber: new FormControl('', Validators.required),
    personalId: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nameOfFamilyAssisted: new FormControl('', Validators.required),
    nrOfFamilyHelped: new FormControl('', Validators.required),
    helpType: new FormControl('', Validators.required),
    contributedAmount: new FormControl('', Validators.required),
    paid: new FormControl('', Validators.required)
  });
}

delOrphan(){
  this.userList.pop()
}
}

