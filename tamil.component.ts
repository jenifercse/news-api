import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tamil',
  templateUrl: './tamil.component.html',
  styleUrls: ['./tamil.component.css']
})
export class TamilComponent implements OnInit {
articles;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.getTamil().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
