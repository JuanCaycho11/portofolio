import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("code that runs when entering the page");
  }

  public linkCertificate(): void {
    this.router.navigate(['/certificate/cc'], { skipLocationChange: true });
  }

  public linkAnimation(): void {
    this.router.navigate(['/animationdemon/ac'], { skipLocationChange: true });
  }

}
