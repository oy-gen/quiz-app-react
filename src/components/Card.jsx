import './Card.css';

export default function Card() {
  return (
    <section className="card" data-js="card">
      <h2 className="h2">Question:</h2>
      <p className="card__question">Why is lorem so much ipsum?</p>
      <button data-js="buttonAnswer" className="button button--answer">
        Show answer
      </button>
      <div data-js="cardAnswer" className="card__answer">
        Becaues ipsum sit dolor amet lorem.
      </div>
      <div className="card__tag-wrapper">
        <a className="card__tag" href="#">
          Tag one
        </a>
        <a className="card__tag" href="#">
          Tag two
        </a>
        <a className="card__tag" href="#">
          Tag three
        </a>
        <a className="card__tag" href="#">
          Tag Four
        </a>
      </div>
      <a data-js="bookmarkToggle" className="card__bookmark"></a>
    </section>
  );
}
