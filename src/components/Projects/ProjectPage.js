
import ProjectCard from "./ProjectCard";
import styles from './ProjectPage.module.css'
import tenziesImg from '../assets/tenzies-small.png'
// import exampleImg from '../assets/myImg-light-small.png'
import paytm from '../assets/paytm-small.png'
import parkit from '../assets/parkit-small.png'
import quitcarbon from '../assets/quit-carbon-small.png'
import quizzical from '../assets/quizzical-small.png'
import memeGen from '../assets/meme-generator-thumbnail.png'

import React from 'react'

export default function ProjectPage({isDarkMode}){
    console.log("darkMode: ", isDarkMode)

    const webdevData = [
        {
            id:'p1',
            imgSrc: tenziesImg,
            title: 'Tenzies Game',
            description: `React based game where you tap on the dice to 
            change the number and keep tapping till all dice show same number`,
            link: 'https://github.com/pizuCoder/tenzies-game'
        },
        {
            id:'p2',
            imgSrc: quizzical,
            title: 'Quizzical',
            description: `React based quiz game where user gets 5 random 
            questions each time and is shown the score after finishing `,
            link: 'https://github.com/pizuCoder/quizzical'
        },
        {
            id:'p3',
            imgSrc: memeGen,
            title: 'Meme Generator',
            description: `React based mini app where the user can render text on the generated image and download the meme image`,
            link: 'https://github.com/pizuCoder/meme-generator-app'
        }
    ]
    const uiuxData = [
        {
            id:'p1',
            imgSrc: paytm,
            title: 'Paytm FAQ',
            description: `A case study based on the Paytm website FAQ page 
            system and how it can be improved`,
            link: 'https://www.behance.net/gallery/127040455/FAQ-Page-for-Paytm'
        },
        {
            id:'p2',
            imgSrc: parkit,
            title: 'ParkIt-Parking App',
            description: `License plate detection based parking app that can be 
            used for public and private parking spces`,
            link: 'https://www.behance.net/gallery/135595569/Parkit-UI-for-mobile-app-for-parking-systems'
        },
        {
            id:'p3',
            imgSrc: quitcarbon,
            title: 'QuitCarbon',
            description: `UI for an app that helps users quit smoking by 
            tracking progress and giving rewards`,
            link: 'https://www.behance.net/gallery/123309445/quitCarbon-app-UI-for-quitting-smoking'
        }
    ]

    const webProjects = webdevData.map(project =>{
        return(
            <ProjectCard 
                key={project.id}
                id={project.id}
                src={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
                isDarkMode={isDarkMode}
                style={{marginLeft: "1.5rem"}}
            />
        )
    })
    const uiuxProjects = uiuxData.map(project =>{
        return(
            <ProjectCard 
                key={project.id}
                id={project.id}
                src={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
                isDarkMode={isDarkMode} 
            />
        )
    })
    return(
        <div>
        <div className={styles.container} style={{backgroundColor: isDarkMode ? "white" : "#212529", border: "none" }}>
            <h2 style={{color: isDarkMode ? "#212529" : "white" }}>PROJECTS</h2>
            <div className={styles.webDev}>
                <h3 style={{color: isDarkMode ? "#322850" : "#B29DF5" }}>Web Development</h3>
                <div className={styles.webCards}>
                {webProjects}
                </div>
            </div>
            <div className={styles.uiux}>
                <h3 style={{color: isDarkMode ? "#322850" : "#B29DF5" }}>UI/UX Work</h3>
                <div className={styles.uiuxCards}>
                {uiuxProjects}
                </div>
            </div>
        </div>
        

        </div>
    )
}