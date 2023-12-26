import {kv} from "@vercel/kv";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function NewDutyPage(){
    async function newDuty(formDate : FormData) {
        'use server'
        const duty = formDate.get('duty')
        await kv.hset('duties' , {
            duties : [
                {
                    categoryType: duty as string,
                    dateProgression: [],
                    id : String( Date.now() )
                }
            ]
        })
        revalidatePath('/')
        redirect('/')

    }
    return (
        <main className={'relative flex justify-center flex-col gap-8 px-12 pt-16'}>
            <h1 className={'text-white text-3xl my-10 text-center font-sans'}>New duty</h1>
            <form className={'flex flex-col gap-4'} action={newDuty}>
                <input type="text" className={'px-4 py-2 bg-neutral-700 border-1 rounded-md w-full text-white'} name={'duty'}/>
                <button className={'bg-emerald-400 rounded-md px-4 py-2 font-sans mt-10'} type={'submit'}>
                    Save
                </button>
                <button className={'bg-red-600 rounded-md px-4 py-2 font-sans'}  type={'submit'}>
                    Cancel
                </button>
            </form>
        </main>
    )
}