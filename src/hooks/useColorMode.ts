import { reactive, toRefs } from "vue";

const colors = reactive({
  selectedTheme: false,
  backgroundColors: "",
});
export function useColorMode() {
  if (localStorage.getItem("theme")) {
    useTheme(localStorage.getItem("theme") || "");
  }

  function selectTheme() {
    colors.selectedTheme = !colors.selectedTheme;

    if (colors.selectedTheme) {
      colors.backgroundColors = "#14213d";
    }

    if (!colors.selectedTheme) {
      colors.backgroundColors = "#edf6f9";
    }
  }

  function useTheme(theme: string) {
    if (theme === "dark") {
      colors.selectedTheme = true;
      return;
    }
    colors.selectedTheme = false;
  }

  return {
    ...toRefs(colors),
    selectTheme,
  };
}
