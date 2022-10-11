import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

function retrieveProjects(setProject) {
    fetch("https://eldossjogy.vercel.app/api/project/get")
        .then(r => {
            return r.json()
        })
        .then(data => {
            setProject(data)
        });
}

function retrieveInfo(setInfo) {
    fetch("https://eldossjogy.vercel.app/api/info/get")
        .then(r => {
            return r.json()
        })
        .then(data => {
            setInfo(data)
        });
}

function retrieveProfile(setProfile) {
    fetch("https://eldossjogy.vercel.app/api/profile/get")
        .then(r => {
            return r.json()
        })
        .then(data => {
            setProfile(data)
        });
}


export function AppWrapper({ children }) {
    const [project, setProject] = useState([])
    const [info, setInfo] = useState([])
    const [profile, setProfile] = useState([])

    useEffect(() => {
        retrieveProjects(setProject)
        retrieveInfo(setInfo)
        retrieveProfile(setProfile)
    }, []);

    return (
        <AppContext.Provider value={{ profile,info,project}}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}
