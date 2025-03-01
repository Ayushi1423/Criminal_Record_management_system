import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'; // ✅ Fix import path

@Component({
  selector: 'app-add-criminal',
  templateUrl: './add-criminal.component.html',
  styleUrls: ['./add-criminal.component.css']
})
export class AddCriminalComponent {
  criminalForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.criminalForm = this.fb.group({
      name: ['', Validators.required],       // ✅ Added validation
      crimeType: ['', Validators.required],  // ✅ Added validation
      age: ['', [Validators.required, Validators.min(18)]] // ✅ Age must be 18 or older
    });
  }

  onSubmit() {
    if (this.criminalForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    this.api.addCriminal(this.criminalForm.value).subscribe({
      next: () => {
        alert('Criminal added successfully!');
        this.router.navigate(['/view-records']); // ✅ Redirect after successful submission
      },
      error: (err) => {
        console.error('Error adding criminal:', err);
        alert('Failed to add criminal. Please try again.');
      }
    });
  }
}
