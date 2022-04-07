import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header';
import MainContent from '../src/components/mainContent';
import Footer from '../src/components/footer'


export default function App() {

  const [mode, setMode] = React.useState(false)

  function toggleMode () {
      setMode(prevMode => !prevMode)
      
  }

  return (
    <div>
        <Header 
        toggleMode={toggleMode}
        mode = {mode}
         
        />
        <MainContent
        mode = {mode}
         />
        <Footer 
        mode = {mode} />
    </div>
    
  )
}



