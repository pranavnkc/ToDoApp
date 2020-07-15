import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private REST_API_SERVER = "http://localhost:8000/apis/v1/";
    data = [];

  control =  {
    filter: '',
    sort: 'name-asc',
  }
    constructor(private http:HttpClient) {
	this.http.get(this.REST_API_SERVER).subscribe((res:any) => {
	    this.data = res;
	})
    }
    createNewTask(task){
	this.http.post(`${this.REST_API_SERVER}`, task).subscribe(res=>{
	    this.data.unshift({
		...res
	    })
	});
    return this.data
  }

    deleteTask(id: number){
	this.http.delete(`${this.REST_API_SERVER}${id}/`).subscribe(res=>{
	    this.data = this.data.filter(item => item.id !== id)
	});
  }

    editTask(item){
	this.http.patch(`${this.REST_API_SERVER}${item.id}/`, item).subscribe(res=>{  
	    this.data = this.data.map(it => {
		if(item.id === it.id){
		    let created_on_fmt = res.created_on_fmt;
		    it = item;
		    it.created_on_fmt=created_on_fmt
		}
		return it;
	    })
	})
  }

  handleFilter({key, value}){
    this.control[key] = value
  }

  filterData(){
    let data = [...this.data];
    const { filter, sort } = this.control;
    data = data.filter(item => (new RegExp(`^.*${this.replaceCharCode(filter)}.*$`, 'i')).test(item.name))

    const [key, sortKey] = sort.split('-');

    data = data.sort( (a, b) => {
      // return -1;
      if(sortKey === 'asc')
        return a[key] > b[key] ? 1 : -1
      return a[key] > b[key] ? -1 : 1
    })

    return data
  }

  replaceCharCode(s: string = '') {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  
  
}
