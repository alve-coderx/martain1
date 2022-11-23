import React from 'react'
import { Banner, Navbar } from '../Components';
import Heading from '../Components/Heading'
import Overview from '../Components/Overview'
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import Sopnser from '../Components/Sopnser'
import Services from '../Components/Services';
import Social from '../Components/Social';
import Clients from '../Components/Clients';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Heading/>
            <Navbar/>
            <div className='lg:mx-64'>
                <Banner />
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 '>
                    <Overview text="Self-custodial storage of all tokens" typo="text-5xl " wrapper="w-full bg-[#F4F4F4] flex items-top px-5 pt-10 overflow-hidden rounded-xl" position="rotate-[35deg] translate-x-1 translate-y-12  shadow-2xl" img={img1} />
                    <Overview text="Martian is the default Move wallet" typo="text-5xl " wrapper="w-full bg-[#F4F4F4] w-auto flex flex-col items-center text-center px-10 pt-10 overflow-hidden rounded-xl" position="w-full" img={img2} />
                    <Overview text="Collect, manage & mint NFTs" typo="text-5xl pt-10" wrapper="w-full bg-[#F4F4F4] w-auto flex flex-col items-center text-center px-10 pt-10 overflow-hidden rounded-xl" position="w-96 translate-y-12 shadow-2xl" img={img3} />
                    <Overview text="Get Web3 notifications directly in your wallet" typo="text-5xl pt-10" wrapper="w-full bg-[#F4F4F4] w-auto flex flex-col items-center text-center px-10 pt-10 overflow-hidden rounded-xl" position="w-96 translate-y-12 shadow-2xl" img={img4} />
                    <Overview text="Swap tokens" typo="text-5xl pt-4" wrapper="w-full bg-[#F4F4F4] w-auto flex flex-col items-center text-center px-10 pt-2 overflow-hidden rounded-xl" position="w-96 h-[27rem] translate-y-12 shadow-2xl" img={img5} />
                    <Overview text="The entire Move ecosystem at your fingertips." typo="text-5xl pt-4" wrapper="w-full bg-[#F4F4F4] w-auto flex items-top pl-10 pt-2 overflow-hidden rounded-xl" position="w-[90rem]" img={img6} />
                </div>
                <Sopnser />
                <Services />
                <Social />
                <Clients />
                <Footer />
                <svg width="100%" height="auto" viewBox="0 0 1348 255" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1f1667ce=""><path d="M214.766 0.90564V3.13407L203.995 16.8761V251.604H143.828V249.376L172.797 235.634L172.426 28.3897H170.569L100.744 194.779H98.1446L21.6351 38.0462H19.778V163.21C19.778 183.266 21.1399 198.37 23.8635 208.521C26.8348 218.673 31.663 226.473 38.3483 231.92C45.2812 237.367 56.1758 243.062 71.032 249.005V251.604H11.6071V21.333L0.836352 3.13407V0.90564H37.6055L109.287 148.725H111.515L172.797 0.90564H214.766ZM347.457 0.90564L429.166 249.376V251.604H361.941V249.376L391.654 235.634L367.512 163.581H279.489C272.061 185.123 268.347 200.846 268.347 210.75C268.347 219.664 270.699 226.968 275.404 232.663C280.356 238.358 288.403 243.929 299.545 249.376V251.604H237.149V249.376L319.972 25.4184L312.173 3.13407V0.90564H347.457ZM324.058 37.3034L281.718 156.896H365.284L325.544 37.3034H324.058ZM566.972 127.184L644.224 249.005V251.604H570.314V249.376L600.398 235.634L534.66 130.155H503.461V236.377L533.545 249.376V251.604H442.179V249.376L471.892 236.377L472.263 16.8761L443.294 3.13407V0.90564H544.687C573.162 0.90564 594.951 5.61011 610.055 15.0191C625.159 24.1804 632.711 38.0462 632.711 56.6165C632.711 87.3194 610.55 110.842 566.229 127.184H566.972ZM503.461 123.47H538.002C557.315 123.47 572.171 118.146 582.571 107.499C592.97 96.8521 598.17 81.9959 598.17 62.9304C598.17 26.0374 577.99 7.59094 537.631 7.59094H503.461V123.47ZM837.608 82.9863H835.379L828.322 62.9304C821.142 42.8745 816.066 29.6277 813.095 23.19C810.124 16.5047 806.905 12.2954 803.438 10.5622C799.972 8.58135 794.029 7.59094 785.611 7.59094H763.326V236.377L793.039 249.376V251.604H701.673V249.376L731.757 236.377V7.59094H709.473C700.806 7.59094 694.74 8.58135 691.274 10.5622C687.807 12.2954 684.588 16.5047 681.617 23.19C678.646 29.6277 673.57 42.9983 666.39 63.3018C664.161 69.9871 661.933 76.5486 659.704 82.9863H657.476V0.90564H837.608V82.9863ZM884.1 236.377V16.1333L854.388 3.13407V0.90564H945.753V3.13407L916.041 16.1333V236.377L945.753 249.376V251.604H854.388V249.376L884.1 236.377ZM1067.43 0.90564L1149.14 249.376V251.604H1081.92V249.376L1111.63 235.634L1087.49 163.581H999.465C992.037 185.123 988.323 200.846 988.323 210.75C988.323 219.664 990.675 226.968 995.38 232.663C1000.33 238.358 1008.38 243.929 1019.52 249.376V251.604H957.125V249.376L1039.95 25.4184L1032.15 3.13407V0.90564H1067.43ZM1044.03 37.3034L1001.69 156.896H1085.26L1045.52 37.3034H1044.03ZM1287.35 0.90564H1347.88V254.576H1334.51L1193.38 37.3034H1191.52V162.467C1191.52 181.78 1193.01 196.513 1195.98 206.664C1198.95 216.816 1203.9 224.863 1210.84 230.806C1218.02 236.501 1229.16 242.567 1244.26 249.005V251.604H1183.35V23.19L1167.75 3.13407V0.90564H1207.49L1337.86 201.465V201.093H1339.71V90.7858C1339.71 71.7203 1338.23 57.1117 1335.26 46.96C1332.29 36.5606 1327.21 28.2658 1320.03 22.0758C1312.85 15.8857 1301.95 9.69557 1287.35 3.50547V0.90564Z" fill="#EDEDED" data-v-1f1667ce=""></path></svg>

            </div>
        </div>
    )
}

export default Home