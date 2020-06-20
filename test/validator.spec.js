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

    test('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('"4083952015263"')).toBe('true');
    });

    test('debería retornar false para "40911521712271062"', () => {
      expect(validator.isValid('"40911521712271062"')).toEqual('false');
    });
  });

// Hice más de 1 forma posible 
  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
// caso str de 16 números
    test('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('############5616')).toEqual('4556364607935616');
    });    
// caso str más corto
    test('Debería retornar "#######5616" para "64607935616"', () => {
      expect(validator.maskify('########5616')).toEqual('64607935616');
    });
// caso str de cinco números
    test('Debería retornar "#1844" para "11844"', () => {
      expect(validator.maskify('#1844')).toThrow('11844');
    });
// caso str de cuatro números
    test('Debería retornar "2045" para "2045"', () => {
      expect(validator.maskify('2045')).toBe('2045');
    });
  });
});
