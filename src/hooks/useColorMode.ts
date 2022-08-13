import { reactive, toRefs } from "vue";
const colorThemes = {
  light: {
    background: "#edf6f9",
    text: "#14213d",
  },
  dark: {
    background: "#222222",
    text: "#EFF2F1",
  },
};

const colors = reactive({
  selectedTheme: false,
  backgroundColors: colorThemes.light.background,
  textColors: colorThemes.light.text,
});

export function useColorMode() {
  if (localStorage.getItem("theme")) {
    useTheme(localStorage.getItem("theme") || "");
  }

  function selectTheme(boolean = false) {
    colors.selectedTheme = boolean;

    if (boolean) {
      colors.backgroundColors = colorThemes.dark.background;
      colors.textColors = colorThemes.dark.text;
      localStorage.setItem("theme", "dark");
    }

    if (!boolean) {
      colors.backgroundColors = colorThemes.light.background;
      colors.textColors = colorThemes.light.text;
      localStorage.setItem("theme", "light");
    }
  }

  function useTheme(theme: string) {
    if (theme === "dark") {
      selectTheme(true);
      return;
    }
    selectTheme(false);
  }

  return {
    ...toRefs(colors),
    selectTheme,
  };
}
