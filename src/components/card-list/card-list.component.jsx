import Card from "../card/card.component";

import './card-list.styles.css';

const CardList = function(props) {
    const { monsters } = props;
        return (
            <div className="card-list">
                {monsters.map(monster => <Card key={monster.id} monster={monster}></Card>)}
            </div>
        );
}

export default CardList;