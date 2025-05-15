import { paramsToString } from '@app/data/helpers/paramsToString';

describe('paramsToString', () => {
  it('debería convertir un objeto simple a string query', () => {
    const params = { name: 'Marvel', year: 2025 };
    expect(paramsToString(params)).toBe('name=Marvel&year=2025');
  });

  it('debería codificar correctamente caracteres especiales', () => {
    const params = {
      'spaced key': 'value with spaces',
      email: 'test@example.com',
    };
    expect(paramsToString(params)).toBe(
      'spaced%20key=value%20with%20spaces&email=test%40example.com'
    );
  });

  it('debería convertir valores booleanos a string', () => {
    const params = { active: true, verified: false };
    expect(paramsToString(params)).toBe('active=true&verified=false');
  });

  it('debería convertir valores null y undefined a string', () => {
    const params = { empty: null, missing: undefined };
    expect(paramsToString(params)).toBe('empty=null&missing=undefined');
  });

  it('debería convertir números correctamente', () => {
    const params = { count: 0, price: 19.99 };
    expect(paramsToString(params)).toBe('count=0&price=19.99');
  });

  it('debería retornar string vacío para objeto vacío', () => {
    const params = {};
    expect(paramsToString(params)).toBe('');
  });
});
