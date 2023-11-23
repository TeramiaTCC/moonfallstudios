import '../css/styles.css';
import '../css/scroll.css';
import Moon from '../assets/images/Moon.png'

function Home() {
  return (
    <div class='container'> 
        <header>
            <nav> 
                <img src= "https://placehold.co/600x100" alt='logo' /> 
                <ul class="list"> 
                    <li><a href="#Projetos">Projetos</a></li> 
                    <li><a href="#Produções">Produções</a></li> 
                    <li><a href="#Sobre">Sobre nós</a></li> 
                    <li><a href='#Midias'>Midias</a></li> 
                </ul> 
            </nav>
        </header>

        <main>
            <section > 
                <img src={Moon} alt='moon' height={600}/>
                <h1>WOW</h1>
            </section> 
        </main>

        <footer > 

        </footer> 
    </div>
  );
}

export default Home;