// theme.js
export const Theme = {
  colors: {
    // Primary colors from your design
    background: '#F1E5D1', // Cream background
    text: '#403B21',       // Dark brown text
    lightText: "#E2CAB3",
    darkText:"#6B6666",
  

    // Additional colors for variety
    primary: {
      50: '#FBF8F3',
      100: '#F1E5D1',
      200: '#E8D9C0',
      300: '#D4C4A8',
      400: '#8B7355',
      500: '#403B21',
      600: '#2A2516',
    },

    // Accent colors
    accent: {
      gold: '#C9A96E',
      bronze: '#B38B59',
      green: '#27AE60',
    }
  },

  // ✅ Use your chosen fonts
  fonts: {
    heading: ['"DM Serif Display"', 'serif'],
    body: ['"Oxygen"', 'sans-serif'],
  },

  components: {
    navbar: {
      background: '#F1E5D1',
      text: '#403B21',
    },
    footer: {
      background: '#F1E5D1',
      text: '#403B21',
    }
  }
};

export default Theme;
