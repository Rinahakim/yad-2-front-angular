import { Component } from '@angular/core';

@Component({
  selector: 'app-searches',
  standalone: false,
  
  templateUrl: './searches.component.html',
  styleUrl: './searches.component.scss'
})
export class SearchesComponent {
  posts = [
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fvehicles.png&w=384&q=75", text: 'הרכבים הכי נחשקים סביבך עד 60,000 ש"ח'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Freal-estate.png&w=384&q=75", text: 'דירות מתחת ל 2,000,000 ש"ח באזור תל אביב'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fproducts.png&w=384&q=75", text: 'המוצרים הפופולריים ביותר מהשבוע האחרון'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fpopular-searches%2Fcareer-magazine.png&w=384&q=75", text: 'מגזין הקריירה- המקום שיכין אותך לעבודה הבאה שלך'}
  ];
}