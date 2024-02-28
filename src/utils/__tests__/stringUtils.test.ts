import { stringUtils } from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    test('should capitalize the first letter of each word', () => {
      stringUtils.capitalizeFirstLetter('Ana maria');
      stringUtils.capitalizeFirstLetter('ANA MARIA');
      stringUtils.capitalizeFirstLetter('MaRIA');

      const nome = stringUtils.capitalizeFirstLetter('yuri chaves');

      expect(nome).toBe('Yuri Chaves');
    });

    test('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('yuri chaves   ')).toBe(
        'Yuri Chaves'
      );
    });
  });
});
