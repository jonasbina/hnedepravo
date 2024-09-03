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
    currentPosts: Post[];
    pastPosts: Post[];
}


export default function Index({ currentPosts, pastPosts }: Props) {
    const heroPost = currentPosts[0]
    const moreCurrentPosts = currentPosts.slice(1)
    const morePastPosts = pastPosts

    return (
        <>
            <Layout>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Hnědé Právo: Smysluplné zprávy!" />
                    <title>Hnědé Právo</title>
                </Head>

                <Header />
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
                    {moreCurrentPosts.length > 0 && (
                        <MoreStories posts={moreCurrentPosts} title="Další díly" />
                    )}
                    {morePastPosts.length > 0 && (
                        <MoreStories posts={morePastPosts} title="1. série" />
                    )}
                </Container>
            </Layout>
            <Analytics />
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
    const currentPosts = allPosts.currentPosts
    const pastPosts = allPosts.pastPosts

    return {
        props: { currentPosts, pastPosts },
    }
}
