"use client";
import { deleteDuty } from "@/app/actions";
import {MdDelete} from "react-icons/md";

export default function DeleteButton({ duty }: { duty: string }) {
    return (
        <button onClick={() => deleteDuty(duty)}>
            <MdDelete color={'darkred'} />
        </button>
    );
}