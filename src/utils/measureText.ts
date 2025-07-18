const measureText = (text: string, font: string) => {
  const span = document.createElement("span");
  span.appendChild(document.createTextNode(text));
  Object.assign(span.style, {
    font,
    margin: "0",
    padding: "0",
    border: "0",
  });
  document.body.appendChild(span);
  const { width, height } = span.getBoundingClientRect();
  span.remove();

  return { width, height };
};

export default measureText;
