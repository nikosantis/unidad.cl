import { useTable, usePagination, useSortBy } from 'react-table'
import cs from 'classnames'

export default function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useSortBy,
    usePagination
  )

  return (
    <>
      <table {...getTableProps()} className='table table-striped'>
        <thead>
          {headerGroups.map(headerGroup => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.getHeaderGroupProps().key}
              >
                {headerGroup.headers.map(column => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      scope='col'
                      key={column.id}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} key={cell.getCellProps().key}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          <li
            className={cs('page-item', {
              disabled: !canPreviousPage
            })}
          >
            <button onClick={() => gotoPage(0)} className='page-link'>
              {'<<'}
            </button>
          </li>
          {pageOptions.map(pg => {
            return (
              <li
                className={cs('page-item', {
                  disabled: pageIndex === pg
                })}
                key={pg}
              >
                <button onClick={() => gotoPage(pg)} className='page-link'>
                  {pg}
                </button>
              </li>
            )
          })}
          <li
            className={cs('page-item', {
              disabled: !canNextPage
            })}
          >
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className='page-link'
            >
              {'>>'}
            </button>
          </li>
        </ul>
      </nav>

      <div className='count'>
        <div>
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
            className='custom-select'
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>

        <style jsx>
          {`
            .count {
              display: flex;
              justify-content: center;
            }
          `}
        </style>
      </div>
    </>
  )
}
