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
                id: 1,
                title:  'The Coding Montana',
                websiteUrl: 'https://the-coding-montana.vercel.app',
                githubRepo: 'https://github.com/DevHumbleChris/the-coding-montana.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670335407/Screenshot_2022-12-06_170238_icpzvs.png',
                projectType: 'React',
                projectInfo: 'My personal portfolio built with NextJS and TailwindCSS.'
            },
            {
                id: 2,
                title:  'C-13 Hackathon',
                websiteUrl: 'http://c-13-payment.vercel.app/',
                githubRepo: 'https://github.com/DevHumbleChris/c-13-payment.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670336276/Screenshot_2022-12-06_171736_g93jxk.png',
                projectType: 'React',
                projectInfo: 'Group C-13 Hackathon - LIPA NA MPESA Payment Integration.'
            },
            {
                id: 3,
                title:  'Vue Poll App',
                websiteUrl: 'https://vue-poll-app.web.app/',
                githubRepo: 'https://github.com/DevHumbleChris/vue-poll-app.git',
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1645424234/doimwigrjvcq0mucrcue.jpg',
                projectType: 'Vue',
                projectInfo: 'Poll App Made With Vue Framework and TailwindCSS.'
            }
        ]
    }
})

export default projectSlice.reducer
