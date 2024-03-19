import './Hero.scss';
import Mockup from '../../assets/image-mockups.png';
import Button from '../Button/Button';

function Hero() {
    return (
        <main className="main">
            <div className="main__content ">
                <section className='main__content_left'>
                    <div className='main__content_left_text'>
                        <h1 className='main__content_left_text_title'>Next generation digital banking</h1>
                        <p className='main__content_left_text_description'>
                            Take your financial life online. Your Easybank account will be a one-stop-shop
                            for spending, saving, budgeting, investing, and much more.
                        </p>
                        <Button />
                    </div>
                </section>
                <section className='main__content_right'>
                    <img className='main__content_image-mockup' src={Mockup} alt="" />
                </section>

            </div>
        </main>
    )
}

export default Hero;