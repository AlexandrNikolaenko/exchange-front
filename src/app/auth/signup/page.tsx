import { AuthIcon } from "@/components/core/icons/icon";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="form-photo">
        <Image
          alt="back"
          width={272.8480224609375}
          height={349.6862487792969}
          className="form-main-img"
          src="/backgrounds/auth.png"
        />
        <Image
          alt="back"
          width={59.40430884689809}
          height={73.59034794388808}
          className="form-token"
          src="/backgrounds/token.png"
        />
      </div>
      <div className="form-body">
        <form id="registrationForm">
          <h2 className="form-body-header">Регистрация</h2>
          <div className="form-inputs">
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />

            <div className="password-container">
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
              />
              <Image
                alt="hide"
                width={26}
                height={26}
                src="/icons/invisible 1.svg"
              />
            </div>
            <div className="password-container">
              <input
                className="form-input"
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Повторите пароль"
                required
              />
              <Image
                alt="hide"
                width={26}
                height={26}
                src="/icons/invisible 1.svg"
              />
            </div>
          </div>

          <p>
            Зарегистрировавшись, вы соглашаетесь с{" "}
            <a className="form-link" href="#">
              Условиями обслуживания
            </a>{" "}
            и{" "}
            <a className="form-link" href="#">
              Политикой конфиденциальности
            </a>{" "}
            Azazex.
          </p>
          <span>
            Уже есть аккаунт?{" "}
            <a className="form-link-main" href="/auth/login">
              Войти
            </a>
          </span>
          <button className="form-body-button" type="submit">
            Зарегистрироваться
          </button>
          <div className="auto-auth">
            <span>или продолжить с</span>
            <div className="auth-icons">
              <AuthIcon alt="facebook" src="/icons/Facebook-au.svg" />
              <AuthIcon alt="apple" src="/icons/apple.svg" />
              <AuthIcon alt="google" src="/icons/google.svg" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
