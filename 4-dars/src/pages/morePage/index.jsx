import './app.css';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Main from '../../components/mainComponent';
import Header from '../../components/headerComponent';

function More() {
    return(
        <>
        <Header/>
        <Main/>
        </>
    )
}

export default More