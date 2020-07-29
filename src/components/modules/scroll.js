export function scroll() {
  window.addEventListener("resize", setHeight);

  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    console.log(vh);
  }
}
