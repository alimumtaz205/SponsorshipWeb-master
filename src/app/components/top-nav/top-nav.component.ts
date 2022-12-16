import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'Sponsorship-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  siteLanguage = 'German';
  languageList = [
    { code: 'de', label: 'German' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'Arabic' },
  ];


  currenturl: any
  
  openn : string = "";

  openV:boolean = true
  selectedLang: string = 'de';

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
  }
  
  changeSiteLanguage(e: any): void {
    let localeCode = e.target.value
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }

  changeonSelect() {
    var lang = this.selectedLang;
    let languageSelect: any = document.querySelector('select.goog-te-combo');
    if (languageSelect) {
      languageSelect.value = lang;
      languageSelect.dispatchEvent(new Event('change'));
    }
  }
  SelectValue(code: string) {
    var lang = code;
    let languageSelect: any = document.querySelector('select.goog-te-combo');
    if (languageSelect) {
      languageSelect.value = lang;
      languageSelect.dispatchEvent(new Event('change'));
    }
  }
 
  logout() {
   localStorage.removeItem('authenticatedByLoginToken')
   localStorage.removeItem('userData')
   this.router.navigateByUrl('/login')
 }
 public get identity() {
   if(localStorage.getItem('userData')){
     return JSON.parse(localStorage.getItem('userData') ?? "")
 
   }
  }

  currentState(url:string) : boolean {
   return this.currenturl
  }
  
 open(a:any)
 {
  this.openV = !this.openV
   this.openn = a;
  //  if(document.getElementById("logo"))
  //  {
  //    document.getElementById("logo")!.style.opacity  = "0";
  //  }

   if(document.getElementById("sidebar"))
   {
     document.getElementById("sidebar")!.style.width  = "200px";
   }

  //  if(document.getElementById("nav"))
  //  {
  //    document.getElementById("nav")!.style.marginLeft  = "250px";
  //  }

   if(document.getElementById("footer"))
   {
     document.getElementById("footer")!.style.marginLeft  = "-1px";
   }

   if(document.getElementById("main-div"))
   {
     document.getElementById("main-div")!.style.marginLeft  = "250px";
   }

   if(document.getElementById("icons"))
   {
     document.getElementById("icons")!.style.opacity  = "0";
     document.getElementById("icons")!.style.display  = "none";
   }

   if(document.getElementById("icons1"))
   {
     document.getElementById("icons1")!.style.display  = "block";
     setTimeout(() => document.getElementById("icons1")!.style.opacity = "1", 300);
   }

 }


 

 close()
 {
  this.openV = !this.openV
  //  if(document.getElementById("logo"))
  //  {
  //    document.getElementById("logo")!.style.opacity  = "1";
  //  }

   if(document.getElementById("sidebar"))
   {
     document.getElementById("sidebar")!.style.width  = "60px";
   }

  //  if(document.getElementById("nav"))
  //  {
  //    document.getElementById("nav")!.style.marginLeft  = "60px";
  //  }

   if(document.getElementById("footer"))
   {
     document.getElementById("footer")!.style.marginLeft  = "-1px";
   }

   if(document.getElementById("main-div"))
   {
     document.getElementById("main-div")!.style.marginLeft  = "60px";
   }

   if(document.getElementById("icons"))
   {
     document.getElementById("icons")!.style.display  = "block";
     setTimeout(() => document.getElementById("icons")!.style.opacity = "1", 300);
   }

   if(document.getElementById("icons1"))
   {
     document.getElementById("icons1")!.style.opacity  = "0";
     document.getElementById("icons1")!.style.display  = "none";
   }

 }
 ngDoCheck()
 {
   if(this.openn != 'a')
    {
     if(document.getElementById("inner"))
     {
       document.getElementById("inner")!.style.marginLeft  = "-1px";
     }

     if(document.getElementById("main-div"))
     {
       if(window.screen.width < 576)
       {
         document.getElementById("main-div")!.style.marginLeft  = "0px";
       }
       else
       {
         document.getElementById("main-div")!.style.marginLeft  = "60px";
       }
     }

     if(document.getElementById("footer"))
     {
       document.getElementById("footer")!.style.marginLeft  = "-1px";
     }

    //  if(document.getElementById("nav"))
    //  {
    //    if(window.screen.width < 576)
    //    {
    //      document.getElementById("nav")!.style.marginLeft  = "0px";
    //    }
    //    else
    //    {
    //      document.getElementById("nav")!.style.marginLeft  = "60px";
    //    }
    //  }

     if(document.getElementById("icons1"))
     {
     }
    }

 }


}
