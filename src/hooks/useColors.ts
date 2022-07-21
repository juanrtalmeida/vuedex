import { reactive, toRefs } from "vue";
const colors = reactive({
  header: "#f0f5fb",
  homeGradient: "linear-gradient(to right, #ffefba, #ffffff)",
  selectedColor: "none",
});
export function useColors() {
  if (localStorage.getItem("color")) {
    selectColor(localStorage.getItem("color") || "");
  }

  function selectColor(color: string) {
    switch (color) {
      case "red":
        colors.selectedColor = "red";
        colors.header = "#df2935";
        colors.homeGradient = "linear-gradient(to right, #eb3349 , #f45c43)";
        break;
      case "blue":
        colors.selectedColor = "blue";
        colors.header = "#1d8a99";
        colors.homeGradient = "linear-gradient(to right, #373b44, #4286f4)";
        break;
      case "green":
        colors.selectedColor = "green";
        colors.header = "#0f7d00";
        colors.homeGradient = "linear-gradient(to right, #56ab2f, #a8e063)";
        break;
      default:
        colors.header = "#f0f5fb";
        break;
    }
  }

  return {
    ...toRefs(colors),
    selectColor,
  };
}
