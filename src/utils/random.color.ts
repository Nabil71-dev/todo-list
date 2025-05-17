export function getRandomTagColor() {
  const hue = Math.floor(Math.random() * 360);
  const bgColor = `hsl(${hue}, 70%, 85%)`;
  const textColor = `hsl(${hue}, 80%, 25%)`;
  return { bgColor, textColor };
}
