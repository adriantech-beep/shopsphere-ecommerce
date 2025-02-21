import { useState } from "react";
import styles from "./LoginForm.module.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  function handleCloseModal() {
    setIsSubmitted(false);
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };
  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create account</h1>
        <p className={styles.subTitle}>
          Lets get started with your 30 days free trial
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className={styles.errorMessage}>{errors.username}</span>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="passsword"></label>
            <input
              type="Password"
              id="password"
              name="password"
              className={styles.input}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
          </div>
          <button className={styles.formBtn}>Create account</button>
        </form>
        <p className={styles.signUpLabel}>
          Already have an account?
          <span className={styles.signUpLink}>Log in</span>
        </p>
        <div className={styles.buttonsContainer}>
          <div className={styles.appleLoginButton}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className={styles.appleIcon}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
            </svg>
            <span>Sign up with Apple</span>
          </div>
          <div className={styles.googleLoginButton}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              className={styles.googleIcon}
              viewBox="0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Sign up with Google</span>
          </div>
        </div>
      </div>
      {isSubmitted && <ConfirmationModal onCloseModal={handleCloseModal} />}
    </>
  );
}
