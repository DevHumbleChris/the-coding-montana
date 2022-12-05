import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projects: [
            {
                id: 0,
                title:  'Montana - BlackJack',
                projectInfo: [
                    'Completely built with JavaScript, HTML5 and CSS3',
                    'Used Asynchronous Functions of JavaScript.'
                ],
                websiteUrl: 'https://montana-blackjackgame.glitch.me/',
                githubRepo: '',
                technologiesUsed: [
                    'JavaScript', 'HTML5', 'CSS3'
                ],
                imageUrl: 'https://res.cloudinary.com/montana-inc/image/upload/v1670243528/Screenshot_2022-12-05_153121_g9nonz.png',
                projectType: 'JavaScript'
            }
        ]
    }
})

export default projectSlice.reducer
