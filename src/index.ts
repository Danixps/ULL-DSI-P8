import {ProductLibrary} from "./product.js"
import { AdditionLibrary } from "./add.js";
import { Facade} from "./facade.js";


  /**
   * The client code works with complex libraries through the simple interface
   * provided by the Facade, rather than invoking the methods of the libraries
   * directly.
   */
  export function clientCode(facade: Facade) {
    console.log(facade.powAndAdd(3, 5, [1, 2, 3]));
    return facade.powAndAdd(3, 5, [1, 2, 3]);
  }
  
  clientCode(new Facade(new ProductLibrary(), new AdditionLibrary()));
  