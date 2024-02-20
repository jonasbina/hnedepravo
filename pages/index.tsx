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
    const [showPopup, setShowPopup] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    const heroPost = allPosts[0]
    const closeButtonRef = useRef(null);
    const morePosts = allPosts.slice(1)
    const randomNumber = Math.random();

    const imageSource = randomNumber < 0.5 ? "/plakat.png" : "/plakat2.png";
    const closePopup = () => {
        const popup = closeButtonRef.current.parentElement.parentElement.parentElement;
        const popupRect = popup.getBoundingClientRect();
        const buttonRect = closeButtonRef.current.getBoundingClientRect();
        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;

        if (clickCount === 0) {
            const maxX = popupRect.width - buttonWidth * 2;
            const maxY = popupRect.height - buttonHeight * 2;

            const newX = Math.max(buttonWidth, Math.min(maxX, Math.random() * maxX));
            const newY = Math.max(buttonHeight, Math.min(maxY, Math.random() * maxY));

            closeButtonRef.current.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
            setClickCount(clickCount + 1);
        } else {
            if (Math.random() < 0.6) {
                setShowPopup(false);
            } else {
                const maxX = popupRect.width - buttonWidth;
                const maxY = popupRect.height - buttonHeight;

                const newX = Math.max(buttonWidth, Math.min(maxX, Math.random() * maxX));
                const newY = Math.max(buttonHeight, Math.min(maxY, Math.random() * maxY));

                closeButtonRef.current.style.transform = `translate(${(newX - buttonRect.left) / 3}px, ${(newY - buttonRect.top) / 3}px)`;
            }
        }
    };




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
                {showPopup && (
                    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
                         aria-modal="true">
                        <div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                 aria-hidden="true"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                  aria-hidden="true">&#8203;</span>
                            <div
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900"
                                                id="modal-title">
                                                Máte volební právo ve třídě Terie A?
                                            </h3>
                                            <div className="mt-2">

                                                    <img src={imageSource} alt="Nádherný plakátek"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <motion.button
                                        type="button"
                                        ref={closeButtonRef}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={closePopup}
                                    >
                                        Už se nechci dívat na tento skvost
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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
