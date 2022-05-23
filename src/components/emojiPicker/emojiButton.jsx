import styles from './emojiPicker.module.scss';

export default function EmojiButton({emoji, onClick}){
    const handleClick = e => {
        onClick(emoji);
    }
    return <button className={styles.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
}