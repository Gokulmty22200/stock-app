import { Component, OnInit } from '@angular/core';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IconService } from '@ant-design/icons-angular';
import { IconModule } from '@ant-design/icons-angular';
import {
  CalendarOutline,
  CaretDownOutline,
  CaretUpOutline,
} from '@ant-design/icons-angular/icons';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [SharedModule, IconModule, NgbDatepickerModule, NgbAlertModule],
  templateUrl: './assistant.component.html',
  styleUrl: './assistant.component.scss'
})
export class AssistantComponent implements OnInit {

  lineDetails = [{lineNumber:1,newLine:true,operator:null}];
  model: NgbDateStruct;
  model2: NgbDateStruct;


  constructor(private iconService: IconService) { 
    this.iconService.addIcon(...[ CaretUpOutline, CaretDownOutline, CalendarOutline ]);
  }

  ngOnInit(): void {
    
  }

  selectOperator(operator: string, selectedlineNumber: number) {
    console.log('LN',selectedlineNumber);
    const lineIndex = this.lineDetails.findIndex(line => line.lineNumber === selectedlineNumber);

    if(this.lineDetails[lineIndex].newLine){
      this.lineDetails.push({lineNumber:selectedlineNumber+1,newLine:true,operator:null})
    }
  
    if (lineIndex !== -1) {
      this.lineDetails[lineIndex].operator = operator;
      this.lineDetails[lineIndex].newLine = false;
    }
  }


}
