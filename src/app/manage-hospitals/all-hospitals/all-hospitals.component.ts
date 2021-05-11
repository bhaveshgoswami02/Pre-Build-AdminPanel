import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageHospitalsService } from 'src/app/services/manage-hospitals.service';

@Component({
  selector: 'app-all-hospitals',
  templateUrl: './all-hospitals.component.html',
  styleUrls: ['./all-hospitals.component.scss']
})
export class AllHospitalsComponent implements OnInit {
  allData = []

  constructor(public dataService: ManageHospitalsService, public router: Router) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.dataService.getAll().subscribe(res => {
      this.allData = res
      console.log("all data",this.allData)
    })
  }

  delete(id) {
    this.dataService.delete(id)
  }

  add() {
    this.router.navigateByUrl("/" + this.dataService.collection + "/add")
  }

  edit(id) {
    this.router.navigateByUrl("/" + this.dataService.collection + "/edit/" + id)
  }

}
