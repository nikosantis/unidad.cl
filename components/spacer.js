export default function Spacer({ height, background }) {
  return (
    <div>
      <style jsx>
        {`
          div {
            height: ${height}px;
            display: block;
            background-color: ${background || 'var(--ns-bg)'};
          }
        `}
      </style>
    </div>
  )
}
