import '../css/styles.css';

function Home() {
  return (
    <div class='container'> 
        <header>
            <nav> 
                <div class="logo"> 
                    <img src= "https://placehold.co/600x100" alt='logo' /> 
                </div> 
                <ul class="nav-list"> 
                    <li><a href="#Projetos">Projetos</a></li> 
                    <li><a href="#Produções">Produções</a></li> 
                    <li><a href="#Sobre">Sobre nós</a></li> 
                    <li><a href='#Midias'>Midias</a></li> 
                </ul> 

            </nav>
        </header>

        <main>
            <section > 
                <img src="../asset/images/Moon.png" alt='moon'/>
            </section> 
        </main>

        <footer > 

        </footer> 
    </div>
  );
}

export default Home;