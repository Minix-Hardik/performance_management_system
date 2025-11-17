export const setDocValue = (key: string, value: any) => {
    const currentFrm = window.cur_frm
    if (!currentFrm) return null
    return currentFrm.set_value?.(key, value);
}

export const getCurrentDoc = () => {
    const currentFrm = window.cur_frm
    if (!currentFrm) return null
    return currentFrm.doc
}

export const reloadCurrentDoc = () => {
    const currentFrm = window.cur_frm
    if (!currentFrm) return null
    return currentFrm.reload_doc?.()
}
