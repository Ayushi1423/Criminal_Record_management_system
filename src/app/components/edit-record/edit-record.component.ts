import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  editForm: FormGroup;
  criminalId: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: [''],
      crimeType: [''],
      age: ['']
    });
  }

  ngOnInit(): void {
    this.criminalId = this.route.snapshot.paramMap.get('id');
    this.api.getCriminals().subscribe((criminals: any[]) => {
      const criminal = criminals.find(c => c.id == this.criminalId);
      if (criminal) {
        this.editForm.patchValue(criminal);
      }
    });
  }

  updateRecord() {
    this.api.updateCriminal(this.criminalId, this.editForm.value).subscribe(() => {
      this.router.navigate(['/view-records']);
    });
  }
}
