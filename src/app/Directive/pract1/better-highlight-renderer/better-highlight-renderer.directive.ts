import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightRenderer]'
})
export class BetterHighlightRendererDirective implements OnInit {

  // Input() 
  @Input() entercolor: string = 'blue';
  @Input() leavecolor: string = 'transparent';
  @Input() entercolortext: string = 'white';
  @Input() leavecolortext: string = 'black';

  // HostBinding()
  @HostBinding('style.backgroundColor') backgroundColor: string = this.leavecolor;
  @HostBinding('style.color') Color: string = this.leavecolortext;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'white');
  }


  // hostListener() method 
  @HostListener('mouseenter') mouseover(eventData: Event){

    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'white');
    this.backgroundColor = this.entercolor;
    this.Color = this.entercolortext;

  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'black');

    this.backgroundColor = this.leavecolor;
    this.Color = this.leavecolortext;
  }
  

}
