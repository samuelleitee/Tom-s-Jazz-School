import styles from "./DecorativeArrow.module.css"

export function DecorativeArrow() {
    return (
        <figure className={styles.decorativeArrow}>
            <svg width="132" height="48" viewBox="0 0 132 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M131.228 26.3574C73.7275 68.7689 26.5372 34.7935 2.66493 1.69723M2.66493 1.69723L1.5993 29.9614M2.66493 1.69723L16.797 2.23005L30.9291 2.76286" stroke="black" stroke-width="2" />
            </svg>

        </figure>
    )
}