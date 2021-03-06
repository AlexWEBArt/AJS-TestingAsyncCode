import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((response) => resolve(json(response)))
        .catch((error) => reject(error));
    });
  }
}
