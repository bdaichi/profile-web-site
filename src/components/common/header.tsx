import Head from 'next/head'

type Props = {
    title: string;
}

export default function Header(props: Props) {
    const title = `別府大地の${props.title}`

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/logos/favicon.png" />
        </Head>
    )
}