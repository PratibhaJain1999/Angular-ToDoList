import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
    title:string="";

  toDoList:any[]=[
 
  ]
  id:number=0
  showModal=false;
  editTitle:any
  editId:any

  constructor() { }

  ngOnInit(): void {
  }
  addList(){
    let obj={
      title:this.title,
      id:this.id++
    }
    this.toDoList.push(obj);
    this.title='';

  }
  deleteValue(data:any){
    this.toDoList.splice(data,1)

  }
  clearList(){
    this.toDoList=[];
    
  }
  editValue(todo:any){
    this.showModal=true
    this.editTitle=todo.title
    this.editId=todo.id
    
  }
  saveModal(){
    this.toDoList.forEach(element =>{
      if(element.id==this.editId){
        element.title=this.editTitle;
      }
    })
    this.showModal=false;
    


  }

}
