import Card from './Card'

const Home = () => {
  
  const pumps = [
    { id: 1, name: 'Pump 1', on: false },
    { id: 2, name: 'Pump 2', on: false },
    { id: 3, name: 'Pump 3', on: false },
    { id: 4, name: 'Pump 4', on: true },
  ]
  
  const handleClick = pump => {
    console.log('... test:', pump.id)
  }

  return (
    <div className="columns">
      {pumps.map(pump => (
        <Card key={pump.id} pump={pump} handleClick={() => handleClick(pump)}/>
      ))}
    </div>
  )
};

export default Home;
