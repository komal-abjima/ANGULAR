import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewChecked, AfterViewInit {

  @Input('srvElement') 
  element: {
   type: string,
   name: string, 
   content: string
 };

//  ngOnChanges()
 @Input() name: string;

// @viewChild() is used for ngOninit() and ngAfterViewInit()
@ViewChild('heading') header: ElementRef<HTMLInputElement>;

// @ContentChild() is used
@ContentChild('contentParagraph') paragraph: ElementRef;

//  constructor lifecycle
constructor(){
  console.log('Constructor called');
}

// ngOnchanges() it takes an argument
ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges called.')
  console.log(changes);

}

// ngOnInit 
ngOnInit() {
  console.log('ngonit called');
  // it throw an error in this ngOninit()
  // console.log('Text Content: ' + this.header.nativeElement.textContent);
  // console.log('Text Content Paragraph: ' + this.paragraph.nativeElement.textContent);
}

// ngDoCheck()
ngDoCheck(){
  console.log('ngDocheck() is called')
}

// ngAfterContentInit() it depends on <ng-content>
ngAfterContentInit(): void {
  console.log('ngAfterContentInit is called');
  console.log('Text Content Paragraph: ' + this.paragraph.nativeElement.textContent);
}

// ngAfterContentChecked()
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked is called')
}

// ngAfterViewInit()
ngAfterViewInit(): void {
  console.log('ngAfterViewInit() is called');
  console.log('Text Content: ' + this.header.nativeElement.textContent);
}

// ngAfterViewChecked()
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked() is called')
}

ngOnDestroy(){
  console.log('ngOnDestroy() is called')
}




 

}
