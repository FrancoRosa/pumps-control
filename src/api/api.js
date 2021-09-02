import axios from 'axios';

const host='localhost'

export const startControlledPump = async (pump) => {
  console.log('... starting controlled pump');
  const {id, pulses, timeout} = pump
  const url = `http://${host}:9999/api/startcontrolled`;
  const response = await axios.post(url, {id, pulses, timeout})
  return response.data
}

export const startPump = async (pump) => {
  console.log('... starting pump');
  const {id} = pump
  const url = `http://${host}:9999/api/start/${id}`;
  const response = await axios.post(url)
  return response.data
}

export const stopPump = async (pump) => {
  console.log('... stop pump');
  const {id} = pump
  const url = `http://${host}:9999/api/stop/${id}`;
  const response = await axios.post(url)
  return response.data
}

export const infoPump = async (id) => {
  console.log('... getting events');
  const url = `http://${host}:9999/api/info/${id}`;
  const response = await axios.get(url)
  return response.data
}
