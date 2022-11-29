import { Contact } from '@prisma/client'
import { flexRender, Table as ReactTable } from '@tanstack/react-table'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight
} from 'react-icons/fi'

type TableProps = {
  table: ReactTable<Contact>
}

export default function Table({ table }: TableProps) {
  return (
    <div className='w-full overflow-x-auto relative rounded-lg'>
      <table className='w-full table-auto transition-all'>
        <thead className='uppercase bg-slate-200 text-sm'>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th
                      scope='col'
                      className={clsx(
                        'py-3 px-6',
                        header.id !== 'id' && 'text-left'
                      )}
                      key={header.id}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr
                className='bg-slate-100 border-b text-sm transition-all'
                key={row.id}
              >
                {row.getVisibleCells().map(cell => {
                  return (
                    <td
                      scope='row'
                      className={clsx(
                        'py-4 px-6 text-gray-900 transition-all',
                        cell.id === 'comment' ? 'whitespace-nowrap' : '',
                        cell.id !== 'id' ? 'text-left' : ''
                      )}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <nav
        className='flex justify-between items-center pt-4'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
          Viendo{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {table.getState().pagination.pageIndex + 1}
          </span>{' '}
          de{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>
            {table.getPageCount()}
          </span>{' '}
          páginas
        </span>
        <ul className='inline-flex items-center -space-x-px'>
          <li>
            <PaginationButton
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              direction='first'
            />
          </li>
          <li>
            <PaginationButton
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              direction='left'
            />
          </li>
          <li>
            <PaginationButton
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              direction='right'
            />
          </li>
          <li>
            <PaginationButton
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              direction='last'
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

type Directions = 'first' | 'left' | 'right' | 'last'

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  direction: Directions
}

const icons: Record<Directions, JSX.Element> = {
  first: <FiChevronsLeft />,
  left: <FiChevronLeft />,
  right: <FiChevronRight />,
  last: <FiChevronsRight />
}

function PaginationButton({ onClick, disabled, direction }: ButtonProps) {
  return (
    <button
      className={clsx(
        'block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white transition-all',
        'border border-gray-300',
        'hover:bg-gray-100 hover:text-gray-700',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-slate-200',
        direction === 'first' && 'rounded-l-lg',
        direction === 'last' && 'rounded-r-lg'
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icons[direction]}
    </button>
  )
}
