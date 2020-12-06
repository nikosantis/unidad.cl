export default function Spacer ({ height }) {
  return (
    <div>
      <style jsx>
        {`
          div {
            height: ${height}px;
            display: block;
          }
        `}
      </style>
    </div>
  )
}
