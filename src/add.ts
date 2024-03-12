  /**
   * Another library used by the Facade.
   */
export class AdditionLibrary {
    public simpleAddition(a: number = 0, b: number = 0) {
      return a + b;
    }
    public complexAddition(...numbers: number[]) {
      return numbers.reduce((number, result) => result + number);
    }
  }
  