import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public currentWidth: any;

  constructor() { }

  @HostListener('window:resize', ['$event']) public onResize(): void {
		this.currentWidth = window.innerWidth;
	}

  ngOnInit(): void {
    this.currentWidth = window.innerWidth;
  }

  public showMessage(input: string): void {
    //console.log('Navigating to... ', input);
  }

}
