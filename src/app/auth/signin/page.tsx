import { AuthIcon } from "@/components/core/icons/icon";
import Image from "next/image";

export default function Page () {
  return (
    <div className="container">
            <section className="form-cont">
                <div className="form-photo">
                  <Image alt="back" width={593} height={412} className="form-login" src="/backgrounds/login-fon.png" />
                </div>
                <div className="form-body">
                    <form id="registrationForm">
                        <h2 className="form-body-header">Вход</h2>
                        <div className="form-inputs">
                            <input className="form-input" type="email" id="email" name="email" placeholder="E-mail" required />
                            <div className="password-container">
                                <input className="form-input" type="password" id="password" name="password" placeholder="Пароль" required />
                                <Image alt="hide" width={26} height={26} src="/icons/invisible 1.svg" />
                            </div>                            
                        </div>
                        <span>Еще нет акаунта? <a className="form-link-main" href="/auth/signup">Зарегистрироваться</a>
                        </span>
                        
                        <button className="form-body-button" type="submit">Войти</button>
                        <div className="auto-auth"> 
                            <span>или продолжить с</span>
                            <div className="auth-icons">
                                <AuthIcon alt="facebook" src="/icons/Facebook-au.svg"/>
                                <AuthIcon alt="apple" src="/icons/apple.svg"/>
                                <AuthIcon alt="google" src="/icons/google.svg"/>
                            </div>
                        </div>
                    </form>
                       
                </div>
            </section>
        </div>
  )
}