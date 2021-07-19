import axios from 'axios';

const host='localhost'

export const startPump = async (pump) => {
  console.log('... starting pump');
  const {id, pulses, timeout} = pump
  const url = `http://${host}:9999/api/start`;
  const response = await axios.post(url, {id, pulses, timeout})
  return response.data
}

export const infoPump = async (id) => {
  console.log('... getting events');
  const url = `http://${host}:9999/api/info/${id}`;
  const response = await axios.get(url)
  return response.data
}