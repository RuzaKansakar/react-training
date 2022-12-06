import filterEmoji from "../filterEmoji";

export default function SearchBar(props) {
  function handleChange(event) {
    const value = event.target.value;
    const filteredEmojis = filterEmoji(value, 20);
    props.setEmoji(filteredEmojis);
  }
  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}
