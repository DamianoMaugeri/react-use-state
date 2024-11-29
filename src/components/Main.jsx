import { languages } from "../assets/languages";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import { useState } from "react";



export default function Main() {


    const [selectedLanguage, setSelectedLanguage] = useState(null)

    function updateSelectedLanguage(languageName) {

        setSelectedLanguage((oldLanguageName) => {
            if (languageName === oldLanguageName) {
                return null;
            } else {
                return languageName;
            }
        });
    }



    return (
        <main>
            {/* <div>{selectedLanguage}</div> */}
            <div className="container main_list">
                <ul className="button_list">{languages.map((language) => (

                    <li key={language.id}>
                        <Button language={language} current={language === selectedLanguage ? true : false} onSelect={() => updateSelectedLanguage(language)} />
                        {console.log(selectedLanguage)}
                    </li>
                ))}

                </ul>

            </div>
            <div className="container main_card">
                {
                    selectedLanguage ?

                        <Card language={selectedLanguage} /> :

                        <div className="card">
                            <h3>Nessul Linguaggio Selezionato </h3>
                        </div>
                }

            </div>
        </main>
    )
}