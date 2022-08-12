import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  async getCustomer() {
    const customer = await this.customerService.getCustomers().toPromise();
    this.customers = customer;
  }

  goToForm(pageName: any) {
    this.router.navigate([`${pageName}`]);
  }

}
