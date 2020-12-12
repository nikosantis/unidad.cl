import { memo } from 'react'
import { useFormState, useFormDispatch } from 'contexts/form-context'

function Comment () {
  const { comment } = useFormState()
  const { setValue } = useFormDispatch()

  return (
    <>
      <label htmlFor='comment'>Comentario</label>
      <textarea
        className='form-control'
        id='comment'
        rows='3'
        placeholder='Comentario'
        name='comment'
        value={comment}
        onChange={(evt) => setValue('comment', evt.target.value)}
      />
    </>
  )
}

export default memo(Comment)
