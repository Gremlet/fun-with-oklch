import React from 'react'

const EvenMore: React.FC = () => {
    return (
        <div className='even-more'>
            <p className='moar' style={{ textAlign: 'center' }}>
                Sounds like awesome stuff! Can I use OKLCH in all my projects now?
            </p>
            <h1 className='title' style={{ fontSize: '5rem' }}>
                No.
            </h1>
            <p className='moar' style={{ textAlign: 'center' }}>
                So far, it's only supported in Safari 15.4 +. There are two polyfills which support <code>oklch()</code>
                <br />
                <code>postcss-preset-env</code> (which is included in Create React App) and Lightning CSS
            </p>
        </div>
    )
}

export default EvenMore
