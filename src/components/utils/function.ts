export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) {
    return `
        ${txt.slice(0, 50)} ...`;
  } else {
    return txt;
  }
}
