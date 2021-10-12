const generateGrave = () => {
  const clickable = document.querySelectorAll('.clickable')
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "grey";
  clickable.forEach((el) => {
    el.classList.remove("clickable");
    el.classList.add("clickable-dark");
  });
};
