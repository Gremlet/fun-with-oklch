import React, { useState } from 'react'
import '../css/home.css'
import p3 from '../img/p3.png'

const Home: React.FC = () => {
    const [active, setActive] = useState(false)
    return (
        <div className='home'>
            <h1 className='title'>OKLCH - What is it?</h1>
            <p style={{ textAlign: 'center' }}>
                I CSS har vi kodat färger med rgb() eller hex. Den nya CSS Color 4-specifikationen lägger till många
                bättre sätt att deklarera färger i CSS. <code>oklch()</code> ser intressant ut :)
            </p>
            <ul>
                <li>
                    <code>L</code> - "perceived lightness". Perceived för att den har förutsägbar kontrast (till
                    skillnad från HSL). Anges som ett procentuellt värde mellan 0 och 100.
                </li>
                <li>
                    <code>C</code> - chroma, eller färgens mättnad. Från grått till oändlighet (i teorien).
                </li>
                <li>
                    <code>H</code> - hue, eller färgtonen. Anges som ett vinkelvärde mellan 0 och 360.
                </li>
                <li>
                    <code>a</code> - alpha, eller färgens genomskinlighet. Anges som ett värde mellan 0 och 1 eller
                    eller 0 - 100%.
                </li>
            </ul>

            <h2>But why?</h2>
            <p>Det är läsbart.</p>

            <div className='container'>
                <div className='box-wrapper'>
                    <div
                        className='box one'
                        style={{ backgroundColor: active ? '#5675a6' : '#fff' }}
                        onClick={() => setActive(!active)}
                    ></div>
                    <p>
                        Vilken färg är det här? <code>#5675a6</code>
                    </p>
                </div>
                <div className='box-wrapper'>
                    <div className='box two'></div>
                    <code>oklch(45% 0.26 264)</code>
                </div>
            </div>
            <h2>P3 colours!</h2>
            <p>
                Moderna displays kan inte visa alla färger som egentligen är synliga för oss. Nyare skärmar fixar detta
                lite, eftersom de lägger till 30 % fler nya färger; P3 (eller wide-gamut). Alla moderna Apple enheter
                och många OLED skärmer har P3 Support. Vi kan inte specifiera P3 färger med rgb(), hsl() eller hex, med
                vi kan göra det med oklch eller den nya color(display-p3 1 0 0).
            </p>
            <img src={p3} alt='' />
            <div className='container'>
                <div className='box-wrapper'>
                    <div className='box three'></div>
                    <p>
                        As red as it gets with Hex
                        <code>#ff0000</code>
                    </p>
                </div>
                <div className='box-wrapper'>
                    <div className='box four'></div>
                    Wow, that's red!
                </div>
            </div>
        </div>
    )
}

export default Home
