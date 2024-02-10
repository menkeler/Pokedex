function FormsContent({ pokemon }) {
    return (
        <div className='pokemon-forms'>
            <img src={pokemon?.sprites?.back_default} alt="" width='100%' />
            <img src={pokemon?.sprites?.front_default} alt="" width='100%' />
            <h2>Back</h2>
            <h2>Front</h2>
            <img src={pokemon?.sprites?.back_shiny} alt="" width='100%' />
            <img src={pokemon?.sprites?.front_shiny} alt="" width='100%' />
            <h2>Shiny Back</h2>
            <h2>Shiny Front</h2>
        </div>
    )   
}

export default FormsContent