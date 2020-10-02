const News = (props) => {
  return (
    <div className="News" key={ props.data.url }>
      <h3>{props.data.title}</h3>
      <p>{props.data.datetime}</p>
      <p>{props.data.content}</p>
    </div>
  );
}

export default News;
