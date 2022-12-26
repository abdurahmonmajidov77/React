import './App.css';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import RoutesComponent from './router';

function App() {
  return (
    <>
      <div className='ItHeader'>
      <RoutesComponent/>
      </div>
    </>
  );
}

export default App;