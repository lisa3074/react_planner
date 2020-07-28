export function closeExpand() {
  document.querySelectorAll(".expandCard > p").forEach((p) => {
    setTimeout(() => {
      p.classList.add("hide");
    }, 500);
    p.classList.remove("fade_in");
    p.classList.add("fade_out");
  });
  document.querySelectorAll(".expandCard > header > h2").forEach((h2) => {
    h2.classList.remove("biggerFont");
    h2.classList.add("smallerFont");
  });

  document.querySelectorAll(".mui-panel.panelMargin").forEach((panel) => {
    panel.classList.remove("bigger");
    panel.classList.add("smaller");
  });

  document.querySelectorAll(".edit").forEach((edit) => {
    edit.classList.remove("fade_in");
    edit.classList.add("fade_out");
    edit.classList.add("hide");
  });
  document.querySelectorAll(".delete").forEach((deleteIt) => {
    deleteIt.classList.remove("fade_in");
    deleteIt.classList.add("fade_out");
    deleteIt.classList.add("hide");
  });
  document.querySelectorAll(".mui-select").forEach((select) => {
    select.classList.remove("fade_in");
    select.classList.add("fade_out");
    select.classList.add("hide");
  });

  document.querySelectorAll(".mui-panel.panelMargin").forEach((muiPanel) => {
    muiPanel.dataset.state = "hidden";
  });
}
