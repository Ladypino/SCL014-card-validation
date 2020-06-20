import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
// Hice dos formas para validarlo que son los casos posibles
  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test.skip('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe('True');
    });

    test.skip('debería retornar false para "40911521712271062"', () => {
      expect(validator.isValid('40911521712271062')).toBe('False');
    });
  });
// Hice más de 1 forma posible 
  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
// caso str de 16 números
    test.skip('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('############5616')).toBe('4556364607935616');
    });    
// caso str más corto
    test.skip('Debería retornar "#######5616" para "64607935616"', () => {
      expect(validator.maskify('########5616')).toBe('64607935616');
    });
// caso str de cinco números
    test.skip('Debería retornar "#1844" para "11844"', () => {
      expect(validator.maskify('#1844')).toBe('11844');
    });
// caso str de cuatro números
    test.skip('Debería retornar "2045" para "2045"', () => {
      expect(validator.maskify('2045')).toBe('2045');
    });
  });
});
