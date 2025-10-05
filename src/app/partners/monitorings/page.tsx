import Breadcrumbs from "@/components/core/breadcrumbs";
import { AuthIcon } from "@/components/core/icons/icon";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container">
        <Breadcrumbs pages={[{name: 'Партнерам', href: '/partners'}, {name: 'Мониторингам', href: '/monitoring'}]}/>
            <section className="form-cont">
                <div className="form-photo">
                    <div className="form__text">
                        <h2 className="form-photo-header">Мониторингам</h2>
                        <p className="form-photo-text">Для участия в партнёрской программе, зарегистрируйтесь как мониторинг на нашем сайте, и получите реферальную ссылку. </p>
                        <div className="form-down">
                            <p className="form-photo-text">Адреса файлов экспорта курсов</p>
                            <div className="form-buttons">
                                <button className="form-button">Курс XML <Image alt="download" width={15} height={15} src="/icons/download.svg" /></button>
                                <button className="form-button">Курс JSON <Image alt="download" width={15} height={15} src="/icons/download.svg" /></button>
                            </div>
                        </div>
                    </div>
                    <Image alt="background" width={304} height={358} className="form-img" src="/backgrounds/stairs.png" />
                </div>
                <div className="form-body">
                    <form id="registrationForm">
                        <h2 className="form-body-header">Регистрация мониторинга</h2>
                        <div className="form-inputs">
                            <input className="form-input" type="email" id="email" name="email" placeholder="E-mail" required />
                            
                            
                            <div className="password-container">
                                <input className="form-input" type="password" id="password" name="password" placeholder="Пароль" required />
                                
                            </div>
                            
                            <div className="password-container">
                                <input className="form-input" type="password" id="confirm_password" name="confirm_password" placeholder="Повторите пароль" required />
                            </div>
                        </div>
                        
                        <button className="form-body-button" type="submit">Авторизироваться</button>
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