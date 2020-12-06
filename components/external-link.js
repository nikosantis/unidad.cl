export default function ExternalLink ({ href, text }) {
  return (
    <a href={href} className='btn btn-usach'>
      {text}
      <style jsx>
        {`
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
    </a>
  )
}
