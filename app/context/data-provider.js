"use client";
import { useState, createContext, useContext } from 'react';

const ApplicationContext = createContext({});
export const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationContextProvider = ({children}) => {
    const [jobId, setJobId] = useState();
    const [personalInfo, setPersonalInfo] = useState();
    const [attachment, setAttachment] = useState();

    return (
        <ApplicationContext.Provider value={{jobId, setJobId, personalInfo, setPersonalInfo, attachment, setAttachment}}>
            {children}
        </ApplicationContext.Provider>
    );
}
export default ApplicationContextProvider;

