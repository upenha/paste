let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function generate(keyLength: number) {
  let text = '';
  for (var i = 0; i < keyLength; i++) {
    const index = Math.floor(Math.random() * string.length);
    text += string.charAt(index)
  }
  return text
}