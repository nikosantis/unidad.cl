export default function Price () {
  return (
    <section className='price'>
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-sm-4 col-lg-4'>
            <div className='box text-center'>
              <h3>Matrícula</h3>
              <p>2 Matrículas: $ 80.000.- c/u*</p>
            </div>
          </div>

          <div className='col-12 col-sm-4 col-lg-4'>
            <div className='box text-center'>
              <h3>Arancel</h3>
              <p>Arancel Anual de: $1.322.000*</p>
            </div>
          </div>

          <div className='col-12 col-sm-4 col-lg-4 text-center'>
            <div className='box'>
              <h3>Formas de pago Arancel</h3>
              <p>En 10 cuotas de $132.200.- c/u*</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-8 col-12 text-center mb-5'>
            <small>*(Valor referencial año 2020)</small>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-sm-4 col-lg-4'>
            <div className='box text-center'>
              <h3>Período de Postulación e Ingreso</h3>
              <p>Noviembre 2020 a marzo 2021</p>
            </div>
          </div>

          <div className='col-12 col-sm-4 col-lg-4'>
            <div className='box text-center'>
              <h3>Requisitos de Postulación</h3>
              <p>Ser mayor de 21 años</p>
              <p>Enseñanza Media completa</p>
            </div>
          </div>

          <div className='col-12 col-sm-4 col-lg-4 text-center'>
            <div className='box'>
              <h3>Procedimiento de Selección</h3>
              <p>Entrevista personal</p>
              <p>Examen de Admisión</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .price {
            padding: 90px 0;
            background-color: #ffffff;
          }
          .box {
            background-color: #f8f9fa;
            padding: 30px 20px;
            border-radius: 5px;
            margin-bottom: 15px;

            h3 {
              margin-bottom: 20px;
              font-size: 1.5rem;
            }

            p {
              margin-bottom: 0;
            }
          }
          .btn-usach {
            color: #fff;
            background-color: var(--ns-orange);
            border-color: var(--ns-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--ns-orange-hover);
              border-color: var(--ns-orange-hover);
            }

            &:disabled {
              color: #fff;
              opacity: .5;
              cursor: not-allowed;
            }
          }
        `}
      </style>
    </section>
  )
}
