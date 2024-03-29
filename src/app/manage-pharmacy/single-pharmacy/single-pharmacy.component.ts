import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ManagePharmacyService } from 'src/app/services/manage-pharmacy.service';

@Component({
  selector: 'app-single-pharmacy',
  templateUrl: './single-pharmacy.component.html',
  styleUrls: ['./single-pharmacy.component.scss']
})
export class SinglePharmacyComponent implements OnInit {
  public imageFile;
  imgURL: any;
  public message: string;
  id
  data: any

  constructor(public route: ActivatedRoute, public dataService: ManagePharmacyService, public router: Router,public common:CommonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      this.dataService.getSingle(this.id).subscribe(res => {
        this.data = res
        console.log("data", res)
        this.imgURL = this.data?.imgUrl
      })
    }
  }

  onSubmit(data: NgForm) {
    delete data.value.file
    if (this.id) {
      this.dataService.update(this.id, data.value, this.imageFile)
    }
    else {
      this.dataService.add(data.value, this.imageFile).then(res => {
        this.router.navigateByUrl("/"+this.dataService.collection)
      })
    }
    data.resetForm()
    this.imageFile = null
    this.imgURL = null
    this.id = null
    this.data = null
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

}
