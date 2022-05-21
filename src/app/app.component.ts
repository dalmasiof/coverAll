import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  title = 'Coverr All';
  
  constructor(private httpSvc: HttpClient) {}
  
  ngOnInit(): void {
    debugger;
    let url = 'api/produto';
    this.httpSvc.get(url).subscribe((x) => {
      console.log(x);
    });
  }

}
