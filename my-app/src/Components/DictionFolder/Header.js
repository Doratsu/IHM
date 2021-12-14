import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import React from "react";
import "../../Styles/DictionFolder/Header.css";
import MenuItem from "@material-ui/core/MenuItem";
import countries from "../../Datas/category";
import { debounce } from "lodash";

const Header = ({ category, setCategory, setWord, word, setMeanings }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  const theme = createTheme({
    overrides: {
      MuiInputLabel: {
        // Name of the component ⚛️ / style sheet
        root: {
          // Name of the rule
          color: "#212529",
          "&$focused": {
            // increase the specificity for the pseudo class
            color: "#212529",
          },
        },
      },
      MuiInput: {
        underline: {
          "&:after": {
            borderBottomColor: "#212529",
          },
        },
      },
    },
  });
  return (
    <div className="header">
      <span className="title">{word ? word : ". . ."}</span>
      <div className="inputs">
        <ThemeProvider theme={theme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e)}
            className="select"
            id="Lang"
          >
            {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
