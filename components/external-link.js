import cx from 'classnames'

export default function ExternalLink ({ href, text, className }) {
  return (
    <a
      href={href} className={cx('btn', className)}
    >
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
          .btn-usach-blue {
            color: #fff;
            background-color: var(--ns-blue);
            border-color: var(--ns-blue);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--ns-blue-hover);
              border-color: var(--ns-blue-hover);
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
