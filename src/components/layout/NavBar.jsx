import { Outlet, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <ul className={styles.list}>

        <Link to='/'>
        <li className={styles.item}><img className={styles.logo} src='./book.png'/></li>
        </Link>

        <Link to='/'>
        <li className={styles.item}>Home</li>
        </Link>

        <Link to='/createbooks'>
        <li className={styles.item}>Cadastrar livro</li>
        </Link>

        <Link to='/listbooks'>
        <li className={styles.item}>Listar livros</li>
        </Link>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default NavBar;
