import { BookModel } from "./BookModel";

export class CartModel {
 Id?: number;
 userid!: number;
 bookid!: number;
 quantity!: number;
}

export class CartList {
 id!: number;
 userid!: number;
 book!: BookModel;
 quantity!: number;
}

export class GetCart {
 records!: CartList[];
 totalRecords!: number;
}
