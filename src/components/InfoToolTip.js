import Popup from "./Popup";
import successIcon from "../images/success-icon.svg";
import failIcon from "../images/fail-icon.svg";

export default function InfoTooltip({ isOpen, onClose }) {
  return (
    <Popup window isOpen={isOpen.isOpened} onClose={onClose}>
      {isOpen.successStatus ? (
        <div className="reg-popup">
          <img
            className="reg-popup__img"
            src={successIcon}
            alt="Иконка с галочкой"
          />
          <p className="reg-popup__text">Вы успешно зарегистрировались!</p>
        </div>
      ) : (
        <div className="reg-popup">
          <img
            className="reg-popup__img"
            src={failIcon}
            alt="Иконка с крестиком."
          />
          <p className="reg-popup__text">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        </div>
      )}
    </Popup>
  );
}
