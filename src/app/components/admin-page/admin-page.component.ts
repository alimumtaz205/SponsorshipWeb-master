import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrphanService } from '../../services/orphan.service';
import { SponsorService } from '../../services/sponsor.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  // constructor(){

  // }

  // ngOnInit(): void { 

  //}
//}

  titleParam = {company:'Phrase'}
  dropdown:boolean = false
  
  filterTerm!: string;
  filterTermSponsor!: string;
  p: number = 1;

  users:any=[];
  userList = [
    {
      imageUrl: '',
      familyName: 'Jumairah Katey',
      motherName: 'Nasty Wilcon',
      motherFirstName: 'Ajriza Khanum',
      maternalHealthStatus: 'Good Health',
      personalId: 2323232,
      telephoneNumber: '3020392',
      profession: 'House Wife',
      numberOfOrphans: 3,
      spouseDeathDate: new Date(),
      address: 'new auston roads street iii',
      attachements: [
  
      ],
      orphansList: [
        {
          name: 'Arman Khan',
          dateOfBirth: new Date(),
          firstName: 'Arman',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '5 Grade',
          notes: 'this is details about orphan'
        },
        {
          name: 'Sony Tomer',
          dateOfBirth: new Date(),
          firstName: 'Sony',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '6 Grade',
          notes: 'this is details about orphan'
        }
      ]
    },
    {
      imageUrl: '',
      familyName: 'Jumairah Katey',
      motherName: 'Nasty Wilcon',
      motherFirstName: 'Ajriza Khanum',
      maternalHealthStatus: 'Good Health',
      personalId: 2323232,
      telephoneNumber: '3020392',
      profession: 'House Wife',
      numberOfOrphans: 3,
      spouseDeathDate: new Date(),
      address: 'new auston roads street iii',
      attachements: [
  
      ],
      orphansList: [
        {
          name: 'Arman Khan',
          dateOfBirth: new Date(),
          firstName: 'Arman',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '5 Grade',
          notes: 'this is details about orphan'
        },
        {
          name: 'Sony Tomer',
          dateOfBirth: new Date(),
          firstName: 'Sony',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '6 Grade',
          notes: 'this is details about orphan'
        }
      ]
    },
    {
      imageUrl: '',
      familyName: 'Jumairah Katey',
      motherName: 'Nasty Wilcon',
      motherFirstName: 'Ajriza Khanum',
      maternalHealthStatus: 'Good Health',
      personalId: 2323232,
      telephoneNumber: '3020392',
      profession: 'House Wife',
      numberOfOrphans: 3,
      spouseDeathDate: new Date(),
      address: 'new auston roads street iii',
      attachements: [
  
      ],
      orphansList: [
        {
          name: 'Arman Khan',
          dateOfBirth: new Date(),
          firstName: 'Arman',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '5 Grade',
          notes: 'this is details about orphan'
        },
        {
          name: 'Sony Tomer',
          dateOfBirth: new Date(),
          firstName: 'Sony',
          healthStatus: 'Normal Healthy',
          residentialStatus: 'Single',
          numberOfPeople: 3,
          socialCare: 'fit',
          earning: 'Student',
          academicLevel: '6 Grade',
          notes: 'this is details about orphan'
        }
      ]
    }

  ]

  sponsorList: any = [
    {
      firstName: "Al Nora",
      lastName: 'Mobatach',
      address: 'JLT DMCC Dubai',
      personalIdCard: '329023',
      telephoneNumber: '39239923',
      email: "aln@gmail.com",
      nameOfFamilyAssisted: 'Jumairah Katey',
      NrOfFamilyHelped: 4,
      helpType: 'Sponsored',
      contributionAmount: "50K DHM",
      paid: true
    },
    {
      firstName: "Al Nora",
      lastName: 'Mobatach',
      address: 'JLT DMCC Dubai',
      personalIdCard: '329023',
      telephoneNumber: '39239923',
      email: "aln@gmail.com",
      nameOfFamilyAssisted: 'Jumairah Katey',
      NrOfFamilyHelped: 4,
      helpType: 'Sponsored',
      contributionAmount: "50K DHM",
      paid: true
    },
    {
      firstName: "Al Nora",
      lastName: 'Mobatach',
      address: 'JLT DMCC Dubai',
      personalIdCard: '329023',
      telephoneNumber: '39239923',
      email: "aln@gmail.com",
      nameOfFamilyAssisted: 'Jumairah Katey',
      NrOfFamilyHelped: 4,
      helpType: 'Sponsored',
      contributedAmount: "50K DHM",
      paid: true
    }
  ]

  attachments: any[] = []

  orphanForm! : FormGroup;
  
  sponsorForm! : FormGroup;
  
  isUpdateOrphan = false
  isUpdateSponsor = false
  
  motherImage:any  

  
  constructor(
    private fb: FormBuilder,
    private orphanService: OrphanService,
    private sponsorService: SponsorService,
    private httpClient: HttpClient) {
   }

  ngOnInit(): void {
    debugger;
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.users = data;
    })
    //orphans: Orphan[] = orphansData

    this.orphanForm = this.fb.group({
      familyName: [null,[Validators.required]],
      motherName: [null,[Validators.required]],
      motherFirstName: [null,[Validators.required]],
      motherLastName: [null,[Validators.required]],
      profession: [null,[Validators.required]],
      maternalHealthStatus: [null,[Validators.required]],
      personalIdCard: [null,[Validators.required]],
      spouseDeathDate: [null],
      address: [null,[Validators.required]],
      telephoneNumber: [null,[Validators.required]],
      numberOfOrphans: [null],
      orphansList: this.fb.array([])
    })

    
    this.sponsorForm = this.fb.group({
      firstName: [null,[Validators.required]],
      lastName: [null,[Validators.required]],
      address: [null,[Validators.required]],
      personalIdCard: [null,[Validators.required]],
      telephoneNumber: [null,[Validators.required]],
      email: [null,[Validators.required, Validators.email]],
      nameOfFamilyAssisted: [null, [Validators.required]],
      nrOfFamilyHelped: [null, [Validators.required]],
      helpType: [null,[Validators.required]],
      contributedAmount: [null,[Validators.required]],
      paid: [null,[Validators.required]],
    })
  }

  get orphansList() {
    return this.orphanForm.controls["orphansList"] as FormArray;
  }

  addOrphan() {
    const orphanDataForm = this.fb.group({
        name: [null, Validators.required],
        firsName: [null, Validators.required],
        healthStatus: [null, Validators.required],
        note: [null, Validators.required],
        dateOfBirth: [null, Validators.required],
        academicLevel: [null, Validators.required],
        residentialStatus: [null, Validators.required],
        numberOfPeople: [null, Validators.required],
        socialCare: [null, Validators.required],
        earnings: [null, Validators.required],
        godFatherType: [null, Validators.required],
    });
  
    this.orphansList.push(orphanDataForm);
  }

  deleteOrphan(orphanIndex: number) {
    this.orphansList.removeAt(orphanIndex);
  }


  getFormProperty(property:any){
    return this.orphanForm.get(property);
  }
  
  getSponsorFormProperty(property:any){
    return this.orphanForm.get(property);
  }

  getFormArrayProperty(index:any, property:any){
    return (this.orphanForm.controls['orphansList'] as FormArray).controls[index].get(property)
  }

  onSubmitOrphanForm(){

    if(this.orphanForm.valid){

      let request = {...this.orphanForm.value, 
        motherImage: this.motherImage,
        attachemnts: this.attachments }
        
    this.userList.push(request)

      this.orphanService.addOrphan(request).subscribe(resp => {
        alert('orphan created '+ JSON.stringify(this.orphanForm.value))

      }, err => {
        alert('orphan created '+ JSON.stringify(this.orphanForm.value))
      })
    
    } else {
      Object.values(this.orphanForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  onSubmitSponsorForm(){
    if(this.sponsorForm.valid){
      let request = {
        ...this.sponsorForm
      }

      this.sponsorList.push(request)
      this.sponsorService.addSponsor(request).subscribe(resp => {
        alert('sponsor created '+ JSON.stringify(this.sponsorForm.value))
  
      }, err => {
        alert('sponsor created '+ JSON.stringify(this.sponsorForm.value))
      })

    }else {
      Object.values(this.orphanForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  openUpdateOrphanMoal(orphan:any){
    this.isUpdateOrphan = true
    this.orphanForm.patchValue({ 
      ...orphan
    })
  }

  openUpdateSponsorMoal(sponsor:any){
    this.isUpdateSponsor = true
    this.sponsorForm.patchValue({
      ...sponsor
    })
  }
  closeUpdateOrphanMoal(){
    this.isUpdateOrphan = false
    Object.values(this.orphanForm.controls).forEach(control => {
      control.reset()
    });
  }

  closeUpdateSponsorMoal(){
    this.isUpdateSponsor = false
    Object.values(this.sponsorForm.controls).forEach(control => {
      control.reset()
    });
  }

  delOrphan(){
    this.userList.pop()
  }

  delSponsor(){
    this.sponsorList.pop()
  }
  
 DropDown() {
   this.dropdown = !this.dropdown
 }
 //push selected file to files list
 onSelectFile(event: any) {
   let newFile: any = {
     fileBytes: null,
     extension: null
   }

   newFile.fileBytes = event.target.files[0];
   newFile.extension = this.fetchExt(event.target.files[0].name)

   var fileReader = new FileReader()

   fileReader.readAsDataURL(newFile.fileBytes)

   fileReader.onload = () => {
     console.log("byte array ", fileReader.result)
     newFile.fileBytes = fileReader.result
     this.attachments.push(newFile)
     console.log("CompanyLogo ", this.attachments)
   }

 }


 onSelectImage(event:any){
  let newFile: any = {
    fileBytes: null,
    extension: null
  }

  newFile.fileBytes = event.target.files[0];
  newFile.extension = this.fetchExt(event.target.files[0].name)

  var fileReader = new FileReader()

  fileReader.readAsDataURL(newFile.fileBytes)

  fileReader.onload = () => {
    console.log("byte array ", fileReader.result)
    newFile.fileBytes = fileReader.result
    this.motherImage = newFile
    console.log("CompanyLogo ", this.attachments)
  }

 }

 removeAttachment(){
   this.attachments.splice(this.attachments.findIndex(x => x.fileBytes),1)
 }

 //get formatted file name from a selected file
 //file be selected from file element
 public fetchExt(name: string): string {
   const splitName = name.split('.')
   let extensionName = ''
   if (splitName.length > 0) {
     extensionName = splitName[splitName.length - 1]
   }
   return extensionName
 }


}
