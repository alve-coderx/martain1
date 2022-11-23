import ScrollAnimation from 'react-animate-on-scroll';

const Overview = ({ text, img, position, wrapper, typo }) => {

    return (
        <div className={wrapper}>
            <p className={typo}>
                {text}
            </p>
            <ScrollAnimation animateIn='fadeIn'>
                <img className={position} src={img} />
            </ScrollAnimation>
        </div>

    )
}

export default Overview