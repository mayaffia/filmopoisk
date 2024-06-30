
import styles from './styles.module.css';

export const Actor = ({ image, name }: { image: string, name: string }) => {
    return (
        <div className={styles.wrapper}>
            <img src={image} className={styles.image}/>
            <span className={styles.text}>{name}</span>
        </div>
    )
}