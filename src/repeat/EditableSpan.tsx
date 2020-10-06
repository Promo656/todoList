import React, {ChangeEvent, useState} from "react";

type EditableSpanType = {
    title: string
    onChange:(value:string)=>void
}

export function EditableSpan(props: EditableSpanType) {

    let [editMode, setEditMode]=useState(false)
    let [title, setTitle]=useState("")

    let activateEditMode=()=> {
        setEditMode(true)
        setTitle(props.title)
    }
    let activateViewMode=()=> {
        setEditMode(false)
        props.onChange(title)
    }
    let onChangeTitleHandler=(e:ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)

    return editMode
        ? <input onChange={onChangeTitleHandler} onBlur={activateViewMode}  value={title} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}