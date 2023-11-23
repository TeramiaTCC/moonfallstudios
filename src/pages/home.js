import '../css/styles.css';
import '../css/scroll.css';
import MoonGif from '../assets/images/giphyMoon.gif'
import MoonGifXL from '../assets/images/MoonGifXL.gif'
import Moon from '../assets/images/Moon.png'
import LogoH from '../assets/images/logoH.png'

import Yt from '../assets/svg/youtube.svg'
import Sc from '../assets/svg/soundcloud.svg'
import Insta from '../assets/svg/instagram.svg'

function Home() {
  return (
    <div class='container'> 
        <header>
            <nav class="menu">
                <a href='#Home'>
                    <img src={Moon} alt='moonGif' height={100}/>
                    <img src={LogoH} alt='logo' height={100}/> 
                </a>
                <ul >
                    <li><a href="#Projetos">Projetos</a></li> 
                    <li><a href="#Produções">Produções</a></li>
                    <li><a href='#Mídias'>Mídias</a></li> 
                    <li><a href="#Sobre">Sobre nós</a></li> 
                </ul> 
            </nav>
        </header>

        <main>
            <section className='view'>
                
            <div class='imageCentered'>
                <img src={MoonGifXL} alt='Moon' height={600} style={{borderRadius: '350px'}} />
                <img src={LogoH} alt='Moon' height={100}/>
                <br/>
                <h2>Nossas mídias</h2>
                <br/>
            </div>
            <div class='midLinks'>
                <a href='https://www.instagram.com/mnfll.dsgn/' target='_blank'>
                    <img src={Insta} height={30}/>
                </a>
                <a href='https://www.youtube.com/channel/UCkwzCtKmApUh9D-TogMLy1A' target='_blank'>
                    <img src={Yt} height={30}/>
                </a>
                <a href='https://soundcloud.com/mnfllprod' target='_blank'>
                    <img src={Sc} height={30}/>
                </a>
            </div>
            </section>

            <hr class='hr'/>

            <section id="Projetos">
                <h1>Projetos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus. Ut diam quam nulla porttitor massa id neque. Ac orci phasellus egestas tellus rutrum tellus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Libero volutpat sed cras ornare arcu dui vivamus. Vitae congue eu consequat ac felis donec. Id semper risus in hendrerit gravida rutrum quisque non. Eget nullam non nisi est sit amet facilisis magna. Massa massa ultricies mi quis hendrerit dolor magna eget.</p>

                <p>Amet nisl suscipit adipiscing bibendum est ultricies integer. Mi ipsum faucibus vitae aliquet nec ullamcorper. Purus in massa tempor nec feugiat nisl pretium fusce id. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nisl pretium fusce id velit ut tortor pretium. Nibh tellus molestie nunc non. Suscipit adipiscing bibendum est ultricies integer. Lacus sed viverra tellus in. Molestie at elementum eu facilisis sed odio. Odio ut enim blandit volutpat maecenas. Sollicitudin nibh sit amet commodo nulla facilisi.</p>

                <p>Neque ornare aenean euismod elementum nisi quis eleifend. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Faucibus turpis in eu mi bibendum neque. Ornare suspendisse sed nisi lacus sed. Pharetra sit amet aliquam id diam maecenas ultricies. Eget dolor morbi non arcu risus quis varius. Placerat orci nulla pellentesque dignissim enim sit. Et ultrices neque ornare aenean euismod. Pretium fusce id velit ut tortor. Dictum varius duis at consectetur lorem donec. Mauris ultrices eros in cursus turpis massa.</p>

                <p>Mauris sit amet massa vitae. Viverra maecenas accumsan lacus vel facilisis volutpat. Nam at lectus urna duis convallis convallis tellus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Amet est placerat in egestas erat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Lacus vel facilisis volutpat est velit. Nunc faucibus a pellentesque sit amet porttitor. Lectus quam id leo in vitae turpis massa sed. Urna duis convallis convallis tellus id interdum velit laoreet. Porta nibh venenatis cras sed. Vulputate dignissim suspendisse in est ante. Eu facilisis sed odio morbi. Urna porttitor rhoncus dolor purus non enim praesent. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>

                <p>Mi bibendum neque egestas congue quisque egestas. Tristique senectus et netus et malesuada fames ac turpis. Est velit egestas dui id ornare arcu odio ut. Vel eros donec ac odio. Netus et malesuada fames ac. Arcu dui vivamus arcu felis. Orci a scelerisque purus semper eget duis at tellus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Amet nisl purus in mollis nunc sed id semper risus. Quam pellentesque nec nam aliquam sem et tortor.</p>

            </section>

            <hr class='hr'/>

            <section id="Produções">
                <h1>Produções</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus. Ut diam quam nulla porttitor massa id neque. Ac orci phasellus egestas tellus rutrum tellus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Libero volutpat sed cras ornare arcu dui vivamus. Vitae congue eu consequat ac felis donec. Id semper risus in hendrerit gravida rutrum quisque non. Eget nullam non nisi est sit amet facilisis magna. Massa massa ultricies mi quis hendrerit dolor magna eget.</p>

                <p>Amet nisl suscipit adipiscing bibendum est ultricies integer. Mi ipsum faucibus vitae aliquet nec ullamcorper. Purus in massa tempor nec feugiat nisl pretium fusce id. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nisl pretium fusce id velit ut tortor pretium. Nibh tellus molestie nunc non. Suscipit adipiscing bibendum est ultricies integer. Lacus sed viverra tellus in. Molestie at elementum eu facilisis sed odio. Odio ut enim blandit volutpat maecenas. Sollicitudin nibh sit amet commodo nulla facilisi.</p>

                <p>Neque ornare aenean euismod elementum nisi quis eleifend. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Faucibus turpis in eu mi bibendum neque. Ornare suspendisse sed nisi lacus sed. Pharetra sit amet aliquam id diam maecenas ultricies. Eget dolor morbi non arcu risus quis varius. Placerat orci nulla pellentesque dignissim enim sit. Et ultrices neque ornare aenean euismod. Pretium fusce id velit ut tortor. Dictum varius duis at consectetur lorem donec. Mauris ultrices eros in cursus turpis massa.</p>

                <p>Mauris sit amet massa vitae. Viverra maecenas accumsan lacus vel facilisis volutpat. Nam at lectus urna duis convallis convallis tellus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Amet est placerat in egestas erat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Lacus vel facilisis volutpat est velit. Nunc faucibus a pellentesque sit amet porttitor. Lectus quam id leo in vitae turpis massa sed. Urna duis convallis convallis tellus id interdum velit laoreet. Porta nibh venenatis cras sed. Vulputate dignissim suspendisse in est ante. Eu facilisis sed odio morbi. Urna porttitor rhoncus dolor purus non enim praesent. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>

                <p>Mi bibendum neque egestas congue quisque egestas. Tristique senectus et netus et malesuada fames ac turpis. Est velit egestas dui id ornare arcu odio ut. Vel eros donec ac odio. Netus et malesuada fames ac. Arcu dui vivamus arcu felis. Orci a scelerisque purus semper eget duis at tellus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Amet nisl purus in mollis nunc sed id semper risus. Quam pellentesque nec nam aliquam sem et tortor.</p>

            </section>

            <hr class='hr'/>

            <section id="Midias">
                <h1>Midias</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus. Ut diam quam nulla porttitor massa id neque. Ac orci phasellus egestas tellus rutrum tellus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Libero volutpat sed cras ornare arcu dui vivamus. Vitae congue eu consequat ac felis donec. Id semper risus in hendrerit gravida rutrum quisque non. Eget nullam non nisi est sit amet facilisis magna. Massa massa ultricies mi quis hendrerit dolor magna eget.</p>

                <p>Amet nisl suscipit adipiscing bibendum est ultricies integer. Mi ipsum faucibus vitae aliquet nec ullamcorper. Purus in massa tempor nec feugiat nisl pretium fusce id. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nisl pretium fusce id velit ut tortor pretium. Nibh tellus molestie nunc non. Suscipit adipiscing bibendum est ultricies integer. Lacus sed viverra tellus in. Molestie at elementum eu facilisis sed odio. Odio ut enim blandit volutpat maecenas. Sollicitudin nibh sit amet commodo nulla facilisi.</p>

                <p>Neque ornare aenean euismod elementum nisi quis eleifend. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Faucibus turpis in eu mi bibendum neque. Ornare suspendisse sed nisi lacus sed. Pharetra sit amet aliquam id diam maecenas ultricies. Eget dolor morbi non arcu risus quis varius. Placerat orci nulla pellentesque dignissim enim sit. Et ultrices neque ornare aenean euismod. Pretium fusce id velit ut tortor. Dictum varius duis at consectetur lorem donec. Mauris ultrices eros in cursus turpis massa.</p>

                <p>Mauris sit amet massa vitae. Viverra maecenas accumsan lacus vel facilisis volutpat. Nam at lectus urna duis convallis convallis tellus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Amet est placerat in egestas erat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Lacus vel facilisis volutpat est velit. Nunc faucibus a pellentesque sit amet porttitor. Lectus quam id leo in vitae turpis massa sed. Urna duis convallis convallis tellus id interdum velit laoreet. Porta nibh venenatis cras sed. Vulputate dignissim suspendisse in est ante. Eu facilisis sed odio morbi. Urna porttitor rhoncus dolor purus non enim praesent. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>

                <p>Mi bibendum neque egestas congue quisque egestas. Tristique senectus et netus et malesuada fames ac turpis. Est velit egestas dui id ornare arcu odio ut. Vel eros donec ac odio. Netus et malesuada fames ac. Arcu dui vivamus arcu felis. Orci a scelerisque purus semper eget duis at tellus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Amet nisl purus in mollis nunc sed id semper risus. Quam pellentesque nec nam aliquam sem et tortor.</p>

            </section>


            <hr class='hr'/>


            <section id="Sobre">
                <h1>Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus. Ut diam quam nulla porttitor massa id neque. Ac orci phasellus egestas tellus rutrum tellus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Libero volutpat sed cras ornare arcu dui vivamus. Vitae congue eu consequat ac felis donec. Id semper risus in hendrerit gravida rutrum quisque non. Eget nullam non nisi est sit amet facilisis magna. Massa massa ultricies mi quis hendrerit dolor magna eget.</p>

                <p>Amet nisl suscipit adipiscing bibendum est ultricies integer. Mi ipsum faucibus vitae aliquet nec ullamcorper. Purus in massa tempor nec feugiat nisl pretium fusce id. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nisl pretium fusce id velit ut tortor pretium. Nibh tellus molestie nunc non. Suscipit adipiscing bibendum est ultricies integer. Lacus sed viverra tellus in. Molestie at elementum eu facilisis sed odio. Odio ut enim blandit volutpat maecenas. Sollicitudin nibh sit amet commodo nulla facilisi.</p>

                <p>Neque ornare aenean euismod elementum nisi quis eleifend. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Faucibus turpis in eu mi bibendum neque. Ornare suspendisse sed nisi lacus sed. Pharetra sit amet aliquam id diam maecenas ultricies. Eget dolor morbi non arcu risus quis varius. Placerat orci nulla pellentesque dignissim enim sit. Et ultrices neque ornare aenean euismod. Pretium fusce id velit ut tortor. Dictum varius duis at consectetur lorem donec. Mauris ultrices eros in cursus turpis massa.</p>

                <p>Mauris sit amet massa vitae. Viverra maecenas accumsan lacus vel facilisis volutpat. Nam at lectus urna duis convallis convallis tellus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Amet est placerat in egestas erat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Lacus vel facilisis volutpat est velit. Nunc faucibus a pellentesque sit amet porttitor. Lectus quam id leo in vitae turpis massa sed. Urna duis convallis convallis tellus id interdum velit laoreet. Porta nibh venenatis cras sed. Vulputate dignissim suspendisse in est ante. Eu facilisis sed odio morbi. Urna porttitor rhoncus dolor purus non enim praesent. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>

                <p>Mi bibendum neque egestas congue quisque egestas. Tristique senectus et netus et malesuada fames ac turpis. Est velit egestas dui id ornare arcu odio ut. Vel eros donec ac odio. Netus et malesuada fames ac. Arcu dui vivamus arcu felis. Orci a scelerisque purus semper eget duis at tellus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Amet nisl purus in mollis nunc sed id semper risus. Quam pellentesque nec nam aliquam sem et tortor.</p>

            </section>
        </main>

        <footer > 
            <section > 
                <img src={MoonGif} alt='moon' height={130}/>
            </section> 
        </footer> 
    </div>
  );
}

export default Home;