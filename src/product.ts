/**
 * One of the libraries used by the Facade. The library can
 * directly work with the client code or the Facade.
 */
export class ProductLibrary {
  public simpleProduct(a: number = 0, b: number = 0) {
    return a * b;
  }
  public complexProduct(...numbers: number[]) {
    return numbers.reduce((number, result) => result * number);
  }
}