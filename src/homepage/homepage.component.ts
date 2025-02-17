import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: false,
  
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  advertising!: string;
  constructor(){}
  ngOnInit(): void {
    this.advertising = "https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fbraze-images.com%2Fappboy%2Fcommunication%2Fassets%2Fimage_assets%2Fimages%2F67aa152970f52a006711c9b3%2Foriginal.jpg%3F1739199785&w=1920&q=75";
  }

}
