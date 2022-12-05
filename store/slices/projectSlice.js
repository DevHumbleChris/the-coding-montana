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
                ]
            }
        ]
    }
})

export default projectSlice.reducer
