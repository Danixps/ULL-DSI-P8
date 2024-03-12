import { ProductLibrary } from "./product.js";
import { AdditionLibrary } from "./add.js";

export class Facade {
    constructor(protected productLibrary: ProductLibrary,
      protected additionLibrary: AdditionLibrary) {
    }
  
    /**
     * The methods provided by the Facade should only give access to that
     * functionality provided by the libraries that is important for the
     * client code. At the same time, they should orchestrate the
     * invocation of those methods in a particular order.
     */
    public powAndAdd(base: number, power: number, deltas: number[]) {
      const myNumbers: number[] = [];
      for (let index = 0; index < power; index++) {
        myNumbers.push(base);
      }
      return this.productLibrary.complexProduct(...myNumbers) +
        this.additionLibrary.complexAddition(...deltas);
    }
  }