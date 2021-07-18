import CardConfig from "./CardConfig";

const Config = () => {
  const pumps = [
    { id: 1, name: 'Pump 1', on: false },
    { id: 2, name: 'Pump 2', on: false },
    { id: 3, name: 'Pump 3', on: false },
    { id: 4, name: 'Pump 4', on: true },
  ]
  
  const handleChange = () => {
    console.log('...')
  }
  return (
    <div className="columns">
      {pumps.map(pump => (
        <CardConfig key={pump.id} pump={pump}/>
      ))}
    </div>
  )
};

export default Config;
