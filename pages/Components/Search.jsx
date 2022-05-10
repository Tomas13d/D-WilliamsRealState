import styles from "../../styles/Search.module.css"
import {BsSearch} from "react-icons/bs"


function Search () {
    return(
        <div className={styles.box}>
        <form name="search">
            <input type="text" class="input" name="txt" 
            className={styles.inputS}/>
        </form>
            <BsSearch className={styles.icon}/>
    </div>
    )
}

export default Search;