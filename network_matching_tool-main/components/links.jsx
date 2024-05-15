import classes from "@/components/links.module.css";

export default function Links() {
    return (
        <ul className={classes.horizontalList}>
            <li className={classes.listItem}>
                <a href="/t_circuit">T-Circuit</a>
            </li>
            <li className={classes.listItem}>
                <a href="/l_circuit">L-Circuit</a>
            </li>
            <li className={classes.listItem}>
                <a href="/pi_circuit">Pi-Circuit</a>
            </li>
        </ul>
    );
}
