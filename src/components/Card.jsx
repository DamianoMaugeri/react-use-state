export default function Card({ language }) {

    return (
        <div className="card">
            <h3 className="card_title">{language.title}</h3>
            <div className="card_body">{language.description}</div>
        </div>

    )

}