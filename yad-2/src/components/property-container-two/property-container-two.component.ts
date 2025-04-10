import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-property-container-two',
  standalone: false,
  
  templateUrl: './property-container-two.component.html',
  styleUrl: './property-container-two.component.scss'
})
export class PropertyContainerTwoComponent implements OnInit{

  formContainer2 !: FormGroup;
  PropertyTypes : string[] = 
  ['דירה', 'דירת גן', "בית פרטי/קוטג'", 'גג/פנטהאוז', 'מגרשים', 'דופלקס',
    'תיירות ונופש', 'דו משפחתי', 'מרתף/ פרטר','טריפלקס', 'יחידת דיור', 
    'משק חקלאי/ נחלה', 'משק עזר', 'דיור מוגן', 'החלפת דירות', 'סאבלט',
    'בניין מגורים(את הבניין כולו)','סטודיו/ לופט','מחסן',"קב' רכישה/ זכות לנכס", 'חניה', 'כללי',
  ];
  PropertyStatuses : string[] = 
  ['חדש מקבלן(לא גרו בו בכלל)', 'חדש (נכס בן עד 10 שנים)',
    'משופץ(שופץ ב5 שנים האחרונות)', 'מצב שמור(מצב טוב, לא משופץ)',  'דרוש שיפוץ(זקוק לעבודת שיפוץ)'
  ];
  airDirectionSignal = signal<string | null>('1'); 
  openBodySignal = signal<string | null>('ללא'); 
  isOpenPropertyTypesWind : boolean = false;
  isOpenPropertyStatuseWind : boolean = false;
  rotateIconInStatus : boolean = false;
  selectedPropertyType : string = this.PropertyTypes[0]; 
  selectedPropertyStatuse: string = this.PropertyStatuses[0];
  rotateIcon : boolean = false;
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  @Output() eventManagement = new EventEmitter<EventManagement>();
  
  constructor(){}

  ngOnInit() {
    this.formContainer2 = new FormGroup({
      PropertyType: new FormControl(this.PropertyTypes[0], Validators.required),
      City: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
      HouseNumber: new FormControl('', Validators.required),
      FloorNumber: new FormControl('', Validators.required),
      FloorNumberTotal: new FormControl('', Validators.required),
      Neighborhood: new FormControl(''),
      Area: new FormControl(''),
      PropertyStatus: new FormControl(this.PropertyStatuses[0], Validators.required),
      airDirection: new FormControl(this.airDirectionSignal()),
      openBody: new FormControl(this.openBodySignal()),
    });
  }

  onSubmit(){
    this.eventManagement.emit({action: 'next', containerIdx: 1});
  }

  onClickPropertyType(){
    this.isOpenPropertyTypesWind = !this.isOpenPropertyTypesWind;
    this.rotateIcon = !this.rotateIcon;
  }
  onSelectPropertyType(propertyType: string){
    this.formContainer2.get('PropertyType')?.setValue(propertyType);
    this.isOpenPropertyTypesWind = false;
    this.selectedPropertyType = propertyType;
  }
  onClickPropertyStatus(){
    this.isOpenPropertyStatuseWind = !this.isOpenPropertyStatuseWind;
    this.rotateIconInStatus = !this.rotateIconInStatus;
  }
  onSelectPropertyStatus(propertyStatus: string){
    this.isOpenPropertyStatuseWind = false;
    this.selectedPropertyStatuse = propertyStatus;
  }
  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 1});
  }
}
