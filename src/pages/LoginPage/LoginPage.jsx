import styles from "./LoginPage.module.css";
import LoginForm from "../../components/LogInForm/LoginForm";
import SpinnerFullpage from "../../components/SpinnerFullPage/SpinnerFullpage";
import { useProducts } from "../../contexts/ProductsContext/ProductsContext";

function LoginPage() {
  const { isLoading } = useProducts();
  if (isLoading) return <SpinnerFullpage />;
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
