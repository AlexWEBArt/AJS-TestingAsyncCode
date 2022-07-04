import GameSavingLoader from '../GameSavingLoader';
import read from '../readerMock';

jest.mock('../readerMock');

beforeEach(() => {
  jest.resetAllMocks();
});
test('error throw testing via the mock', (done) => {
  read.mockReturnValue('Нет данных');
  GameSavingLoader.load().catch((error) => {
    expect(error).toBe('Нет данных');
  });
  done();
});
