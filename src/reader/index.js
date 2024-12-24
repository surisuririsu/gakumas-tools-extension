const canvas = document.getElementsByTagName("canvas")[0];
const gl = canvas.getContext("webgl");
const data = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);

gl.readPixels(
  0,
  0,
  gl.drawingBufferWidth,
  gl.drawingBufferHeight,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  data
);

console.log(data);
