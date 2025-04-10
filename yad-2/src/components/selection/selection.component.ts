import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: false,
  
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent implements OnInit{
  @Input() title: string = ''; 
  @Input() options: string[] = []; 
  @Input() selectedOption = signal<string | null>(null); 

  constructor(){}
  ngOnInit() {
    this.selectedOption.set(this.options[0]);
  }
  
  onSelect(option: string) {
    this.selectedOption.set(option);
  }
}