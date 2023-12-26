'use client'
import {TbPoint, TbPointFilled} from "react-icons/tb";
import {RxCross2} from "react-icons/rx";
import {MdOutlineDone} from "react-icons/md";

export function DayState({day} : {day : boolean | undefined }) {
    return (
        <div className={`${ day === undefined ? 'text-neutral-200' : ''} font-sans text-5xl`}>
            {day === undefined ? <TbPoint /> : !day && true ? <RxCross2 color={'red'} /> : <MdOutlineDone color={'green'} />}
        </div>
    )
}