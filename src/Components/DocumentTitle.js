import {useEffect} from 'react'
function useDocumentTitleHook(count) {
  useEffect(() => {
    document.title = `D&D Index ${count}`
  }, [count])
}
export default useDocumentTitleHook