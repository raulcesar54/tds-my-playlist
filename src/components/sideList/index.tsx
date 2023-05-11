import { WetherDataProps } from "@/context/sideMenuContext";
import { Button, Variants } from "../button";
import { format } from 'date-fns'

interface SideListProps extends WetherDataProps {
    onPress: () => void
    onSaveList?: () => void
    displayInline?: boolean
}

export function SideList(props: SideListProps) {
    return (
        <div className={`flex flex-2  md:ml-auto 
        ${props.displayInline ? 'bg-white flex-row w-full md:max-w-full md:p-[24px]' : 'flex-col'}
         bg-primary md:max-w-[557px] p-[54px] px-[44px] md:p-[54px]`}>
            {!props.displayInline &&
                <>
                    <div className="max-w-[60px]">
                        <Button variant={Variants.Danger} label="fechar" onClick={props.onPress} />
                    </div>
                    <h1 className="text-white mt-[45px] text-[24px]">BUSQUE A CIDADE E AQUI VAI APARECER A <strong>PLAYLIST</strong></h1>
                </>
            }
            <section className={`bg-tertiary p-4 rounded-md mt-[45px] ${props.displayInline && 'w-full'}`} >
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-0 flex-col">
                        <p className="text-secondary">{props.city} - <strong>{props.date !== null && format(props.date, 'dd/MM/yyyy')}</strong></p>
                        <h1 className="font-bold text-[40px] mt-[-14px]">{props.temp} º</h1>
                    </div>
                    {props.onSaveList &&
                        <div className="mt-[-14px]">
                            <Button label='Salvar playlist' onClick={props.onSaveList}></Button>
                        </div>
                    }
                </div>
                <div className={`flex gap-6 ${props.displayInline ? 'flex-row w-full justify-between' : 'flex-col'}`}>
                    {
                        props.playlist.map(playlist => {
                            return (
                                <div key={`${playlist.name}_${playlist.author}`} className="w-[200px]">
                                    <img
                                        width={208}
                                        height={188}
                                        src={playlist.img}
                                        alt={playlist.author}
                                    />
                                    <h1 className="font-bold text-[20px]">{playlist.name}</h1>
                                    <small className="text-[14px] mt-[-24px]">{playlist.author}</small>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
