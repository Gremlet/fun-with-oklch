import React from 'react'
import '../css/more.css'
import lightness from '../img/hsl-vs-oklch.avif'

const More: React.FC = () => {
    return (
        <div className='more'>
            <h1 className='title'>Native colour manipulations are (gonna be)* cool!</h1>
            <div className='container'>
                <div className='box-wrapper'>
                    <div className='box five'></div>
                    <p>Vi kommer kunna definiera en accent-färg så:</p>
                    <code>:root &#123; </code>
                    <code> &nbsp;--accent: oklch(70% 0.14 113); </code>
                    <code>&#125;</code>
                </div>
                <div className='box-wrapper'>
                    <div className='box six'></div>
                    <p>Och få ut en röd version of denna färg</p>
                    <code>background: oklch(from var(--accent) l c 15)</code>
                </div>
            </div>
            <h1 className='title'>A11y rocks!</h1>
            <img src={lightness} alt='' />
            <p>
                Om vi kollar på bilden ovan kan vi se att t.ex lila upplevs som mycket mörkare än gul trots att de har
                samma ljushet. Detta kan orsaka problem med accessibility.
            </p>
            <h2 style={{ textAlign: 'center' }}>HSL</h2>
            <div className='container'>
                <div className='box-wrapper'>
                    <button className='hsl-button-one'>Button</button>
                    <code>background-color: hsl(270 100% 50%);</code>
                    <p>Looks good - no a11y issues</p>
                </div>
                <div className='box-wrapper'>
                    <button className='hsl-button-two'>Button</button>
                    <code>background-color: hsl(90 100% 50%);</code>
                    <p>Same lightness - contrast too low</p>
                </div>
            </div>
            <h2 style={{ textAlign: 'center' }}>OKLCH</h2>
            <div className='container'>
                <div className='box-wrapper'>
                    <button className='oklch-button-one'>Button</button>
                    <code>background-color: oklch(53% 0.29 294);</code>
                    <p>Looks good - no a11y issues</p>
                </div>
                <div className='box-wrapper'>
                    <button className='oklch-button-two'>Button</button>
                    <code>background-color: oklch(53% 0.29 135);</code>
                    <p>Same lightness - good contrast</p>
                </div>
            </div>
            <h1 className='title'>Okay, but why not just LCH?</h1>
            <p>
                LCH skapades för att lösa alla problem med HSL och RGB. Den kan encode:a P3-färger och ger i de flesta
                fall förutsägbara colour modification-resultat - men det finns en irriterande bugg...
            </p>
            <p>
                Ett oväntat hue-shift på chroma och lightness förändringar i blå färger (hue-värden mellan{' '}
                <code>270</code> och <code>330</code>)
            </p>
            <p>Säg att vi har en väderapp och vill representera kalla temperaturer med blå nyanser</p>
            <div className='temp-container'>
                <div className='box-wrapper'>
                    <div className='box very-very-cold'></div>
                    <code>.very-very-cold</code>
                    <code>background: lch(35% 110 300);</code>
                    <p>Looks blue - cool!</p>
                </div>
                <div className='box-wrapper'>
                    <div className='box very-cold'></div>
                    <code>.very-cold</code>
                    <code>background: lch(35% 75 300);</code>
                    <p>Wait, what? We only changed chroma - this should be a less saturated blue 🤔</p>
                </div>
                <div className='box-wrapper'>
                    <div className='box cold'></div>
                    <code>.cold</code>
                    <code>background: lch(35% 40 300);</code>
                    <p>We reduced the chroma even more! Why is this MORE purple? 🤯</p>
                </div>
            </div>
            <h2>OKLCH to the rescue!</h2>
            <div className='temp-container'>
                <div className='box-wrapper'>
                    <div className='box very-very-cold-ok'></div>
                    <code>.very-very-cold</code>
                    <code>background: oklch(48% 0.27 274);</code>
                    <p>Looks blue - cool!</p>
                </div>
                <div className='box-wrapper'>
                    <div className='box very-cold-ok'></div>
                    <code>.very-cold</code>
                    <code>background: oklch(48% 0.185 274);</code>
                    <p>Still blue - less saturated 👍</p>
                </div>
                <div className='box-wrapper'>
                    <div className='box cold-ok'></div>
                    <code>.cold</code>
                    <code>background: oklch(48% 0.1 274);</code>
                    <p>Still blue! 🎉</p>
                </div>
            </div>
        </div>
    )
}

export default More
