import style from './Button.module.css'
export default function Button({ language }) {

    return (
        <button className={style.btn}>
            {language.title}
        </button>
    )

}