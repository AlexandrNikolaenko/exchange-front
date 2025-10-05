import Image from "next/image";

export default function Notification({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: () => void}) {
  return (
    <div className={`modal-up ${isOpen ? 'open-modal' : ''}`}>
        <div className="overlay">
            <div className="modal__container">
                <div className={`modal-body ${isOpen ? 'open-modal' : ''}`}>
                    <div className="modal-img">
                    </div>
                    <div className="modal-content">
                        <Image onClick={setIsOpen} alt="close" width={16} height={16} className="close" src="/icons/close.svg" />
                        <h3>Уведомление</h3>
                        <p>
                            Номер карты в поле &quot;Отдаёте&quot; должен соответствовать номеру карты с которого будет осуществляться оплата по заявке иначе потребуется KYC верификация и последующий возврат средств с вычетом комиссии 20%.
                        </p>
                        <p>Запрещены переводы со сторонних сервисов (симки, платежки и тд), с других валют, только с банковского ЛК клиента, иначе заявка обработана НЕ будет.
                        </p>
                        <p>Сумма перевода НЕ должна отличаться от той что указана в заявке, иначе на проверку поступления потребуется до 24 часов.
                        </p>
                        <p>Пожалуйста, не указывайте НИКАКИХ комментариев при осуществлении перевода средств.</p>
                        <button>Ок</button>
                    </div>
                </div> 
            </div>
            
        </div>
    </div>
  );
}
