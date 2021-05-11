import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ManageHospitalsService } from 'src/app/services/manage-hospitals.service';

@Component({
  selector: 'app-single-hospital',
  templateUrl: './single-hospital.component.html',
  styleUrls: ['./single-hospital.component.scss']
})
export class SingleHospitalComponent implements OnInit {
  public imageFile;
  imgURL: any;
  public message: string;
  id
  data: any
  services = []
  blocks = []

  constructor(public route: ActivatedRoute, public dataService: ManageHospitalsService, public router: Router,public common:CommonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.dataService.getSingle(this.id).subscribe(res => {
        this.data = res
        this.services = this.data.services
        this.blocks = this.data.blocks
        console.log("data", res)
        this.imgURL = this.data?.imgUrl
      })
    }
  }

  onSubmit(data: NgForm) {
    delete data.value.file
    data.value.services = this.services
    data.value.blocks = this.blocks
    if (this.id) {
      this.dataService.update(this.id, data.value, this.imageFile)
      data.resetForm()
      this.imageFile = null
      this.imgURL = null
      this.id = null
      this.data = null
      this.services = []
      this.blocks = []
    }
    else {
      this.dataService.add(data.value, this.imageFile)
      data.resetForm()
      this.imageFile = null
      this.imgURL = null
      this.id = null
      this.data = null
      this.services = []
      this.blocks = []
    }
  }

  preview(files) {
    if (files[0].size / 1024 < 500) {

      if (files.length === 0)
        return;

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();
      this.imageFile = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
    else {
      this.common.showToast("error","Error","Size should be less then 500kb")
    }
  }

  addServices(data){
    this.services.push(data.value)
    data.value = null
    console.log("Services",this.services)
  }

  onServiceDelete(i){
    this.services.splice(i,1)
  }

  addBlock(data){
    this.blocks.push(data.value)
    data.value = null
    console.log("blocks",this.blocks)
  }

  onBlockDelete(i){
    this.blocks.splice(i,1)
  }
}
