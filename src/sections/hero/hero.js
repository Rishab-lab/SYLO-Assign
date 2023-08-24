import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './hero.module.css';
import { isLoginAtom } from '../../recoilStates';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const isSubscribed = userData?.subscriptionDetail?.isSubscribed;

    const [buttonData, setButtonData] = useState({
        buttonText: 'Join Us',
        page: '/register',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (isUserLoggedIn && isSubscribed) {
            setButtonData({
                buttonText: 'Get Started',
                page: '/activityPage',
            });
        }

        if (isUserLoggedIn && !isSubscribed) {
            setButtonData({
                buttonText: 'Subscribe Now',
                page: '',
            });
        }
    }, [isUserLoggedIn, isSubscribed]);

    function handleClickButton() {
        if (buttonData.page) {
            navigate(buttonData.page);
            return;
        }
        alert('Scroll to Pricing section');
    }

    return (
        <div className={styles.wrapper}>
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/471912366/photo/crowd-watching-a-performance-at-cyberhub-gurgaon.jpg?s=612x612&w=0&k=20&c=HwuymrFDuJYX9hd4uHlk57QfcbxtOiFFB60-cEu_gEA="
                        alt="Image 1"
                    />
                </div>
                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/1038049758/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=DYW6MLLqUZ7Z6Cys3itVslOBkDsa-17cexOxtln5Oi0="
                        alt="Image 2"
                    />
                </div>

                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/665393236/photo/business-people-meeting-eating-discussion-cuisine-party-concept.jpg?s=612x612&w=0&k=20&c=OWikKg0p7VwcS8ipa8oPxaOrSkgb9bc0nnQtp7_wYqA="
                        alt="Image 3"
                    />
                </div>

                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE="
                        alt="Image 4"
                    />
                </div>

                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/1170495743/photo/night-wedding-ceremony-with-arch-orchid-flowers-chairs-and-bulb-lights-in-forest-outdoors.jpg?s=612x612&w=0&k=20&c=QZZhygQnFW9g7ogHgC-GnLMJwt3je_q6PG2Y43J4ZY4="
                        alt="Image 5"
                    />
                </div>

                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/853125648/photo/wedding-hall-decorated-with-flowers.jpg?s=612x612&w=0&k=20&c=tpv8nrTbbXfZl2f60jHLDWSNp0SURmz8LnEuh9Pm-Os="
                        alt="Image 6"
                    />
                </div>

                <div className={styles.carouselImageContainer}>
                    <img
                        src="https://media.istockphoto.com/id/863505328/photo/authentic-wealth-dinner-for-two-on-private-porch.jpg?s=612x612&w=0&k=20&c=shLJkRAVgtqyTbsGhyV4s_lyFGpjxFf07wkl-wOn_JA="
                        alt="Image 7"
                    />
                </div>
            </Carousel>
        </div>
    );
}