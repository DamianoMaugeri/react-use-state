import style from './Button.module.css'
export default function Button({ language, onSelect, current }) {
    return (
        <button onClick={() => onSelect()} className={`${style.btn} ${current ? style.current : ''}`}>
            {language.title}
        </button>
    )

}