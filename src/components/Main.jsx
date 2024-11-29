import { languages } from "../assets/languages";
import Button from "./Button.jsx";
import Card from "./Card.jsx";


export default function Main() {

    return (
        <main>
            <div className="container main_list">
                <ul className="button_list">{languages.map((language) => (

                    <li key={language.id}>
                        <Button language={language} />
                    </li>
                ))}

                </ul>
            </div>
            <div className="container main_card">
                <Card language={''} />
            </div>
        </main>
    )
}