import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Definitions from "../DictionFolder/Definitions";
import Header from "../DictionFolder/Header";

function Diction() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        ></div>
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
        />
        {meanings && (
          <Definitions meanings={meanings} word={word} category={category} />
        )}
      </Container>
    </div>
  );
}

export default Diction;
