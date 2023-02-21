import React from "react";
import Developer from "./developer_person.json";
import Lottie from "lottie-react";

export default function LottieIconDeveloper() {
    return <Lottie animationData={Developer} loop={true} style={{ width: 400 }} id='lbliconConfetti' />
}