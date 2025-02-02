import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0066CC",     // Turkish Blue
      light: "#1A8CFF",    // Lighter Turkish Blue
      dark: "#004C99",     // Darker Turkish Blue
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6B00",     // Vibrant Orange
      light: "#FF8533",    // Lighter Orange
      dark: "#CC5500",     // Darker Orange
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F8FC",  // Light Blue-tinted background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#003366",  // Deep Turkish Blue for text
      secondary: "#666666", // Neutral Gray
      disabled: "#CCCCCC",
    },
    button: {
      main: "#FF6B00",     // Orange for buttons
      hover: "#E66000",    // Deeper Orange for hover
    },
    accent: {
      turquoise: "#00CED1", // Complementary turquoise
      coral: "#FF7F50",     // Complementary coral
      gold: "#FFB347",      // Warm gold accent
    },
    footer: {
      background: "linear-gradient(90deg, #0066CC, rgb(33, 121, 210))",
      text: "#FFFFFF",
      hover: "#FF6B00",
    },    
    error: {
      main: "#FF3B30",     // Bright red
      light: "#FF6B6B",
    },
    success: {
      main: "#34C759",     // Fresh green
      light: "#4CD964",
    },
    warning: {
      main: "#FF9500",     // Warning orange
      light: "#FFAA33",
    }
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.5px",
      color: "#003366"
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#0066CC"
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
      color: "#004C99"
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#003366"
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem"
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "0 4px 6px rgba(0, 102, 204, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 6px 12px rgba(0, 102, 204, 0.2)"
          }
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #0066CC, #1A8CFF)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(45deg, #004C99, #0066CC)"
          }
        },
        containedSecondary: {
          background: "linear-gradient(45deg, #FF6B00, #FF8533)",
          color: "#FFFFFF",
          "&:hover": {
            background: "linear-gradient(45deg, #CC5500, #FF6B00)"
          }
        },
        outlinedPrimary: {
          borderColor: "#0066CC",
          color: "#0066CC",
          "&:hover": {
            backgroundColor: "rgba(0, 102, 204, 0.05)"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 102, 204, 0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 20px rgba(0, 102, 204, 0.12)"
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #0066CC,rgb(33, 121, 210))",
          color: "#FFFFFF",
          boxShadow: "0 2px 4px rgba(0, 102, 204, 0.1)"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "&.primary": {
            backgroundColor: "rgba(0, 102, 204, 0.1)",
            color: "#0066CC"
          },
          "&.secondary": {
            backgroundColor: "rgba(255, 107, 0, 0.1)",
            color: "#FF6B00"
          }
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

export default theme;