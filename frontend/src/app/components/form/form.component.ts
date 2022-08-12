import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formCustomer = new FormGroup({
    name: new FormControl(null, Validators.required),
    edad: new FormControl(null, Validators.required),
  });


  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
  }

  async saveCustomer(customer: Customer) {
    this.customerService.saveCustomer(customer).subscribe(
      res => {
        console.log('res', res);
        this.formCustomer.reset();
      },
      error => console.log(error)
    );
  };

  goToListCustomers(pageName: any) {
    this.router.navigate([`${pageName}`]);
  }
}
