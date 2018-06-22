import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
import Nav from './components/nav';
import Jumbotron from './components/jumbotron';
import cards from './cards.json';
import Wrapper from './components/wrapper';
import Footer from './components/footer';

class App extends Component {

  state = {
    cards,
    count: 0,
    unselectedCard: cards,
    message: "Click one to start!",
    highscore: 0
  };

  shuffle = (array) => {
    for (let i= array.length -1; i > 0; i--) {
      let k = Math.floor(Math.random() * (i+1));
      [array[i], array[k]] = [array[k], array[i]];
    }
  }

  playGame = (name) => {
    const find = this.state.unselectedCard.find(card => card.name === name)
    console.log(find)

    if(find === undefined) {
      this.setState({
        count: 0,
        unselectedCard: cards,
        message: "WRONG!"
      });
    }
    else {
      const newCard = this.state.unselectedCard.filter(item => item.name !== name);
      console.log(newCard)
      
      if(this.state.count < this.state.highscore) {
          this.setState({ 
              count: this.state.count + 1,
              unselectedCard: newCard,
              message: "You have guessed correctly!"
          });
      } else {
          this.setState({
              count: this.state.count + 1,
              unselectedCard: newCard,
              message: "You have guessed correctly!",
              highscore: this.state.count + 1
          })
      }
      
  }
  this.shuffle(cards)
  }

  render() {
    return (
     <div>
     <Nav score={this.state.count} message={this.state.message} highscore={this.state.highscore}/>
     <Jumbotron/>
     <Wrapper>
     {this.state.cards.map(card=>{
       <Card
       game={this.playGame}
       key={card.name}
       name={card.name}
       image={card.image}
       />
     })}
     </Wrapper>
     <Footer />
     </div>
    )
  }
}

export default App;
