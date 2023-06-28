import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  implements OnInit{

@Input() value: string="abhishek";
constructor(){
  console.log('constr called');
  // console.log(this.value);
}

ngOnChanges(change: SimpleChange){
  console.log("on changes called") ;
}
ngOnInit(){
console.log("ngggggggggggggggg on iiiiiiiiiiiiiiiinit called");
// console.log(this.value);

}
ngDoCheck(){
  console.log('ng do check called');
}

ngAfterContentInit(){
  console.log('ng after content called');
  
}
ngAfterContentChecked(){
  console.log('after checked called')
}
ngAfterViewInit(){
  console.log('view init called');
}
ngAfterViewChecked(){
  console.log('checked view called');
}
ngOnDestroy(){
console.log("on destroy called");
}
}
