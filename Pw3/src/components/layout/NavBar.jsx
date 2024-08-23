import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
      <li className={styles.item}><img className={styles.logo} src='./book.png'/></li>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Cadastrar livro</li>
        <li className={styles.item}>Listar livros</li>
      </ul>
    </nav>
  );
};

export default NavBar;
