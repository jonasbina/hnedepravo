import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import {CMS_NAME} from '../lib/constants'
import Post from '../interfaces/post'
import Header from '../components/header'
import {Analytics} from '@vercel/analytics/react';
import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import {byteLength} from "next/dist/server/api-utils/web";

type Props = {
    allPosts: Post[]
}


export default function Index({allPosts}: Props) {
    const heroPost = allPosts[0]
    const closeButtonRef = useRef(null);
    const morePosts = allPosts.slice(1)




    // Animate the button's movement
    useEffect(() => {
        if (closeButtonRef.current) {
            closeButtonRef.current.style.transition = 'transform  0.5s ease-in-out';
        }
    }, []);
    return (
        <>

            <Layout>

                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="description" content="Hnědé Právo: Smysluplné zprávy!"/>
                    <title>Hnědé Právo</title>
                </Head>

                <Header/>
                <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
                </Container>
            </Layout>
            <Analytics/>

        </>

    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: {allPosts},
    }
}
