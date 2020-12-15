export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let sum = '';
    const bufferView = new Uint16Array(this.buffer);
    for (const element of bufferView) {
      sum += String.fromCharCode(element);
    }
    return sum;
  }
}
