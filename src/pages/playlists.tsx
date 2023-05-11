import { SideList } from '@/components/sideList'
import { Align, Title } from '@/components/title'
import { WetherDataProps } from '@/context/sideMenuContext'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import nookie from 'nookies'
import { FiChevronLeft } from 'react-icons/fi'
interface PlaylistProps {
    data: WetherDataProps
}
const Playlist = (props: PlaylistProps) => {
    const router = useRouter()
    return (
        <div className='px-[75px] pt-[54px]'>
            <div className='flex flex-row items-center'>
                <div
                    className='p-4 mr-2 hover:bg-slate-100 cursor-pointer'
                    onClick={() => router.push('/')}
                >
                    <FiChevronLeft size={40} />
                </div>
                <Title
                    align={Align.left}
                    title='MINHAS PLAYLIST'
                    subTitle='minhas playlists salvas'
                />
            </div>
            <SideList
                displayInline
                onPress={console.log}
                {...props.data}
                date={new Date(String(props.data.date))}
            />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = nookie.get(ctx, 'playlist')

    if (!data.playlist) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    const parseData = JSON.parse(data.playlist)

    return {
        props: {
            data: parseData
        }
    }

}

export default Playlist