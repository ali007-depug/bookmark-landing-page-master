export default function Hero(){

    return(
        <section className="hero">
            <div className="hero__img">
                <img src="/assets/images/illustration-hero.svg" alt="" aria-hidden='true' />
            </div>
            <div className="hero__desc">
                <h2 className="hero__descTitle">a simple bookmark manager</h2>
                <p className="hero__descPrag">
                A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="hero__descBtns">
                    <button>Get it on Chrome</button>
                    <button >Get it on Firefox</button>
                </div>
            </div>
        </section>
    )
}