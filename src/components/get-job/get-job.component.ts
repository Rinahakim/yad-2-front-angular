import { Component } from '@angular/core';

@Component({
  selector: 'app-get-job',
  standalone: false,
  
  templateUrl: './get-job.component.html',
  styleUrl: './get-job.component.scss'
})
export class GetJobComponent {
  posts = [
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-smart-alerts.png&w=256&q=75", header_text: 'הסוכנת החכמה', text:'קבלו הצעת עבודה ישירות למייל'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-cv.png&w=256&q=75", header_text: 'קורות חיים', text: 'כתיבת קורות חיים מקצועיים בחינם'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-calculator.png&w=256&q=75", header_text:'מחשבון שכר', text: 'בו תוכלו לערוך חישוב מדוייק של השכר נטו אותו תקבלו'},
    {img:"https://www.yad2.co.il/_next/image?url=https%3A%2F%2Fassets.yad2.co.il%2Fhomepage%2Fdrushim-jobs.png&w=256&q=75", header_text: 'פרסום משרה', text: 'גיוס עובדים במהירות ובקלות!'}
  ];
}
