import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.poke;
    return (
      <section className='pokemon'>
        <h1>{name}</h1>
        <h1>{type}</h1>
        <h1>Peso: {averageWeight.value} kg</h1>
        <img src={image} alt={name} />
      </section>
    );
  }
}

export default Pokemon;
