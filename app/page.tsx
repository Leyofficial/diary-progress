import {IDuties} from "@/types/duties/type";
import {MdDelete} from "react-icons/md";
import { DayState} from "@/components/Days";

export default function Home() {

    const duties: IDuties[] = [
        {
            categoryType: 'Daily let-code',
            dateProgression: [
                {
                    date: "26.12.2023",
                    isFinish: false,
                },
                {
                    date: "27.12.2023",
                    isFinish: true,
                },
                {
                    date: "28.12.2023",
                    isFinish: true,
                }
            ],
            id: '1'
        },
        {
            categoryType: "Daily React/Next JS",
            dateProgression: [
                {
                    date: "26.12.2023",
                    isFinish: true,
                },
                {
                    date: "27.12.2023",
                    isFinish: false,
                },
                {
                    date: "28.12.2023",
                    isFinish: false,
                }
            ],
            id: '2'
        }
    ]
    const date = new Date();
    const weekDays = ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun'];
    const todayDay = date.getDay();
    const currentDay = weekDays.find((_ , index) => index + 1 === todayDay)
    const last7days =  weekDays.map(( _ , index) => {
        const date = new Date();
        date.setDate(date.getDate() - index );
        return date.toISOString().slice(0 , 10)
    })
    // console.log(last7days.reverse())

    return (
        <main className={'container relative flex flex-col gap-8 px-4 text-center pt-16 text-3xl'}>
            {!duties || duties.length === 0 ?
                <h1 className={'text-white'}>
                    You have no registered duty
                </h1> : <div>
                    {duties.map((duty) =>
                        <div key={duty.id} className={'flex flex-col gap-2'}>
                            <div className={'flex justify-between items-center'}>
                                <span className={'text-xl font-light text-white font-sans'}>
                                    {duty.categoryType}
                                </span>
                                <div className={'text-white flex gap-1 items-center cursor-pointer'}>
                                    <p className={'text-xs'}>DELETE</p>
                                <button>
                                    <MdDelete color={'darkred'} />
                                </button>
                                </div>
                            </div>
                            <section className={'grid grid-cols-7 gap-1 bg-neutral-800 rounded-md py-3 px-2 my-2.5'}>
                                {weekDays.map((day) =>
                                    <div key={day} className={'flex flex-col items-center'}>
                                        <span className={'text-xl text-center text-white font-sans'}>{day}</span>
                                        <DayState day={undefined}/>
                                    </div>
                                )}
                            </section>
                        </div>
                    )}
                </div>
            }
        </main>
    )
}
