import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { DialogAddProductComponent } from '../dialog-add-product/dialog-add-product.component';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any = [];

  constructor(private dialog: MatDialog, private firebase: Firestore) {}


  openDialog() {
    this.dialog.open(DialogAddProductComponent);
  }
}
