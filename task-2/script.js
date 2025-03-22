// task 2

document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    const box = document.querySelector("#box");
    box.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
  }, 100)
);
