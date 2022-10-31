export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#F7F8FA" },
      { name: "dark", value: "#314565" },
      { name: "white", value: "#FFFFFF" },
      { name: "black", value: "#000000" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
