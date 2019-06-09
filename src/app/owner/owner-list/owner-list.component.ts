import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { Owner } from './../../_interfaces/owner.model';
 
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  public owners: Owner[];

  public errorMessage: string = '';
 
  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }
 
  ngOnInit() {
    this.getAllOwners();
  }
 
  public getAllOwners(){
    let apiAddress: string = "api/owner";
    this.repository.getData(apiAddress)
    .subscribe(res => {
      this.owners = res as Owner[];
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    })
  }
}