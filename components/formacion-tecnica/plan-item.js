export default function PlanItem ({ title, children }) {
  return (
    <div className='plan-item'>
      <h4>
        {title}
      </h4>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .plan-item {
            margin-bottom: 30px;
          }
          h4 {
            margin-bottom: 15px;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  )
}
