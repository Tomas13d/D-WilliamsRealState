import styles from "../../styles/Whats.module.css"
import {IoLogoWhatsapp} from "react-icons/io"


function WhatsApp () {
    return(
        <div class={styles.dropup}>
    <button class={styles.dropbtn}>
    <IoLogoWhatsapp className={styles.icon}/>
    </button>
    <div class={styles.dropupContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
</div>
    )
}

export default WhatsApp