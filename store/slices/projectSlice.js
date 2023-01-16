import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projects: [
            {
                id: 0,
                title:  'Montana - BlackJack',
                websiteUrl: 'https://montana-blackjackgame.glitch.me/',
                githubRepo: '',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670243528/Screenshot_2022-12-05_153121_g9nonz.png',
                projectType: 'JavaScript',
                projectInfo: "Enjoy the ease of playing BlackJack game online, at the tip of your fingertips."
            },
            {
                id: 1,
                title:  'Trouvaille',
                websiteUrl: 'https://montana-blackjackgame.glitch.me/',
                githubRepo: 'https://github.com/DevHumbleChris/trouvaille.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1645423489/xjbuklk64ri88l2cvx79.jpg',
                projectType: 'Vue',
                projectInfo: 'Trouvaille is an app that lets you book for a hotel and also helps to add hotels in a wishlist.'
            },
            {
                id: 2,
                title:  'The Coding Montana',
                websiteUrl: 'https://the-coding-montana.vercel.app',
                githubRepo: 'https://github.com/DevHumbleChris/the-coding-montana.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670335407/Screenshot_2022-12-06_170238_icpzvs.png',
                projectType: 'React',
                projectInfo: 'My personal portfolio built with NextJS and TailwindCSS.'
            },
            {
                id: 3,
                title:  'C-13 Hackathon',
                websiteUrl: 'http://c-13-payment.vercel.app/',
                githubRepo: 'https://github.com/DevHumbleChris/c-13-payment.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670336276/Screenshot_2022-12-06_171736_g93jxk.png',
                projectType: 'React',
                projectInfo: 'Group C-13 Hackathon - LIPA NA MPESA Payment Integration.'
            },
            {
                id: 4,
                title:  'Vue Poll App',
                websiteUrl: 'https://vue-poll-app.web.app/',
                githubRepo: 'https://github.com/DevHumbleChris/vue-poll-app.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1645424234/doimwigrjvcq0mucrcue.jpg',
                projectType: 'Vue',
                projectInfo: 'Poll App Made With Vue Framework and TailwindCSS.'
            },
            {
                id: 5,
                title:  'The Alumni Foundation',
                websiteUrl: 'http://the-alumni-foundation.vercel.app/',
                githubRepo: 'https://github.com/DevHumbleChris/vue-the-alumni-foundation.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670338031/Screenshot_2022-12-06_174653_xbonug.png',
                projectType: 'Vue',
                projectInfo: 'The Alumni Foundation is proposed prototype platform that brings together both the students and the alumni.'
            },
            {
                id: 6,
                title:  'Montflix',
                websiteUrl: 'https://montflix.cyclic.app/',
                githubRepo: 'https://github.com/DevHumbleChris/montflix.git',
                imageUrl: 'https://res.cloudinary.com/montanasolutions/image/upload/v1673876827/montflix_p6ypf4.png',
                projectType: 'JavaScript',
                projectInfo: 'More than just a movie app. Built with ExpressJS and PUG'
            },
            {
                id: 7,
                title:  'The Twitter Clone',
                websiteUrl: 'https://the-twitter-clone-ke.vercel.app/',
                githubRepo: 'https://github.com/DevHumbleChris/react-twitter-clone.git',
                imageUrl: 'https://res.cloudinary.com/montanasolutions/image/upload/v1673878995/twitter-clone_bnrun2.png',
                projectType: 'React',
                projectInfo: 'Realtime Twitter Clone built with React and Firebase'
            },
            {
                id: 8,
                title:  'Group Chat App -React',
                websiteUrl: 'https://montana-react-chat-app.vercel.app/',
                githubRepo: 'https://github.com/DevHumbleChris/react-chat-app.git',
                imageUrl: 'https://res.cloudinary.com/montanasolutions/image/upload/v1673879456/Chat_Group_App_xmdmzf.png',
                projectType: 'React',
                projectInfo: 'Realtime chat group app made with React, TailwindCSS and Firebase.'
            }
        ]
    }
})

export default projectSlice.reducer
