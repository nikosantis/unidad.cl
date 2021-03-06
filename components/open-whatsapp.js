import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { DateTime } from 'luxon'
import { createEvent } from 'lib/tagmanager'
import Portal from 'components/portal'
import ChatIcon from 'components/icons/chat'

export default function OpenWhatsApp ({ active, handleClose, wsp }) {
  if (active) {
    return (
      <Portal id='whatsappChat'>
        <Wrapper handleClose={handleClose} active={active} wsp={wsp} />
      </Portal>
    )
  }
  return null
}

function Wrapper ({ active, handleClose, wsp }) {
  const wspNumber = (Math.floor(Math.random() * 2) + 1) === 1 ? '56961742890' : '56961640345'
  const ref = useRef(null)

  const keydown = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  const outsideClick = useCallback((evt) => {
    if (ref.current.contains(evt.target)) {
      return
    }

    if (wsp.current.contains(evt.target)) {
      return
    }
    handleClose()
  }, [handleClose, wsp])

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', keydown)
    }
    return () => {
      window.removeEventListener('keydown', keydown)
    }
  }, [keydown, active])

  useEffect(() => {
    if (active) {
      window.addEventListener('mousedown', outsideClick)
    } else {
      window.removeEventListener('mousedown', outsideClick)
    }

    return () => {
      window.removeEventListener('mousedown', outsideClick)
    }
  }, [outsideClick, active])

  const handleEvent = useCallback(() => {
    createEvent({
      event: 'wspClicked'
    })
  }, [])

  return (
    <div className='whatsapp-window' ref={ref}>
      <header className='whatsapp-window-header'>
        <div className='box-image'>
          <Image src='/images/icon-wsp.png' alt='Unidad.cl' layout='fill' objectFit='contain' />
        </div>
        <div className='whatsapp-window-status'>
          <p className='whatsapp-window-name'>Unidad.cl</p>
          <div>
            <span className='whatsapp-window-statusdot' />
            <em className='whatsapp-window-statustext'>en línea</em>
          </div>
        </div>
      </header>

      <div className='whatsapp-window-body'>
        <div className='whatsapp-window-body-item'>
          <div className='whatsapp-window-body-item-wrapper'>
            <span className='whatsapp-window-body-item-icon'>
              <ChatIcon />
            </span>

            <div className='whatsapp-window-body-item-content'>
              <div className='whatsapp-window-body-item-box'>
                <div>
                  <div className='whatsapp-window-body-item-text'>
                    <span className='whatsapp-window-body-item-space'>
                      <span>
                        Hola
                        <br />
                        ¿Necesitas más información del diplomado?
                      </span>
                    </span>
                  </div>
                </div>
                <div className='whatsapp-window-body-item-time'>
                  <div className='whatsapp-window-body-item-date'>
                    <span className='whatsapp-window-body-item-hour'>
                      {DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='whatsapp-window-footer'>
        <a
          href={`https://wa.me/${wspNumber}`}
          target='_blank'
          rel='noreferrer'
          onClick={handleEvent}
        >
          <div className='whatsapp-window-footer-area'>
            <div className='whatsapp-window-footer-msg'>
              <div className='whatsapp-window-footer-box'>
                <div className='whatsapp-window-footer-text'>
                  Escribe tu mensaje aquí
                </div>
                <div className='whatsapp-window-footer-edit' />
              </div>
            </div>
          </div>
        </a>
      </footer>
      <style jsx>
        {`
          .whatsapp-window {
            z-index: 2;
            position: fixed;
            bottom: 98px;
            opacity: ${active ? '1' : '0'};
            transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 15px;

            @media (min-width: 768px) {
              width: 400px;
              position: fixed;
              bottom: 98px;
              left: 30px;
              padding: 0;
            }

            &-header {
              float: left;
              display: flex;
              width: 100%;
              padding: 8px;
              background: #075e54;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
            }

            &-name {
              margin-bottom: 0;
              color: white;
            }

            &-status {
              float: left;
              display: block;
              margin-left: .75rem;
              color: white;
              font-weight: bold;
            }

            &-statusdot {
              display: block;
              float: left;
              margin: 4px 2px 0 0;
              height: 8px;
              width: 8px;
              background: #25d366;
              border-radius: 10px;
            }

            &-statustext {
              display: block;
              float: left;
              margin-left: 3px;
              font-size: .7rem;
              font-style: normal;
              font-weight: lighter;
            }

            &-body {
              float: left;
              display: block;
              width: 100%;
              padding: 1rem;
              background-color: #e4dcd5;
              background-size: 450px;
              box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);

              &-item {
                padding-left: 6.5%;
                padding-right: 6.5%;
                margin-bottom: 12px;
                display: flex;
                flex-direction: column;
                position: relative;
                align-items: flex-start;

                &-wrapper {
                  margin-bottom: 0;
                  border-radius: 7.5px;
                  color: var(--message-primary);
                  flex: none;
                  font-size: 14.2px;
                  line-height: 19px;
                  position: relative;
                  max-width: 85%;
                }

                &-icon {
                  display: block;
                  height: 13px;
                  position: absolute;
                  top: 0;
                  width: 8px;
                  z-index: 100;
                  color: var(--incoming-background);
                  left: -8px;
                }

                &-content {
                  position: relative;
                  z-index: 200;
                  border-radius: 7.5px;
                  box-shadow: 0 1px .5px rgba(var(--shadow-rgb),.13);
                  background-color: var(--incoming-background);
                }

                &-box {
                  box-sizing: border-box;
                  padding: 6px 7px 8px 9px;
                }

                &-text {
                  position: relative;
                  white-space: pre-wrap;
                }

                &-space {
                  user-select: text;
                }

                &-time {
                  position: relative;
                  z-index: 10;
                  float: right;
                  margin: -10px 0 -5px 4px;
                }

                &-date {
                  color: var(--bubble-meta);
                  font-size: 11px;
                  height: 15px;
                  white-space: nowrap;
                  line-height: 17px;
                }

                &-hour {
                  vertical-align: top;
                  display: inline-block;
                }
              }
            }

            &-footer {
              min-height: 62px;
              order: 3;
              position: relative;
              flex: none;
              width: 100%;
              box-sizing: border-box;
              z-index: 1;
              padding: 0;
              background-color: var(--compose-panel-background);
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;

              a {
                cursor: text;
              }

              &-area {
                align-items: flex-end;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                max-width: 100%;
                min-height: 62px;
                position: relative;
                z-index: 2;
                background-color: var(--rich-text-panel-background);
                padding: 5px 10px;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
              }

              &-msg {
                box-sizing: border-box;
                flex: 1 1 auto;
                font-size: 15px;
                font-weight: 400;
                line-height: 20px;
                min-height: 20px;
                min-width: 0;
                outline: none;
                width: inherit;
                will-change: width;
                background-color: var(--compose-input-background);
                border-radius: 21px;
                border: 1px solid var(--compose-input-border);
                padding: 9px 12px 11px;
                margin: 5px 10px;
              }
              &-box {
                position: relative;
                flex: 1;
                display: flex;
                overflow: hidden;
                padding-right: 0;
                cursor: text;
              }
              &-text {
                color: var(--input-placeholder);
                font-size: 15px;
                line-height: 20px;
                pointer-events: none;
                position: absolute;
                transition: opacity .08s linear;
                z-index: 2;
                -webkit-font-smoothing: antialiased;
                top: 0;
                left: 2px;
              }
              &-edit {
                width: 100%;
                line-height: 20px;
                user-select: text;
                z-index: 1;
                color: var(--compose-primary);
                font-size: 15px;
                font-weight: 400;
                max-height: 100px;
                min-height: 20px;
                outline: none;
                overflow-x: hidden;
                overflow-y: auto;
                position: relative;
                white-space: pre-wrap;
                padding: 0;
                padding-right: 2px;
              }
            }
          }

          .box-image {
            border-radius: 50%;
            background-color: white;
            width: 40px;
            height: 40px;
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
    </div>
  )
}
