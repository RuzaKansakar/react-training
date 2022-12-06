import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import filterEmoji from "./filterEmoji";

export default function App() {
  const intialEmojis = filterEmoji("", 20);
  const [filteredEmojis, setFilteredEmojis] = useState(intialEmojis);
  return (
    <>
      <div>
        <Header />
        <SearchBar setEmoji={setFilteredEmojis} />
        <EmojiList data={filteredEmojis} />
      </div>
    </>
  );
}
