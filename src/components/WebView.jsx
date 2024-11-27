const WebView = ({ poem }) => {
  return (
    <div>
      <h1>{poem ? poem.title : "..."}</h1>
      <p>Por {poem ? poem.author : "autore"}</p>
      <p>{poem ? poem.text : "lorem"}</p>
    </div>
  );
};
export default WebView;
