import 'mocha';
import {expect} from 'chai';
import { AdditionLibrary } from "../src/add.js"
import { ProductLibrary } from "../src/product.js"
import { Facade } from "../src/facade.js"
import { clientCode} from "../src/index.js"


describe('Pruebas sobre Facade 2', () => {
  it('operaciones con AddLibrary y PowLibrary', () => {

    expect(clientCode(new Facade(new ProductLibrary(), new AdditionLibrary()))).to.be.eql(249);
  });

});
