function CardTag({ text, variant }) {
  return <span className={`card-tag tag-${variant}`}>{text}</span>;
}

export default CardTag;
