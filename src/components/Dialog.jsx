import * as React from 'react';
import { useState } from 'react';
import {
  DialogComponent,
  ButtonPropsModel,
  AnimationSettingsModel,
} from '@syncfusion/ej2-react-popups';
import { useStateContext } from "../contexts/ContextProvider";
import './default.css';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();}

function DefaultFunctionalities() {

  let buttons: ButtonPropsModel[];
  const [display, setDisplay] = useState('none');
  const [status, setStatus] = useState({
    hideDialog: true,
  });
  const animationSettings: AnimationSettingsModel = { effect: 'None' };

  buttons = [
    {
      click: dlgButtonClick,
      buttonModel: {
        content: 'Ver en GitHub',
        isPrimary: true,
      },
    },
  ];

  function buttonClick(): void {
    setStatus({ hideDialog: true });
  }
  function dlgButtonClick(): void {
    window.open('https://github.com/FQ211776/LIC941-PROYECTO-FASE-No_1');
  }
  function dialogClose(): void {
    setStatus({ hideDialog: false });
    setDisplay('inline-block');
  }
  function dialogOpen(): void {
    setStatus({ hideDialog: true });
    setDisplay('none');
  }

  return (
      <div className="control-pane">
        <div
            id="targetElement"
            className="control-section col-lg-12 defaultDialog dialog-target"
        >
            <button
              className="ml-8 e-control e-btn dlgbtn"
              style={{ display: display }}
              onClick={buttonClick}
              id="dialogBtn"
          >
            Depositos
          </button>
          <button
              className="ml-8 e-control e-btn dlgbtn"
              style={{ display: display }}
              onClick={buttonClick}
              id="dialogBtn"
          >
            Retiros
          </button>
          <button
              className="ml-8 e-control e-btn dlgbtn"
              style={{ display: display }}
              onClick={buttonClick}
              id="dialogBtn"
          >
            Consultas de saldo
          </button>
          <button
              className="ml-8 e-control e-btn dlgbtn"
              style={{ display: display }}
              onClick={buttonClick}
              id="dialogBtn"
          >
            Pago de servicios
          </button>
          <DialogComponent
              mt-60
              id="defaultdialog"
              showCloseIcon={true}
              animationSettings={animationSettings}
              width="500px"
              target={'#targetElement'}
              header="En desarrollo..."
              visible={status.hideDialog}
              buttons={buttons}
              open={dialogOpen}
              close={dialogClose}
          >

            <div>
              <div>                                <br />
                <br />
                Esta funcionalidad esta en desarrollo,  <br />y sera mostrada en la entrega de la FASE 02.
              </div>
            </div>
                </DialogComponent>
              </div>
            </div>

  );
}

export default DefaultFunctionalities;