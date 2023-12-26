import {kv} from "@vercel/kv";
import {IDuties} from "@/types/duties/type";
import Link from "next/link";
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";

interface IDutyItemParam {
    params: {
            id: string;
    };
}
export default async function DutyItem({params} : IDutyItemParam) {
    const {id} = params
    const decodedDuty = decodeURI(id)
    const duty : any = await kv.hgetall("duties");
    if (!duty) return
    const currentDuty = duty.duties.find((duty: IDuties) => {
        return duty.id === decodedDuty;
    });
    return (
        <main className={'flex flex-col items-start m-auto w-3/4'}>
            <h1 className={'text-white text-3xl mt-10 font-sans m-auto'}>{currentDuty.categoryType}</h1>

            <section className={' mt-8 w-full my-2 rounded-md bg-neutral-800 text-neutral-400'}>
                <div className={'flex justify-between w-full py-5 px-4'}>
                    <button>
                        <FaLongArrowAltLeft />
                    </button>
                    <span>November</span>
                    <button>
                        <FaLongArrowAltRight />
                    </button>
                </div>
            </section>

            <Link className={'text-center bg-yellow-500 py-2 px-5 mt-5 rounded-md w-1/6 text-white'} href={'/'}>Back</Link>
        </main>

    )
}