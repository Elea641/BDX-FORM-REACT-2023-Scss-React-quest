import '../styles/card.scss'
function Card() {

    return (
        <div className='container'>
            <div className='section-top'>
                <img src="https://images.pexels.com/photos/14656105/pexels-photo-14656105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo picture" />
                <div className='container-info'>
                    <h1>Travel</h1>
                    <h2>Dream destination</h2>
                    <p>(2023)</p>
                </div>
            </div>
            <div className='section-bottom'>
                <h2>Vote</h2>
                <div class="rating">
                    <a href="#5" title="Donner 5 étoiles">☆</a>
                    <a href="#4" title="Donner 4 étoiles">☆</a>
                    <a href="#3" title="Donner 3 étoiles">☆</a>
                    <a href="#2" title="Donner 2 étoiles">☆</a>
                    <a href="#1" title="Donner 1 étoile">☆</a>
                </div>
            </div>
        </div>
    )
}

export default Card