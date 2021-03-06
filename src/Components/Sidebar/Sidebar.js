import './Sidebar.css'

const Sidebar = () => {
    return (
        <section>
            <h3 className='made-title'>Made Drinks</h3>
            <div className='made-drink-card'>
                <h3>Drink</h3>
                <img className='made-image' src='https://www.boliviabella.com/images/bolivia_facts_bolivian_food_recipes_purple_corn_api.jpg'></img>
            </div>
            <div className='made-drink-card'>
                <h3>Drink</h3>
                <img className='made-image' src='https://www.boliviabella.com/images/bolivia_facts_bolivian_food_recipes_purple_corn_api.jpg'></img>
            </div>
            <div className='made-drink-card'>
                <h3>Drink</h3>
                <img className='made-image' src='https://www.boliviabella.com/images/bolivia_facts_bolivian_food_recipes_purple_corn_api.jpg'></img>
            </div>
        </section>
    )
}

export default Sidebar;