import Validator from '../task';

test('Метод должен правильно валидировать переданное имя и возвращать true', () => {
  expect(new Validator().validateUsername('Akakiy')).toBeTruthy();
});

test('Метод должен создавать свойство username в инстансте класса, с переданным именем, если имя валидно', () => {
  const testObj = new Validator();
  testObj.validateUsername('Akakiy');
  expect(testObj.username).toBe('Akakiy');
});

test('Метод должен выбросить ошибку если имя содержит в начале цифру', () => {
  expect(() => new Validator().validateUsername('3Akakiy')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале -', () => {
  expect(() => new Validator().validateUsername('-Akakiy')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в начале _', () => {
  expect(() => new Validator().validateUsername('_Akakiy')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце цифру', () => {
  expect(() => new Validator().validateUsername('3Akakiy3')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце -', () => {
  expect(() => new Validator().validateUsername('Akakiy-')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит в конце _', () => {
  expect(() => new Validator().validateUsername('Akakiy_')).toThrow();
});

test('Метод должен выбросить ошибку если имя содержит более 3 цифр подряд', () => {
  expect(() => new Validator().validateUsername('Aka444kiy')).toThrow();
});
