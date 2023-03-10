import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'SponsorshipApp';

  notShow = true
  currenturl: string = '';

  rightInfo = { currentYear: new Date().getFullYear(), company: "CompanyName"}
  constructor(private router:Router) { }

  ngOnInit(): void {
  
    this.router.events.pipe(
          filter((event:any) => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
       if(event.url =='/admin-page') {
            this.currenturl = 'admin-page'
            this.notShow = true
          }else {
            this.currenturl = event.url
            if(this.currenturl =='/login' || this.currenturl == '/') {
              this.notShow = false
            }
          }
      
      
        });

//   this.router.events.pipe(
//     filter((event:any) => event instanceof NavigationEnd)
//   ).subscribe((event: any) => {
//  if(event.url =='/admin-page') {
//       this.currenturl = 'admin-page'
//       this.notShow = true
//     }else {
//       this.currenturl = event.url
//       if(this.currenturl =='/login' || this.currenturl == '/') {
//         this.notShow = false
//       }
//     }


//   });
}
}
