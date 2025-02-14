import React from 'react';
import ProgressBar from "../components/ProgressBar";
import PleaseConsultADoctorPageImage from "../components/PleaseConsultADoctorPageImage";
import PleaseConsultADoctorPageHeader from '../components/PleaseConsultADoctorPageHeader';
import PleaseConsultADoctorPageWarningSign from '../components/PleaseConsultADoctorPageWarningSign';
import PleaseConsultADoctorPageNextButton from '../components/PleaseConsultADoctorPageNextButton';
import "../styles/PleaseConsultADoctorPage.css";

const PleaseConsultADoctorPage = () => {
    return (
        <div className="container PleaseConsultADoctorPage">
            <ProgressBar backLink="/when-should-i-see-a-doctor-2" />
            <PleaseConsultADoctorPageImage />
            <PleaseConsultADoctorPageHeader />
            <PleaseConsultADoctorPageWarningSign />
            <div className="PleaseConsultADoctorPageNextButton">
                <PleaseConsultADoctorPageNextButton />
            </div>
        </div>
    );
};

export default PleaseConsultADoctorPage;