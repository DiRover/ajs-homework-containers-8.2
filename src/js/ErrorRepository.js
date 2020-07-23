class ErrorRepository {
  constructor() {
    this.value = new Map([[0, 'good error'], [1, 'ok error'], [2, 'about ok error'], [3, 'near ok error'], [4, 'not ok error'], [5, 'bad error']]);
  }

  translate(code) {
    if (this.value.has(code)) {
      return this.value.get(code);
    }
    return 'uknown error';
  }
}

export default ErrorRepository;
