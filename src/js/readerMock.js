export default function read() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Нет данных'), 1000);
  });
}
